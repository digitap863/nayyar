import { useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaFileAlt, FaGlobe, FaShieldAlt } from "react-icons/fa"
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

function Servicetwo() {
 const [expandedLocations, setExpandedLocations] = useState({})
    const businessSwiperRef = useRef(null)
    const visaSwiperRef = useRef(null)

    const toggleLocation = (serviceId, locationIndex) => {
        const key = `${serviceId}-${locationIndex}`
        setExpandedLocations(prev => ({
            ...prev,
            [key]: !prev[key]
        }))
    }
    const businessSetupServices = [
        {
            id: 1,
            icon: <FaFileAlt className="text-blablue text-3xl" />,
            title: 'Mainland Business Setup',
            description: 'Our Strategy Consulting service empowers businesses to define a clear path forward, refine their focus.',
            locations: [
                { name: 'Dubai', services: ['LLC Company Formation', 'Civil Company Formation', 'Sole Proprietorship', 'E-Trader License'] },
                { name: 'Sharjah', services: [] },
                { name: 'Abu Dhabi', services: [] }
            ]
        },
        {
            id: 2,
            icon: <FaShieldAlt className="text-blablue text-3xl" />,
            title: 'Freezone Business Setup',
            description: 'Our Risk Assessment service empowers organizations to uncover hidden risks, and strengthen resilience.',
            locations: [
                { name: 'Dubai', services: ['LLC Company Formation', 'Civil Company Formation', 'Sole Proprietorship', 'E-Trader License'] },
                { name: 'Sharjah', services: [] },
                { name: 'Abu Dhabi', services: [] }
            ]
        },
        {
            id: 3,
            icon: <FaGlobe className="text-blablue text-3xl" />,
            title: 'Offshore',
            description: 'Our Talent Strategy service empowers organizations to optimize their people, and foster engagement.',
            locations: []
        }
    ]

    const visaServices = [
        {
            id: 1,
            icon: <FaFileAlt className="text-blablue text-3xl" />,
            title: 'Mainland Business Setup',
            description: 'Our Strategy Consulting service empowers businesses to define a clear path forward, refine their focus.'
        },
        {
            id: 2,
            icon: <FaShieldAlt className="text-blablue text-3xl" />,
            title: 'Freezone Business Setup',
            description: 'Our Risk Assessment service empowers organizations to uncover hidden risks, and strengthen resilience.'
        },
        {
            id: 3,
            icon: <FaGlobe className="text-blablue text-3xl" />,
            title: 'Offshore',
            description: 'Our Talent Strategy service empowers organizations to optimize their people, and foster engagement.'
        }
    ]

    // Reusable Service Card Component for Business Setup
    const BusinessServiceCard = ({ service }) => (
        <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow h-full">
            {/* Icon */}
            <div className="mb-4">
                {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-black mb-3">
                {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6">
                {service.description}
            </p>

            {/* Locations */}
            {service.locations && service.locations.length > 0 && (
                <div className="space-y-3 mb-6">
                    {service.locations.map((location, index) => {
                        const key = `${service.id}-${index}`
                        const isExpanded = expandedLocations[key]

                        return (
                            <div key={index}>
                                <button
                                    onClick={() => toggleLocation(service.id, index)}
                                    className="flex items-center gap-2 text-black font-medium text-sm hover:text-blablue transition-colors"
                                >
                                    <span>{location.name}</span>
                                    <FaArrowRight
                                        className={`text-xs transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''
                                            }`}
                                    />
                                </button>
                                {location.services && location.services.length > 0 && (
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <ul className="ml-4 mt-2 space-y-1">
                                            {location.services.map((item, idx) => (
                                                <li key={idx} className="text-gray-600 text-xs">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            )}

            {/* Read More Button */}
            <div className="flex items-center gap-2">
                <span className="text-black text-sm font-medium">Read More</span>
                <button className="bg-blablue hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all hover:scale-105">
                    <FaArrowRight className="text-sm" />
                </button>
            </div>
        </div>
    )

    return (
        <div className="w-full bg-[#EFEFEF] py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    {/* Desktop Grid - Hidden on mobile */}
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
                        {businessSetupServices.map((service) => (
                            <BusinessServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    {/* Mobile Swiper - Hidden on desktop */}
                    <div className="md:hidden" data-aos="fade-up" data-aos-delay="100">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={16}
                            slidesPerView={1.15}
                            onSwiper={(swiper) => {
                                businessSwiperRef.current = swiper
                            }}
                            className="services-swiper"
                        >
                            {businessSetupServices.map((service) => (
                                <SwiperSlide key={service.id}>
                                    <BusinessServiceCard service={service} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons - Mobile */}
                        <div className="flex justify-end items-center gap-3 mt-6">
                            <button
                                onClick={() => businessSwiperRef.current?.slidePrev()}
                                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blablue hover:text-white transition-all duration-300 text-blablue border border-gray-200"
                            >
                                <FaArrowLeft className="text-base" />
                            </button>
                            <button
                                onClick={() => businessSwiperRef.current?.slideNext()}
                                className="w-10 h-10 rounded-full bg-blablue shadow-md flex items-center justify-center hover:bg-blue-700 transition-all duration-300 text-white"
                            >
                                <FaArrowRight className="text-base" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicetwo