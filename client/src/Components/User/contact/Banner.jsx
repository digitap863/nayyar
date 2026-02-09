import { FaMapLocationDot } from "react-icons/fa6";
import dubaiOffice from '../../../assets/images/service/dub.svg';
import abuDhabiOffice from '../../../assets/images/service/dub2.svg';
import sharjahOffice from '../../../assets/images/service/dub3.svg';

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
        <div className="w-full bg-white py-10 pt-24 md:pt-40 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}


                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-28 gap-10">
                    {/* Left Side - Location Cards */}

                    <div className="relative">

                        <div className="mb-8 md:mb-20" data-aos="fade-up">
                            <div className="mb-3 md:mb-5">
                                <span className="text-xs sm:text-sm font-medium text-blablue">
                                    [Visit Us]
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-black mb-4 md:mb-6">
                                Office Location
                            </h1>
                            <p className="text-gray-700 text-sm sm:text-base max-w-2xl">
                                Our office is conveniently located in the heart of these cities,<br className="hidden md:block" /> providing easy access for clients and partners.
                            </p>
                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-10 lg:absolute lg:bottom-0 lg:left-0" data-aos="fade-up" data-aos-delay="100">
                            {locations.map((location) => (
                                <div
                                    key={location.id}
                                    className="bg-[#EFEFEF] rounded-2xl p-4 hover:shadow-lg transition-shadow"
                                >
                                    {/* Icon */}
                                    <div className="mb-3 md:mb-4">
                                        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                                            <FaMapLocationDot className="text-blablue text-lg md:text-xl" />
                                        </div>
                                    </div>

                                    {/* Location Info */}
                                    <h3 className="text-lg md:text-xl font-medium text-black mb-1 md:mb-2">
                                        {location.name}
                                    </h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">
                                        {location.address}
                                    </p>
                                </div>
                            ))}
                        </div>


                    </div>

                    {/* Right Side - Office Images Grid */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4" data-aos="fade-up" data-aos-delay="150">
                        {officeImages.map((office, index) => (
                            <div
                                key={office.id}
                                className={`relative rounded-xl md:rounded-2xl overflow-hidden group ${index === 2 ? 'col-span-2' : ''
                                    }`}
                            >
                                <img
                                    src={office.image}
                                    alt={`${office.city} office`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />

                                {/* City Label */}
                                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white bg-opacity-90 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                                    <span className="text-xs md:text-sm font-medium text-black">
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
