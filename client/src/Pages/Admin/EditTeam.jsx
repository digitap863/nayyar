import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../Components/Admin/Sidebar';
import { getdata, putForm } from '../../api/req';

const EditTeam = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        position: '',
        linkedinlink: '',
    });

    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [existingImage, setExistingImage] = useState('');

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await getdata(`/teams/${id}`);
                if (response.data.success) {
                    const { name, position, linkedinlink, Image } = response.data.data;
                    setFormData({ name, position, linkedinlink });
                    setExistingImage(Image);
                } else {
                    toast.error('Failed to fetch team member data.');
                }
            } catch (error) {
                console.error('Error fetching team member:', error);
                toast.error('An error occurred while fetching the team member.');
                navigate('/admin/teamlist');
            }
        };

        fetchTeam();
    }, [id, navigate]);

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

        const data = new FormData();
        data.append('name', formData.name);
        data.append('position', formData.position);
        data.append('linkedinlink', formData.linkedinlink);

        if (image) {
            data.append('Image', image);
        }

        try {
            const response = await putForm(`/teams/${id}`, data);
            if (response.data.success) {
                toast.success(response.data.message);
                navigate('/admin/teamlist');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('An error occurred while updating the team member.');
            console.error('Error updating team member:', error);
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
                            <h1 className='text-center uppercase font-bold text-2xl mb-6'>Edit Team Member</h1>

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
                                        {(imagePreview || existingImage) ? (
                                            <img
                                                src={imagePreview || existingImage}
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

                            <button type="submit" className="w-full bg-[#1D1EE3] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#1618C0] transition duration-300">
                                Update Team Member
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTeam;
