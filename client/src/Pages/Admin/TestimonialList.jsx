import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Admin/Sidebar';
import { deleteData, getdata } from '../../api/req';

const TestimonialList = () => {
    const [testimonials, setTestimonials] = useState([]);
    const navigate = useNavigate();

    const fetchTestimonials = async () => {
        try {
            const response = await getdata('/testimonials'); // Assuming API endpoint
            if (response.data.success) {
                setTestimonials(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching testimonials:', error);
            toast.error('Failed to fetch testimonials.');
        }
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this testimonial?')) {
            try {
                const response = await deleteData(`/testimonials/${id}`);
                if (response.data.success) {
                    toast.success(response.data.message);
                    setTestimonials(testimonials.filter((t) => t._id !== id));
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.error('Error deleting testimonial:', error);
                toast.error('An error occurred while deleting the testimonial.');
            }
        }
    };

    const handleEdit = (id) => {
        navigate(`/admin/testimonial/edit/${id}`);
    };

    return (
        <div className='min-h-screen bg-white dark:bg-gray-900'>
            <Sidebar />
            <div className='px-8 pt-8 sm:ml-64'>
                <div className="min-w-[60%] h-full">
                    <div className="overflow-x-auto overflow-y-auto h-[97vh] bg-slate-100 p-4 rounded-xl shadow-lg">
                        <table className="table-auto w-full bg-white border border-gray-200 text-center rounded-lg">
                            <caption className="text-center text-3xl font-bold py-4 text-gray-700">Testimonial List</caption>
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">#</th>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">Image</th>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">Position</th>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">Message</th>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {testimonials.length > 0 ? testimonials.map((item, i) => (
                                    <tr key={item._id} className="hover:bg-gray-50">
                                        <td className="border-t px-4 py-3">{i + 1}</td>
                                        <td className="border-t px-4 py-3">
                                            <img src={item?.Image} alt={item?.name} className="h-12 w-12 object-cover rounded-full mx-auto" />
                                        </td>
                                        <td className="border-t px-4 py-3">{item?.name}</td>
                                        <td className="border-t px-4 py-3">{item?.position}</td>
                                        <td className="border-t px-4 py-3 text-left max-w-sm truncate ">{item?.message}</td>
                                        <td className="border-t px-4 py-3">
                                            <div className="flex justify-center items-center gap-4">
                                                <button onClick={() => handleEdit(item._id)} className="text-blue-500 hover:text-blue-700 transition-colors">
                                                    <RiEdit2Fill size={22} />
                                                </button>
                                                <button onClick={() => handleDelete(item._id)} className="text-red-500 hover:text-red-700 transition-colors">
                                                    <RiDeleteBin5Fill size={22} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-4">No testimonials found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialList;