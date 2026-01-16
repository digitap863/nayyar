import { FaArrowDown } from "react-icons/fa6"
import experienceImage from '../../../assets/images/about/experience.svg'

function Experience() {
    return (
        <div className="w-full bg-[#EFEFEF] py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-12">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-tight">
                        Where Experience
                        <br />
                        Meets <span className="text-blablue">Excellence!</span>
                    </h2>

                    {/* View All Services Button */}
                    <button className="bg-blablue hover:bg-blue-700 text-white font-base py-3 pl-8 pr-16 rounded-full transition-all flex items-center gap-3 group relative">
                        <span>View All Services</span>
                        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform absolute right-1">
                            <FaArrowDown className="text-blablue rotate-240 font-light w-3 h-3" />
                        </div>
                    </button>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-10 items-center">
                    {/* Left Side - Text Content */}
                    <div className="space-y-6">
                        <p className="text-gray-700 text-base leading-relaxed">
                            NAYYAR for Documents Clearing is a trusted Dubai-based government and legal documentation service provider, established in 2018. Located in Al Muteena, Dubai, we specialize in delivering fast, reliable, and transparent document clearing and PRO solutions for individuals and businesses across the UAE.
                        </p>

                        <p className="text-gray-700 text-base leading-relaxed">
                            With years of hands-on experience and a deep understanding of UAE government regulations, we simplify complex procedures and ensure every process is handled with accuracy, professionalism, and complete confidentiality.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden bg-gray-200">
                            <img
                                src={experienceImage}
                                alt="Professional handshake"
                                className="w-full h-auto object-cover"
                            />

                            {/* Arrow Icon Button */}
                            <div className="absolute top-6 right-6 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                <FaArrowDown className='-rotate-120 text-blablue' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
