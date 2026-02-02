import { useEffect, useMemo, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { deleteData, getdata, postForm, putForm } from '../../api/req';
import EditorToolbar, { formats } from "../../Components/Admin/EditorToolbar";
import Sidebar from '../../Components/Admin/Sidebar';

const ServiceManagement = () => {
    const [activeLevel, setActiveLevel] = useState(1);
    const [services, setServices] = useState([]);
    const [parentOptions, setParentOptions] = useState({
        serviceOnes: [],
        serviceTwos: [],
        serviceThrees: [],
        serviceFours: []
    });
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);

    const quillRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        shortDescription: '',
        pageContent: '',
        hasOwnPage: false,
        order: 0,
        isActive: true,
        serviceOne: '',
        serviceTwo: '',
        serviceThree: '',
        serviceFour: ''
    });

    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [existingImage, setExistingImage] = useState('');

    const levelConfig = {
        1: { name: 'Level 1 (Categories)', endpoint: 'service-one', hasImage: false, parents: [] },
        2: { name: 'Level 2 (Sub-categories)', endpoint: 'service-two', hasImage: false, parents: ['serviceOne'] },
        3: { name: 'Level 3', endpoint: 'service-three', hasImage: true, parents: ['serviceOne', 'serviceTwo'] },
        4: { name: 'Level 4', endpoint: 'service-four', hasImage: true, parents: ['serviceOne', 'serviceTwo', 'serviceThree'] },
        5: { name: 'Level 5 (Main Services)', endpoint: 'service-five', hasImage: true, parents: ['serviceOne', 'serviceTwo', 'serviceThree', 'serviceFour'] }
    };

    const createSlug = (text) => {
        return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };

    // Fetch services for current level
    const fetchServices = async () => {
        try {
            setLoading(true);
            const response = await getdata(`/${levelConfig[activeLevel].endpoint}`);
            if (response.data.success) {
                setServices(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching services:', error);
            toast.error('Failed to fetch services.');
        } finally {
            setLoading(false);
        }
    };

    // Fetch parent options
    const fetchParentOptions = async () => {
        try {
            const [ones, twos, threes, fours] = await Promise.all([
                getdata('/service-one'),
                getdata('/service-two'),
                getdata('/service-three'),
                getdata('/service-four')
            ]);
            setParentOptions({
                serviceOnes: ones.data.data || [],
                serviceTwos: twos.data.data || [],
                serviceThrees: threes.data.data || [],
                serviceFours: fours.data.data || []
            });
        } catch (error) {
            console.error('Error fetching parent options:', error);
        }
    };

    useEffect(() => {
        fetchServices();
        fetchParentOptions();
    }, [activeLevel]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newFormData = { ...formData, [name]: type === 'checkbox' ? checked : value };
        if (name === 'name') {
            newFormData.slug = createSlug(value);
        }
        setFormData(newFormData);
    };

    const handleQuillChange = (value) => {
        setFormData({ ...formData, pageContent: value });
    };

    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            if (input.files) {
                const file = input.files[0];
                const fd = new FormData();
                fd.append('image', file);

                try {
                    const res = await postForm('/upload-editor-image', fd);
                    if (res.data.success) {
                        const editor = quillRef.current?.getEditor();
                        const range = editor?.getSelection();
                        if (editor && range) {
                            editor.insertEmbed(range.index, 'image', res.data.url);
                        }
                    }
                } catch (error) {
                    toast.error('Image upload failed.');
                }
            }
        };
    };

    const modules = useMemo(() => ({
        toolbar: {
            container: "#service-toolbar",
            handlers: { image: imageHandler },
        },
    }), []);

    const handleFileChange = (e) => {
        const { files } = e.target;
        if (files && files[0]) {
            setImage(files[0]);
            const reader = new FileReader();
            reader.onload = () => setImagePreview(reader.result);
            reader.readAsDataURL(files[0]);
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            slug: '',
            shortDescription: '',
            pageContent: '',
            hasOwnPage: activeLevel >= 3,
            order: 0,
            isActive: true,
            serviceOne: '',
            serviceTwo: '',
            serviceThree: '',
            serviceFour: ''
        });
        setImage(null);
        setImagePreview(null);
        setExistingImage('');
        setEditingId(null);
        setIsFormOpen(false);
    };

    const handleEdit = async (id) => {
        try {
            const response = await getdata(`/${levelConfig[activeLevel].endpoint}/${id}`);
            if (response.data.success) {
                const service = response.data.data;
                setFormData({
                    name: service.name || '',
                    slug: service.slug || '',
                    shortDescription: service.shortDescription || '',
                    pageContent: service.pageContent || '',
                    hasOwnPage: service.hasOwnPage || false,
                    order: service.order || 0,
                    isActive: service.isActive !== false,
                    serviceOne: service.serviceOne?._id || service.serviceOne || '',
                    serviceTwo: service.serviceTwo?._id || service.serviceTwo || '',
                    serviceThree: service.serviceThree?._id || service.serviceThree || '',
                    serviceFour: service.serviceFour?._id || service.serviceFour || ''
                });
                setExistingImage(service.featuredImage || '');
                setEditingId(id);
                setIsFormOpen(true);
            }
        } catch (error) {
            toast.error('Failed to load service for editing.');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            try {
                const response = await deleteData(`/${levelConfig[activeLevel].endpoint}/${id}`);
                if (response.data.success) {
                    toast.success(response.data.message);
                    fetchServices();
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                toast.error(error.response?.data?.message || 'Failed to delete service.');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.slug) {
            toast.error('Name and slug are required.');
            return;
        }

        // Validate required parents
        const config = levelConfig[activeLevel];
        for (const parent of config.parents) {
            if (!formData[parent]) {
                toast.error(`Please select a parent ${parent.replace('service', 'Level ')}.`);
                return;
            }
        }

        const data = new FormData();
        Object.keys(formData).forEach(key => {
            if (formData[key] !== '' && formData[key] !== null) {
                data.append(key, formData[key]);
            }
        });

        if (image) {
            data.append('featuredImage', image);
        }

        try {
            let response;
            if (editingId) {
                response = await putForm(`/${config.endpoint}/${editingId}`, data);
            } else {
                response = await postForm(`/${config.endpoint}`, data);
            }

            if (response.data.success) {
                toast.success(response.data.message);
                resetForm();
                fetchServices();
                fetchParentOptions();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to save service.');
        }
    };

    const getFilteredParentOptions = (parentType) => {
        switch (parentType) {
            case 'serviceOne':
                return parentOptions.serviceOnes;
            case 'serviceTwo':
                return parentOptions.serviceTwos.filter(s =>
                    !formData.serviceOne || s.serviceOne?._id === formData.serviceOne || s.serviceOne === formData.serviceOne
                );
            case 'serviceThree':
                return parentOptions.serviceThrees.filter(s =>
                    (!formData.serviceOne || s.serviceOne?._id === formData.serviceOne || s.serviceOne === formData.serviceOne) &&
                    (!formData.serviceTwo || s.serviceTwo?._id === formData.serviceTwo || s.serviceTwo === formData.serviceTwo)
                );
            case 'serviceFour':
                return parentOptions.serviceFours.filter(s =>
                    (!formData.serviceOne || s.serviceOne?._id === formData.serviceOne || s.serviceOne === formData.serviceOne) &&
                    (!formData.serviceTwo || s.serviceTwo?._id === formData.serviceTwo || s.serviceTwo === formData.serviceTwo) &&
                    (!formData.serviceThree || s.serviceThree?._id === formData.serviceThree || s.serviceThree === formData.serviceThree)
                );
            default:
                return [];
        }
    };

    const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D1EE3]";

    return (
        <div className='min-h-screen bg-white dark:bg-gray-900'>
            <Sidebar />
            <div className='px-8 pt-8 sm:ml-64'>
                <div className="h-full">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h1 className='text-center uppercase font-bold text-2xl mb-6'>Service Management</h1>

                        {/* Level Tabs */}
                        <div className="flex flex-wrap gap-2 mb-6 border-b pb-4">
                            {[1, 2, 3, 4, 5].map(level => (
                                <button
                                    key={level}
                                    onClick={() => { setActiveLevel(level); resetForm(); }}
                                    className={`px-4 py-2 rounded-lg font-medium transition ${activeLevel === level
                                            ? 'bg-[#1D1EE3] text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {levelConfig[level].name}
                                </button>
                            ))}
                        </div>

                        {/* Add Button */}
                        <button
                            onClick={() => { resetForm(); setIsFormOpen(true); }}
                            className="mb-4 flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                        >
                            <FaPlus /> Add {levelConfig[activeLevel].name}
                        </button>

                        {/* Form Modal */}
                        {isFormOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                                <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
                                    <h2 className="text-xl font-bold mb-4">
                                        {editingId ? 'Edit' : 'Add'} {levelConfig[activeLevel].name}
                                    </h2>

                                    <form onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Name */}
                                            <div>
                                                <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className={inputClass}
                                                />
                                            </div>

                                            {/* Slug */}
                                            <div>
                                                <label className="block text-gray-700 font-semibold mb-2">Slug</label>
                                                <input
                                                    type="text"
                                                    name="slug"
                                                    value={formData.slug}
                                                    readOnly
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                                                />
                                            </div>

                                            {/* Parent Selects */}
                                            {levelConfig[activeLevel].parents.map(parentType => (
                                                <div key={parentType}>
                                                    <label className="block text-gray-700 font-semibold mb-2">
                                                        {parentType.replace('service', 'Level ')} *
                                                    </label>
                                                    <select
                                                        name={parentType}
                                                        value={formData[parentType]}
                                                        onChange={handleChange}
                                                        required
                                                        className={inputClass}
                                                    >
                                                        <option value="">Select...</option>
                                                        {getFilteredParentOptions(parentType).map(opt => (
                                                            <option key={opt._id} value={opt._id}>{opt.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            ))}

                                            {/* Order */}
                                            <div>
                                                <label className="block text-gray-700 font-semibold mb-2">Order</label>
                                                <input
                                                    type="number"
                                                    name="order"
                                                    value={formData.order}
                                                    onChange={handleChange}
                                                    className={inputClass}
                                                />
                                            </div>
                                        </div>

                                        {/* Short Description */}
                                        <div className="mt-4">
                                            <label className="block text-gray-700 font-semibold mb-2">Short Description</label>
                                            <textarea
                                                name="shortDescription"
                                                value={formData.shortDescription}
                                                onChange={handleChange}
                                                rows="2"
                                                className={inputClass}
                                            />
                                        </div>

                                        {/* Image (for levels 3-5) */}
                                        {levelConfig[activeLevel].hasImage && (
                                            <div className="mt-4">
                                                <label className="block text-gray-700 font-semibold mb-2">Featured Image</label>
                                                <div className="flex items-center gap-4">
                                                    {(imagePreview || existingImage) && (
                                                        <img
                                                            src={imagePreview || existingImage}
                                                            alt="Preview"
                                                            className="w-20 h-20 object-cover rounded-lg border"
                                                        />
                                                    )}
                                                    <input
                                                        type="file"
                                                        onChange={handleFileChange}
                                                        accept="image/*"
                                                        className="flex-1"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* Page Content */}
                                        <div className="mt-4">
                                            <label className="block text-gray-700 font-semibold mb-2">Page Content</label>
                                            <EditorToolbar toolbarId="service-toolbar" />
                                            <ReactQuill
                                                ref={quillRef}
                                                theme="snow"
                                                value={formData.pageContent}
                                                onChange={handleQuillChange}
                                                modules={modules}
                                                formats={formats}
                                                className="bg-white"
                                                style={{ height: '200px', marginBottom: '50px' }}
                                            />
                                        </div>

                                        {/* Checkboxes */}
                                        <div className="mt-4 flex gap-6">
                                            <label className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    name="hasOwnPage"
                                                    checked={formData.hasOwnPage}
                                                    onChange={handleChange}
                                                    className="w-4 h-4"
                                                />
                                                <span>Has Own Page</span>
                                            </label>
                                            <label className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    name="isActive"
                                                    checked={formData.isActive}
                                                    onChange={handleChange}
                                                    className="w-4 h-4"
                                                />
                                                <span>Active</span>
                                            </label>
                                        </div>

                                        {/* Buttons */}
                                        <div className="mt-6 flex gap-4">
                                            <button
                                                type="submit"
                                                className="px-6 py-2 bg-[#1D1EE3] text-white rounded-lg hover:bg-[#1618C0] transition"
                                            >
                                                {editingId ? 'Update' : 'Create'} Service
                                            </button>
                                            <button
                                                type="button"
                                                onClick={resetForm}
                                                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* Services Table */}
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full bg-white border border-gray-200 text-center rounded-lg">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-3">#</th>
                                        {levelConfig[activeLevel].hasImage && <th className="px-4 py-3">Image</th>}
                                        <th className="px-4 py-3">Name</th>
                                        <th className="px-4 py-3">Slug</th>
                                        {activeLevel > 1 && <th className="px-4 py-3">Parent</th>}
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {loading ? (
                                        <tr><td colSpan="7" className="py-4">Loading...</td></tr>
                                    ) : services.length > 0 ? services.map((item, i) => (
                                        <tr key={item._id} className="hover:bg-gray-50">
                                            <td className="px-4 py-3">{i + 1}</td>
                                            {levelConfig[activeLevel].hasImage && (
                                                <td className="px-4 py-3">
                                                    {item.featuredImage && (
                                                        <img src={item.featuredImage} alt="" className="h-12 w-12 object-cover rounded mx-auto" />
                                                    )}
                                                </td>
                                            )}
                                            <td className="px-4 py-3 font-medium">{item.name}</td>
                                            <td className="px-4 py-3 text-sm text-gray-500">{item.slug}</td>
                                            {activeLevel > 1 && (
                                                <td className="px-4 py-3 text-sm">{item.serviceOne?.name || '-'}</td>
                                            )}
                                            <td className="px-4 py-3">
                                                <span className={`px-2 py-1 text-xs rounded-full ${item.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                    }`}>
                                                    {item.isActive ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex justify-center gap-3">
                                                    <button onClick={() => handleEdit(item._id)} className="text-blue-500 hover:text-blue-700">
                                                        <RiEdit2Fill size={20} />
                                                    </button>
                                                    <button onClick={() => handleDelete(item._id)} className="text-red-500 hover:text-red-700">
                                                        <RiDeleteBin5Fill size={20} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr><td colSpan="7" className="py-4">No services found.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceManagement;
