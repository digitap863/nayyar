import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaLinkedin } from "react-icons/fa";
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Admin/Sidebar';
import { deleteData, getdata } from '../../api/req';

const TeamList = () => {
    const [teams, setTeams] = useState([]);
    const navigate = useNavigate();

    const fetchTeams = async () => {
        try {
            const response = await getdata('/teams');
            if (response.data.success) {
                setTeams(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching team members:', error);
            toast.error('Failed to fetch team members.');
        }
    };

    useEffect(() => {
        fetchTeams();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this team member?')) {
            try {
                const response = await deleteData(`/teams/${id}`);
                if (response.data.success) {
                    toast.success(response.data.message);
                    setTeams(teams.filter((team) => team._id !== id));
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.error('Error deleting team member:', error);
                toast.error('An error occurred while deleting the team member.');
            }
        }
    };

    const handleEdit = (id) => {
        navigate(`/admin/team/edit/${id}`);
    };

    return (
        <div className='min-h-screen bg-white dark:bg-gray-900'>
            <Sidebar />
            <div className='px-8 pt-8 sm:ml-64'>
                <div className="min-w-[60%] h-full">
                    <div className="overflow-x-auto overflow-y-auto h-[97vh] bg-slate-100 p-4 rounded-xl shadow-lg">
                        <table className="table-auto w-full bg-white border border-gray-200 text-center rounded-lg">
                            <caption className="text-center text-3xl font-bold py-4 text-gray-700">Team Members</caption>
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">#</th>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">Photo</th>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">Position</th>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">LinkedIn</th>
                                    <th className="px-4 py-3 text-center font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {teams.length > 0 ? teams.map((item, i) => (
                                    <tr key={item._id} className="hover:bg-gray-50">
                                        <td className="border-t px-4 py-3">{i + 1}</td>
                                        <td className="border-t px-4 py-3">
                                            <img src={item?.Image} alt={item?.name} className="h-16 w-16 object-cover rounded-full mx-auto" />
                                        </td>
                                        <td className="border-t px-4 py-3 font-medium">{item?.name}</td>
                                        <td className="border-t px-4 py-3">{item?.position}</td>
                                        <td className="border-t px-4 py-3">
                                            <a
                                                href={item?.linkedinlink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors"
                                            >
                                                <FaLinkedin size={24} />
                                            </a>
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
                                        <td colSpan="6" className="text-center py-4">No team members found.</td>
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

export default TeamList;
