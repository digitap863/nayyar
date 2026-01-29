import { Plus } from 'lucide-react';
import { useState } from 'react'; // Removed useEffect, not needed for FileReader
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Admin/Sidebar';
import { postForm } from '../../api/req';

const AddTestimonial = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        position: '',
        message: '',
    });

    const [images, setImages] = useState({
        Image: null,
    });
    const [imagePreview, setImagePreview] = useState(null);




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
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.position || !formData.message) {
            toast.error('Please fill out all fields and upload an image.');
            return;
        }

        if (!images.Image) {
            toast.error('Please select an image.');
            return;
        }


        const data = new FormData();
        data.append('name', formData.name);
        data.append('position', formData.position);
        data.append('message', formData.message);
        data.append('Image', images.Image);

        try {
            const response = await postForm('/testimonials', data);
            if (response.data.success) {
                toast.success(response.data.message);
                navigate('/admin/testimoniallist');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('An error occurred while adding the testimonial.');
            console.error('Error adding testimonial:', error);
        }
    };

    const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D1EE3]";

    return (
        <div className='min-h-screen bg-white dark:bg-gray-900'>
            <Sidebar />
            <div className='px-8 pt-8 sm:ml-64'>
                <div className="min-w-[20%] h-full">
                    <div className="overflow-x-auto overflow-scroll h-[95vh] bg-white p-2 rounded-xl no-scrollbar">
                        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
                            <h1 className='text-center uppercase font-bold text-2xl mb-6'>Add Testimonial</h1>

                            {/* Name Input */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange} // Uses text handler
                                    required
                                    className={inputClass}
                                />
                            </div>

                            {/* Position Input */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Position</label>
                                <input
                                    type="text"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange} // Uses text handler
                                    required
                                    className={inputClass}
                                />
                            </div>

                            {/* Message Input */}
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange} // Uses text handler
                                    required
                                    rows="4"
                                    className={inputClass}
                                />
                            </div>


                            {/* Product Image */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Product Image
                                </label>
                                <div className="flex items-center gap-4">
                                    {/* Image Preview */}
                                    <div className="w-20 h-20 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 overflow-hidden flex-shrink-0">
                                        {imagePreview && (
                                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                        )}
                                    </div>

                                    {/* File Input Button */}
                                    <label className="flex-1 cursor-pointer">
                                        <div className="w-12 h-12 rounded-lg border-2 border-gray-300 flex items-center justify-center bg-white hover:bg-gray-50 transition">
                                            <Plus className="w-6 h-6 text-gray-600" />
                                        </div>
                                        <input
                                            type="file"
                                            name="Image"
                                            onChange={handleFileChange}
                                            required
                                            accept="image/*"
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-[#1D1EE3] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#1618C0] transition duration-300">
                                Add Testimonial
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTestimonial;