import { FaMapMarkerAlt } from "react-icons/fa"
import abuDhabiOffice from '../../../assets/images/service/dub2.svg'
import dubaiOffice from '../../../assets/images/service/dub.svg'
import sharjahOffice from '../../../assets/images/service/dub3.svg'
import { FaMapLocationDot } from "react-icons/fa6";

function Banner() {
    const locations = [
        {
            id: 1,
            city: 'Dubai',
            name: 'Dubai Headquater',
            address: 'The Exchange Building 5 North, Dubai International Financial Centre'
        },
        {
            id: 2,
            city: 'Abu Dhabi',
            name: 'Abu Dhabi Headquater',
            address: 'Vision Tower, Floor 50, Office No. 5001, Business Bay'
        }
    ]

    const officeImages = [
        {
            id: 1,
            city: 'Dubai',
            image: dubaiOffice
        },
        {
            id: 2,
            city: 'Abu Dhabi',
            image: abuDhabiOffice
        },
        {
            id: 3,
            city: 'Sharjah',
            image: sharjahOffice
        }
    ]

    return (
        <div className="w-full bg-white  py-16 md:pt-40 pb-10 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-28 gap-10">
                    {/* Left Side - Location Cards */}

                <div className="relative">

                <div className="mb-20">
                    <div className="mb-5">
                        <span className="text-sm font-medium text-blablue">
                            [Visit Us]
                        </span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-semibold text-black mb-6">
                        Office Location
                    </h1>
                    <p className="text-gray-700 text-base max-w-2xl">
                        Our office is conveniently located in the heart of these cities,<br/> providing easy access for clients and partners.
                    </p>
                </div>


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 absolute bottom-0 left-0 " >
                        {locations.map((location) => (
                            <div
                                key={location.id}
                                className="bg-[#EFEFEF] rounded-2xl p-4 hover:shadow-lg transition-shadow"
                            >
                                {/* Icon */}
                                <div className="mb-4">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <FaMapLocationDot className="text-blablue text-xl" />
                                    </div>
                                </div>

                                {/* Location Info */}
                                <h3 className="text-xl font-medium text-black mb-2">
                                    {location.name}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {location.address}
                                </p>
                            </div>
                        ))}
                    </div>


                </div>
                
                    {/* Right Side - Office Images Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {officeImages.map((office, index) => (
                            <div
                                key={office.id}
                                className={`relative rounded-2xl overflow-hidden ${index === 2 ? 'col-span-2' : ''
                                    }`}
                            >
                                <img
                                    src={office.image}
                                    alt={`${office.city} office`}
                                    className="w-full h-full object-cover"
                                />

                                {/* City Label */}
                                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-full">
                                    <span className="text-sm font-medium text-black">
                                        {office.city}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
