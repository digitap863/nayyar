import { useState } from 'react'
import { FaArrowRight, FaFileAlt, FaGlobe, FaShieldAlt } from "react-icons/fa"

function Servicesection() {
    const [expandedLocations, setExpandedLocations] = useState({})

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

    return (
        <div className="w-full bg-[#EFEFEF] py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Business Setup Services Section */}
                <div className="mb-20">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-12">
                        Business Setup Services
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {businessSetupServices.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
                            >
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
                        ))}
                    </div>
                </div>

                {/* Visa Services Section */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-12">
                        Visa Services
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visaServices.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
                            >
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

                                {/* Read More Button */}
                                <div className="flex items-center gap-2">
                                    <span className="text-black text-sm font-medium">Read More</span>
                                    <button className="bg-blablue hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all hover:scale-105">
                                        <FaArrowRight className="text-sm" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicesection
