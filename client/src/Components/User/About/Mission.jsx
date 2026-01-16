import React from 'react'
import { FaArrowDown } from "react-icons/fa6"
import missionImage from '../../../assets/images/about/mission.svg'
import visionImage from '../../../assets/images/about/vission.svg'

function Mission() {
    return (
        <div className="w-full bg-white py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-4">
                        Mission & <span className="text-blablue">Vision</span>
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed max-w-4xl lg:pr-5">
                        We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development
                    </p>
                </div>

                {/* Mission and Vision Cards */}
                <div className="space-y-12 mt-12">
                    {/* Mission Card */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Mission Image */}
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden bg-gray-200">
                                <img
                                    src={missionImage}
                                    alt="Mission - Plant growing on coins"
                                    className="w-full h-auto object-cover"
                                />
                                
                                {/* Arrow Icon Button */}
                                <div className="absolute top-6 right-6 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                    <FaArrowDown className='-rotate-120 text-blablue' />
                                </div>
                            </div>
                        </div>

                        {/* Mission Text */}
                        <div className="border-l-2 border-[#CAFF33] pl-10">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
                                Miss<span className="text-blablue">ion</span>
                            </h3>
                            <p className="text-gray-700 text-base leading-relaxed">
                                At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.
                            </p>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Vision Text */}
                        <div className="lg:order-1 order-2">
                            <div className="border-l-2 border-[#CAFF33] pl-10">
                                <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
                                    <span className="text-blablue">Vis</span>ion
                                </h3>
                                <p className="text-gray-700 text-base leading-relaxed">
                                    At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.
                                </p>
                            </div>
                        </div>

                        {/* Vision Image */}
                        <div className="relative lg:order-2 order-1">
                            <div className="relative rounded-3xl overflow-hidden bg-gray-200">
                                <img
                                    src={visionImage}
                                    alt="Vision - Digital eye technology"
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
        </div>
    )
}

export default Mission
