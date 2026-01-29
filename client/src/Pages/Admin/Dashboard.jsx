import Sidebar from '../../Components/Admin/Sidebar.jsx';

const Dashboard = () => {
  return (
    <div className=' min-h-screen bg-white dark:bg-gray-900'>
      <Sidebar />
      {/* Main Content Area */}
      <div className="flex-1 p-6 sm:ml-64  ">
        <div className="border-2 border-dashed border-[#1D1EE3] rounded-lg p-6 bg-white">
          {/* Welcome Heading */}

          <h1 className="text-5xl 2xl:text-4xl font-medium text-[#1D1EE3] leading-tight font-urban">
            <div
              className="flex items-center space-x-3 pb-10">

              <div className="text-2xl font-bold text-[#1D1EE3]">
                NAYYAR PRO
              </div>

            </div>
            Welcome back, Admin!<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🕊️☮️
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
