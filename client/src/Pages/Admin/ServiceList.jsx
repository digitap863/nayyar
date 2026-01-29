import { useEffect, useMemo, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from "react-icons/ri";
import Modal from 'react-modal';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import EditorToolbar, {
    formats,
} from "../../Components/Admin/EditorToolbar";
import Sidebar from '../../Components/Admin/Sidebar';
import { deleteData, getdata, postForm, putForm } from '../../api/req';


const ServiceList = () => {
    const [data, setData] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getServices = async () => {
        try {
            const response = await getdata("/services");
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };

    const getSingleService = async (id) => {
        try {
            const response = await getdata(`/service-desc/${id}`);
            return response.data.data;
        } catch (error) {
            console.error('Error fetching service description:', error);
            return '';
        }
    }




    useEffect(() => {
        getServices();
    }, []);



    const handleDelete = async (id) => {
        try {
            const response = await deleteData(`/service/${id}`);
            setData(data.filter((x) => x._id !== id));
            if (response.data.success) {
                toast.success(response.data.message);
                getServices();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error deleting service:', error);
            toast.error('An error occurred while deleting service.');
        }
    };

    const handleSave = async (id, updatedServiceData) => {
        try {
            console.log(updatedServiceData, "updatedServiceDataupdatedServiceDataupdatedServiceDataupdatedServiceData")

            for (const [key, value] of updatedServiceData.entries()) {
                console.log(`${key}: ${value}`); // This will show you each key-value pair in the FormData
            }
            const response = await putForm(`/service/${id}`, updatedServiceData);
            setIsModalOpen(false);
            setSelectedService(null);
            if (response.data.success) {
                toast.success(response.data.message);
                getServices();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error updating service:', error);
            toast.error('An error occurred while updating service.');
        }
    };

    const handleEdit = async (service) => {
        const completeServiceData = await getSingleService(service._id);

        if (completeServiceData) {
            setSelectedService(completeServiceData);
            setIsModalOpen(true);
        }
    };



    return (
        <div className='min-h-screen bg-white dark:bg-gray-900'>
            <Sidebar />
            <div className='px-8 pt-8 sm:ml-64'>
                <div className="min-w-[60%] h-full">
                    <div className="overflow-x-auto overflow-y-auto h-[97vh] bg-slate-100 p-2 rounded-xl">
                        <table className="table-auto w-full bg-white border border-gray-200 text-center">
                            <caption className="text-center text-2xl font-semibold py-4">Course List</caption>
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-4 py-2 text-center">ID</th>
                                    <th className="px-4 py-2 text-center">Image</th>
                                    <th className="px-4 py-2 text-center">Title</th>
                                    <th className="px-4 py-2 text-center">Description</th>
                                    <th className="px-4 py-2 text-center">Edit</th>
                                    <th className="px-4 py-2 text-center">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((items, i) => (
                                    <tr key={i}>
                                        <td className="border px-4 py-2">{i + 1}</td>

                                        <td className="border px-4 py-2 max-w-md ">
                                            <img src={`${items?.Image}`} alt="" className='w-28 aspect-square object-cover mx-auto' />
                                        </td>


                                        <td className="border px-4 py-2 max-w-md">
                                            {items?.heading}
                                        </td>
                                        <td className="border px-4 py-2 max-w-md">
                                            {items?.description}
                                        </td>

                                        {/* <td
                                            className="border px-4 py-2 max-w-md line-clamp-3"
                                            dangerouslySetInnerHTML={{ __html: items?.description1 }}
                                            ></td> */}


                                        <td className="border px-4 py-2">
                                            <button onClick={() => handleEdit(items)}>
                                                <FaRegEdit size={25} className='text-green-900' />
                                            </button>
                                        </td>

                                        <td className="border px-4 py-2">
                                            <button onClick={() => handleDelete(items._id)}>
                                                <RiDeleteBin5Fill size={25} className='text-red-500' />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {selectedService && (
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        },
                        content: {
                            position: 'relative',
                            top: 'auto',
                            left: 'auto',
                            right: 'auto',
                            bottom: 'auto',
                            width: '90%',
                            maxWidth: '600px',
                            maxHeight: '80vh',
                            overflowY: 'auto',
                            borderRadius: '8px',
                            padding: '20px',
                            margin: '0 auto',
                        },
                    }}
                >
                    <button onClick={() => setIsModalOpen(false)} className="absolute top-0 right-0 m-4 bg-gray-400 p-2 rounded">
                        Close
                    </button>
                    <ServiceEditModal service={selectedService} onSave={handleSave} onClose={() => setIsModalOpen(false)} />
                </Modal>
            )}
        </div>
    );
};





const ServiceEditModal = ({ service, onSave, onClose }) => {
    const [formData, setFormData] = useState({
        heading: service.heading,
        description1: service.description1,
        description: service.description,
        slug: service.slug,
        eligibility: service.eligibility,
        duration: service.duration,
    });
    const [imagePreview, setImagePreview] = useState(null);
    const quillRef = useRef(null);


    const [images, setImages] = useState();

    useEffect(() => {
        setImages({
            Image: `${service.Image}`,
        });
    }, [service]);

    const createSlug = (text) => {
        return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-')        // Replace spaces with -
            .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
            .replace(/\-\-+/g, '-')      // Replace multiple - with single -
            .replace(/^-+/, '')           // Trim - from start of text
            .replace(/-+$/, '');          // Trim - from end of text
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newFormData = { ...formData, [name]: value };
        if (name === 'heading') {
            newFormData.slug = createSlug(value);
        }
        setFormData(newFormData);
    };


    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            const file = files[0];
            // Set the file to state for submission and preview
            setImages({ ...images, [name]: file });
        }
    };



    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            if (input.files) {
                const file = input.files[0];
                const uploadFormData = new FormData();
                uploadFormData.append('image', file);

                try {
                    const res = await postForm('/upload-editor-image', uploadFormData);
                    if (res.data.success) {
                        const editor = quillRef.current?.getEditor();
                        const range = editor?.getSelection(true);
                        // Insert the image URL returned from the server
                        editor?.insertEmbed(range.index, 'image', res.data.url);
                    } else {
                        toast.error('Image upload failed.');
                    }
                } catch (error) {
                    toast.error('An error occurred during image upload.');
                    console.error(error);
                }
            }
        };
    };

    const modules = useMemo(() => ({
        toolbar: {
            container: "#t1", // Make sure this ID matches your EditorToolbar
            handlers: {
                image: imageHandler,
            },
        },
    }), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedServiceData = new FormData();
        updatedServiceData.append('heading', formData.heading);
        updatedServiceData.append('description', formData.description);
        updatedServiceData.append('slug', formData.slug);
        updatedServiceData.append('description1', formData.description1);
        updatedServiceData.append('eligibility', formData.eligibility);
        updatedServiceData.append('duration', formData.duration);


        if (images?.Image instanceof File) {
            updatedServiceData.append('Image', images.Image);
        }

        // Log form data for debugging
        for (const [key, value] of updatedServiceData.entries()) {
            console.log(`${key}: ${value}`);
        }

        onSave(service._id, updatedServiceData);
    };

    const handleQuillChange = (value, name) => {
        setFormData({ ...formData, [name]: value });
    };


    return (
        <div className="modal-container">
            <form onSubmit={handleSubmit} className="p-4">
                <h1 className="text-2xl mb-4">Edit Service</h1>
                <div className="mb-4">
                    <label>Service Title</label>
                    <input
                        type="text"
                        name="heading"
                        value={formData.heading}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Slug</label>
                    <input
                        type="text"
                        name="slug"
                        value={formData.slug}
                        readOnly
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-gray-100"
                    />
                </div>



                <div className="mb-4">
                    <label>Description </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />

                </div>


                <div className="mb-6 mt-10">
                    <EditorToolbar toolbarId={"t1"} />
                    <label className="block text-gray-700 font-semibold mb-2">Description 1</label>
                    <ReactQuill
                        ref={quillRef}
                        theme="snow"
                        value={formData.description1}
                        onChange={(value) => handleQuillChange(value, 'description1')}
                        placeholder={"Write something ..."}
                        //   modules={modules("t1")}
                        modules={modules}
                        formats={formats}
                        className="h-72 mb-4 text-gray-700"
                    />



                </div>


                <div className="mb-4">
                    <label>Course Image</label>
                    <input
                        type="file"
                        name="Image"
                        onChange={handleFileChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                    {images?.Image && (
                        <img
                            src={
                                images?.Image instanceof File
                                    ? URL.createObjectURL(images.Image)
                                    : images.Image
                            }
                            alt="Service"
                            className="w-20 h-20 object-cover mt-2"
                        />
                    )}
                </div>

                {imagePreview && (
                    <div className="mb-4">

                        <button
                            type="button"
                            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Crop Image
                        </button>
                    </div>
                )}

                <div className="mb-4">
                    <label>Eligiblity</label>
                    <input
                        type="text"
                        name="eligibility"
                        value={formData.eligibility}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label>Duration</label>
                    <input
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#1D1EE3] text-white px-4 py-2 rounded-md mt-4 hover:bg-[#1618C0]">
                    Save
                </button>
                <button
                    type="button"
                    onClick={onClose}
                    className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-gray-700">
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default ServiceList;
