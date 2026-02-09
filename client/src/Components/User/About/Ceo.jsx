import { FaArrowDown } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import ceoProfile from '../../../assets/images/about/ceoi.png'
import ceoImage from '../../../assets/images/about/ceoo.png'
import doubleq from '../../../assets/images/home/doubleq.png'


function Ceo() {
    return (
        <div className="w-full bg-[#EFEFEF] py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-black">
                        Words from our <span className="text-blablue">CEO</span>
                    </h2>

                    {/* View All Services Button */}
                    <div className="md:block hidden">
                        <Link to="/services" className="bg-blablue hover:bg-blue-700 text-white font-base py-3 pl-8 pr-16 rounded-full transition-all flex items-center gap-3 group relative">
                            <span>View All Services</span>
                            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform absolute right-1">
                                <FaArrowDown className="text-blablue rotate-240 font-light w-3 h-3" />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Quote */}
                    <div className="space-y-6 order-2 lg:order-1" data-aos="fade-up" data-aos-delay="100">
                        {/* Opening Quote Icon */}
                        <div className="mb-6">
                            <img src={doubleq} alt="" className="w-auto h-auto" />
                        </div>

                        {/* Quote Text */}
                        <div className="space-y-4">
                            <p className="text-gray-700 text-base leading-relaxed">
                                NAYYAR for Documents Clearing is a trusted Dubai-based government and legal documentation service provider, established in 2018. Located in Al Muteena, Dubai, we specialize in delivering fast, reliable, and transparent document clearing and PRO solutions for individuals and businesses across the UAE.
                            </p>

                            <p className="text-gray-700 text-base leading-relaxed">
                                With years of hands-on experience and a deep understanding of UAE government regulations, we simplify complex procedures and ensure every process is handled with accuracy, professionalism, and complete confidentiality.
                            </p>
                        </div>

                        {/* Closing Quote Icon */}
                        <div className="flex justify-end mb-6">
                            <img src={doubleq} alt="" className="w-auto h-auto rotate-180" />
                        </div>

                        {/* CEO Info */}
                        <div className="flex items-center gap-4 mt-6">
                            <img
                                src={ceoProfile}
                                alt="Jane Cooper"
                                className="w-14 h-14 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="font-semibold text-black text-base">
                                    Jane Cooper
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    CEO
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - CEO Image */}
                    <div className="relative order-1 lg:order-2" data-aos="fade-up" data-aos-delay="150">
                        <div className="relative rounded-3xl overflow-hidden bg-gray-200">
                            <img
                                src={ceoImage}
                                alt="CEO at desk"
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

export default Ceo
