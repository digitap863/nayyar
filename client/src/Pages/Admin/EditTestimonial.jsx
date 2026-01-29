import { Plus } from 'lucide-react'; // <-- ADDED
import { useEffect, useState } from 'react'; // <-- MODIFIED (added useState)
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../Components/Admin/Sidebar';
import { getdata, putForm } from '../../api/req';

const EditTestimonial = () => {
    const { id } = useParams();
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
    const [existingImageUrl, setExistingImageUrl] = useState('');

    useEffect(() => {
        const fetchTestimonial = async () => {
            try {
                const response = await getdata(`/testimonials/${id}`);
                if (response.data.success) {
                    const { name, position, message, Image } = response.data.data; // <-- MODIFIED (get Image)
                    setFormData({ name, position, message });
                    setExistingImageUrl(Image); // <-- ADDED (Store the existing image URL)
                } else {
                    toast.error('Failed to fetch testimonial data.');
                }
            } catch (error) {
                console.error('Error fetching testimonial:', error);
                toast.error('An error occurred while fetching the testimonial.');
                navigate('/admin/testimoniallist');
            }
        };

        fetchTestimonial();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // --- Function added from AddTestimonial ---
    const handleFileChange = (e) => { // <-- ADDED
        const { name, files } = e.target;
        if (files && files[0]) {
            const file = files[0];

            setImages({ ...images, [name]: file }); // Store the new file object

            // Create a preview for the *new* file
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    // ------------------------------------------

    const handleSubmit = async (e) => {
        e.preventDefault();

        // --- Logic modified to handle FormData ---
        const data = new FormData(); // <-- MODIFIED (Must use FormData for files)
        data.append('name', formData.name);
        data.append('position', formData.position);
        data.append('message', formData.message);

        // <-- MODIFIED
        // Only append the 'Image' field if a *new* image has been selected.
        // If no new image is selected, 'images.Image' will be null,
        // and the backend should keep the existing image.
        if (images.Image) {
            data.append('Image', images.Image);
        }
        // ------------------------------------------

        try {
            // <-- MODIFIED (Send 'data' (FormData) instead of 'formData' (JSON))
            const response = await putForm(`/testimonials/${id}`, data);
            if (response.data.success) {
                toast.success(response.data.message);
                navigate('/admin/testimoniallist');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('An error occurred while updating the testimonial.');
            console.error('Error updating testimonial:', error);
        }
    };

    const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D1EE3]"; // <-- ADDED

    return (
        <div className='min-h-screen bg-white dark:bg-gray-900'>
            <Sidebar />
            <div className='px-8 pt-8 sm:ml-64'>
                <div className="min-w-[20%] h-full">
                    <div className="overflow-x-auto overflow-scroll h-[95vh] bg-white p-2 rounded-xl no-scrollbar">
                        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
                            <h1 className='text-center uppercase font-bold text-2xl mb-6'>Edit Testimonial</h1>

                            {/* Name Input */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={inputClass} // <-- MODIFIED
                                />
                            </div>

                            {/* Position Input */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Position</label>
                                <input
                                    type="text"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    required
                                    className={inputClass} // <-- MODIFIED
                                />
                            </div>

                            {/* Message Input */}
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className={inputClass} // <-- MODIFIED
                                />
                            </div>

                            {/* --- JSX added from AddTestimonial --- */}
                            <div className="mb-6"> {/* <-- ADDED (margin bottom) */}
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Author Image
                                </label>
                                <div className="flex items-center gap-4">

                                    {/* Image Preview */}
                                    <div className="w-20 h-20 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 overflow-hidden flex-shrink-0">

                                        {/* <-- MODIFIED (Show new preview OR existing image) --> */}
                                        {(imagePreview || existingImageUrl) ? (
                                            <img
                                                src={imagePreview || existingImageUrl}
                                                alt="Preview"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-xs text-gray-500">No Image</span>
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
                                            // required // <-- MODIFIED (Not required on edit)
                                            accept="image/*"
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>
                            {/* ------------------------------------------ */}

                            <button type="submit" className="w-full bg-[#1D1EE3] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#1618C0] transition duration-300">
                                Update Testimonial
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTestimonial;