import { Plus } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Admin/Sidebar';
import { postForm } from '../../api/req';

const AddTeam = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        position: '',
        linkedinlink: '',
    });

    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { files } = e.target;
        if (files && files[0]) {
            const file = files[0];

            setImage(file);

            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.position || !formData.linkedinlink) {
            toast.error('Please fill out all fields.');
            return;
        }

        if (!image) {
            toast.error('Please upload team member image.');
            return;
        }

        const data = new FormData();
        data.append('name', formData.name);
        data.append('position', formData.position);
        data.append('linkedinlink', formData.linkedinlink);
        data.append('Image', image);

        try {
            const response = await postForm('/teams', data);
            if (response.data.success) {
                toast.success(response.data.message);
                navigate('/admin/teamlist');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('An error occurred while adding the team member.');
            console.error('Error adding team member:', error);
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
                            <h1 className='text-center uppercase font-bold text-2xl mb-6'>Add Team Member</h1>

                            {/* Name Input */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                />
                            </div>

                            {/* LinkedIn Link Input */}
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2">LinkedIn Profile Link</label>
                                <input
                                    type="url"
                                    name="linkedinlink"
                                    value={formData.linkedinlink}
                                    onChange={handleChange}
                                    required
                                    placeholder="https://linkedin.com/in/username"
                                    className={inputClass}
                                />
                            </div>

                            {/* Team Member Image */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Team Member Photo
                                </label>
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 overflow-hidden flex-shrink-0">
                                        {imagePreview && (
                                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
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
                                            required
                                            accept="image/*"
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-[#1D1EE3] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#1618C0] transition duration-300">
                                Add Team Member
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTeam;
