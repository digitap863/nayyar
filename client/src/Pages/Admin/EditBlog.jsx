import { Plus } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../Components/Admin/Sidebar';
import { getdata, putForm } from '../../api/req';

const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const quillRef = useRef(null);
    

    const [formData, setFormData] = useState({
        heading: '',
        subHeading: '',
        description: '',
        authorName: '',
        authorPosition: '',
    });

    const [images, setImages] = useState({
        Image: null,
        authorImage: null,
    });

    const [imagePreviews, setImagePreviews] = useState({
        Image: null,
        authorImage: null,
    });

    const [existingImages, setExistingImages] = useState({
        Image: '',
        authorImage: '',
    });

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await getdata(`/blogs/${id}`);
                if (response.data.success) {
                    const { heading, subHeading, description, authorName, authorPosition, Image, authorImage } = response.data.data;
                    setFormData({ heading, subHeading, description, authorName, authorPosition });
                    setExistingImages({ Image, authorImage });
                } else {
                    toast.error('Failed to fetch blog data.');
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
                toast.error('An error occurred while fetching the blog.');
                navigate('/admin/bloglist');
            }
        };

        fetchBlog();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            const file = files[0];

            setImages({ ...images, [name]: file });

            const reader = new FileReader();
            reader.onload = () => {
                setImagePreviews({ ...imagePreviews, [name]: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('heading', formData.heading);
        data.append('subHeading', formData.subHeading);
        data.append('description', formData.description);
        data.append('authorName', formData.authorName);
        data.append('authorPosition', formData.authorPosition);

        if (images.Image) {
            data.append('Image', images.Image);
        }

        if (images.authorImage) {
            data.append('authorImage', images.authorImage);
        }

        try {
            const response = await putForm(`/blogs/${id}`, data);
            if (response.data.success) {
                toast.success(response.data.message);
                navigate('/admin/bloglist');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('An error occurred while updating the blog.');
            console.error('Error updating blog:', error);
        }
    };

    const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D1EE3]";

    return (
        <div className='min-h-screen bg-white dark:bg-gray-900'>
            <Sidebar />
            <div className='px-8 pt-8 sm:ml-64'>
                <div className="min-w-[20%] h-full">
                    <div className="overflow-x-auto overflow-scroll h-[95vh] bg-white p-2 rounded-xl no-scrollbar">
                        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
                            <h1 className='text-center uppercase font-bold text-2xl mb-6'>Edit Blog Post</h1>

                            {/* Heading Input */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Heading</label>
                                <input
                                    type="text"
                                    name="heading"
                                    value={formData.heading}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                />
                            </div>

                            {/* Sub Heading Input */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Short description</label>
                                <input
                                    type="text"
                                    name="subHeading"
                                    value={formData.subHeading}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                />
                            </div>

                            {/* Description Input */}
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2">Description</label>
                                <ReactQuill
                                    ref={quillRef}
                                    theme="snow"
                                    value={formData.description}
                                    onChange={(value) => setFormData({ ...formData, description: value })}
                                    modules={modules}
                                    formats={formats}
                                    className="bg-white"
                                    style={{ height: '300px', marginBottom: '50px' }}
                                />
                            </div>

                            {/* Blog Image */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Blog Image
                                </label>
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 overflow-hidden flex-shrink-0">
                                        {(imagePreviews.Image || existingImages.Image) ? (
                                            <img
                                                src={imagePreviews.Image || existingImages.Image}
                                                alt="Preview"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-xs text-gray-500">No Image</span>
                                        )}
                                    </div>
                                    <label className="flex-1 cursor-pointer">
                                        <div className="w-12 h-12 rounded-lg border-2 border-gray-300 flex items-center justify-center bg-white hover:bg-gray-50 transition">
                                            <Plus className="w-6 h-6 text-gray-600" />
                                        </div>
                                        <input
                                            type="file"
                                            name="Image"
                                            onChange={handleFileChange}
                                            accept="image/*"
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>

                            {/* Author Name Input */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Author Name</label>
                                <input
                                    type="text"
                                    name="authorName"
                                    value={formData.authorName}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                />
                            </div>

                            {/* Author Position Input */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Author Position</label>
                                <input
                                    type="text"
                                    name="authorPosition"
                                    value={formData.authorPosition}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                />
                            </div>

                            {/* Author Image */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Author Image
                                </label>
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 overflow-hidden flex-shrink-0">
                                        {(imagePreviews.authorImage || existingImages.authorImage) ? (
                                            <img
                                                src={imagePreviews.authorImage || existingImages.authorImage}
                                                alt="Preview"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-xs text-gray-500">No Image</span>
                                        )}
                                    </div>
                                    <label className="flex-1 cursor-pointer">
                                        <div className="w-12 h-12 rounded-lg border-2 border-gray-300 flex items-center justify-center bg-white hover:bg-gray-50 transition">
                                            <Plus className="w-6 h-6 text-gray-600" />
                                        </div>
                                        <input
                                            type="file"
                                            name="authorImage"
                                            onChange={handleFileChange}
                                            accept="image/*"
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-[#1D1EE3] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#1618C0] transition duration-300">
                                Update Blog Post
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditBlog;
