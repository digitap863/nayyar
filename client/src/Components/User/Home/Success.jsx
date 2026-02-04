import { FaArrowDown } from "react-icons/fa6"
import si1 from "../../../assets/images/home/si1.svg"
import si2 from "../../../assets/images/home/si2.svg"
import si3 from "../../../assets/images/home/si3.svg"


function Success() {
    const processes = [
        {
            id: 1,
            icon: si1,
            title: 'Fast Government Processing',
            description: 'Uncover challenges, opportunities, and root causes with clarity.',
            isActive: false
        },
        {
            id: 2,
            icon: si2,
            title: 'End-to-End Business Setup',
            description: 'Build actionable roadmaps aligned with your business goals.',
            isActive: true
        },
        {
            id: 3,
            icon: si3,
            title: 'Expert Compliance & Documentation',
            description: 'Build actionable roadmaps aligned with your business goals.',
            isActive: false
        }
    ]

    return (
        <div className="w-full bg-[#EFEFEF] py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-12">
                    <h2 className="text-3xl sm:text-4xl  font-semibold text-black leading-tight">
                        Our Proven Process to
                        <br />
                        Drive Your <span className="text-blablue">Success</span>
                    </h2>

                    {/* Arrow Button */}
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                        <FaArrowDown className='-rotate-120 text-blablue text-xl' />
                    </div>
                </div>

                {/* Process Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {processes.map((process) => (
                        <div
                            key={process.id}
                            className={`bg-white hover:bg-[#1D1EE3] rounded-3xl p-8 cursor-pointer transition-all duration-300 group`}
                        >
                            {/* Icon */}
                            <div className="mb-6 w-14 h-14 flex items-center justify-center">
                                <img src={process.icon} alt="" className="w-full h-full   transition-all duration-300" />
                            </div>

                            {/* Title */}
                            <h3 className={`text-xl font-semibold mb-3 text-black group-hover:text-white transition-colors duration-300`}>
                                {process.title}
                            </h3>

                            {/* Description */}
                            <p className={`text-sm text-gray-600 group-hover:text-white transition-colors duration-300`}>
                                {process.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Success
