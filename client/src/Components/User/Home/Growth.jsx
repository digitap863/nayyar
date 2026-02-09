import { useState } from 'react'
import { FaArrowDown } from "react-icons/fa6"
import usd from '../../../assets/images/home/usd.png'


function Growth() {
    const [activeService, setActiveService] = useState(0)

    const services = [
        {
            id: 1,
            number: '[01]',
            title: 'Business setup in mainland',
            description: 'Business setup in mainland/free zone companies employment visa process',
            image: usd
        },
        {
            id: 2,
            number: '[02]',
            title: 'Golden Visa (New & Renewal)',
            description: 'Business setup in mainland/free zone companies employment visa process',
            image: usd
        },
        {
            id: 3,
            number: '[03]',
            title: 'Bank Account Opening',
            description: 'Business setup in mainland/free zone companies employment visa process',
            image: usd
        },
        {
            id: 4,
            number: '[04]',
            title: 'Company PRO Services',
            description: 'Business setup in mainland/free zone companies employment visa process',
            image: usd
        }
    ]

    return (
        <div className="w-full bg-white py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-12" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-tight">
                        Driving Growth Through
                        <br />
                        Strategic <span className="text-blablue">Excellence</span>
                    </h2>

                    {/* View All Services Button */}
                    <div className="md:relative absolute top-0 right-0 md:block hidden">
                        <button className="bg-blablue hover:bg-blue-700 text-white font-base py-3 pl-8 pr-16 rounded-full transition-all flex items-center gap-3 group relative">
                            <span>View All Services</span>
                            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform absolute right-1">
                                <FaArrowDown className="text-blablue rotate-240 font-light w-4 h-4" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Services List */}
                    <div className="space-y-5 border-t border-t-gray-200 pt-4" data-aos="fade-up" data-aos-delay="100">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className="cursor-pointer border-b border-b-gray-200 pb-3"
                                onMouseEnter={() => setActiveService(index)}
                            >
                                {/* Service Number and Title */}
                                <div className="mb-2">
                                    <h3 className="text-xl font-semibold text-black">
                                        <span className="mr-3">{service.number}</span>
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description - Only show for active service */}
                                {activeService === index && (
                                    <p className="text-gray-600 text-sm ml-14 mb-20">
                                        {service.description}
                                    </p>
                                )}

                                {/* Explore Service Button - Only show for active service */}
                                {activeService === index && (
                                    <div className="ml-14 pb-2">
                                        <button className="bg-blablue hover:bg-blue-700 text-white font-medium py-3 pl-8 pr-16 rounded-full transition-all flex items-center gap-3 group relative">
                                            <span>Explore Service</span>
                                            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform absolute right-1">
                                                <FaArrowDown className="text-blablue rotate-240 font-light w-4 h-4" />
                                            </div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Service Image */}
                    <div className="relative" data-aos="fade-up" data-aos-delay="150">
                        <div className="relative rounded-3xl overflow-hidden bg-gray-200 h-[450px]">
                            <img
                                src={services[activeService].image}
                                alt={services[activeService].title}
                                className="w-full h-full object-cover"
                            />

                            {/* Arrow Icon Button */}
                            <div className="absolute top-6 right-6 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                <FaArrowDown className='-rotate-120 text-blablue' />
                            </div>
                        </div>


                        <div className=" pt-10 block md:hidden">
                            <button className="bg-blablue hover:bg-blue-700 text-white font-base py-3 pl-8 pr-16 rounded-full transition-all flex items-center gap-3 group relative">
                                <span>View All Services</span>
                                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform absolute right-1">
                                    <FaArrowDown className="text-blablue rotate-240 font-light w-4 h-4" />
                                </div>
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Growth
