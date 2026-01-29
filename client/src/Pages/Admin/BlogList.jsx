import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Admin/Sidebar';
import { deleteData, getdata } from '../../api/req';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    const fetchBlogs = async () => {
        try {
            const response = await getdata('/blogs');
            if (response.data.success) {
                setBlogs(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
            toast.error('Failed to fetch blogs.');
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            try {
                const response = await deleteData(`/blogs/${id}`);
                if (response.data.success) {
                    toast.success(response.data.message);
                    setBlogs(blogs.filter((blog) => blog._id !== id));
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.error('Error deleting blog:', error);
                toast.error('An error occurred while deleting the blog.');
            }
        }
    };

    const handleEdit = (id) => {
        navigate(`/admin/blog/edit/${id}`);
    };

    return (
        <div className='min-h-screen bg-white dark:bg-gray-900'>
            <Sidebar />
            <div className='px-8 pt-8 sm:ml-64'>
                <div className="min-w-[60%] h-full">
                    <div className="overflow-x-auto overflow-y-auto h-[97vh] bg-slate-100 p-4 rounded-xl shadow-lg">
                        <table className="table-auto w-full bg-white border border-gray-200 text-center rounded-lg">
                            <caption className="text-center text-3xl font-bold py-4 text-gray-700">Blog List</caption>
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">#</th>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">Blog Image</th>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">Heading</th>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">Sub Heading</th>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">Author</th>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {blogs.length > 0 ? blogs.map((item, i) => (
                                    <tr key={item._id} className="hover:bg-gray-50">
                                        <td className="border-t px-4 py-3">{i + 1}</td>
                                        <td className="border-t px-4 py-3">
                                            <img src={item?.Image} alt={item?.heading} className="h-16 w-16 object-cover rounded mx-auto" />
                                        </td>
                                        <td className="border-t px-4 py-3 max-w-xs truncate">{item?.heading}</td>
                                        <td className="border-t px-4 py-3 max-w-xs truncate">{item?.subHeading}</td>
                                        <td className="border-t px-4 py-3">
                                            <div className="flex items-center justify-center gap-2">
                                                <img src={item?.authorImage} alt={item?.authorName} className="h-8 w-8 rounded-full object-cover" />
                                                <span>{item?.authorName}</span>
                                            </div>
                                        </td>
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
                                        <td colSpan="6" className="text-center py-4">No blogs found.</td>
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

export default BlogList;
