import banner from '../../../assets/images/about/banner.svg'

function Banner() {
    return (
        <>
        <div className="w-full bg-white overflow-visible">
            {/* Hero Section with Background */}
            <div className="relative w-full h-[110vh] flex flex-col">
                {/* Building background image - Full width */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img
                        src={banner}
                        alt="Building background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
                    {/* About Us Label */}
                    <div className="mb-4">
                        <span className="text-sm font-medium text-gray-700 bg-white bg-opacity-80 px-4 py-1 rounded-full">
                            [About Us]
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black text-center leading-tight">
                        Your Business Setup
                        <br />
                        Partner in the UAE
                    </h1>
                </div>

                {/* Stats Section - Positioned at bottom */}
                <div className="relative -bottom-45 z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8  ">
                    <div className="bg-black rounded-3xl p-6 md:p-8">
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Primary Stat Card */}
                            <div className="bg-blablue rounded-2xl p-6 text-white flex-1">
                                <p className="text-3xl sm:text-5xl font-semibold mb-2">500+</p>
                                <p className="font-semibold mb-2 text-sm">Business Licenses Processed</p>
                                <p className="text-xs text-blue-100">
                                    Setup quickly with expert guidance and seamless documentation support.
                                </p>
                            </div>

                            {/* Secondary Stat Cards */}
                            <div className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center flex-1">
                                <p className="text-3xl sm:text-5xl lg:text-6xl font-semibold mb-1">98%</p>
                                <p className="text-black text-sm text-center">Approval Success Rate</p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center flex-1">
                                <p className="text-3xl sm:text-5xl lg:text-6xl font-semibold mb-1">10+</p>
                                <p className="text-black text-sm text-center">years of pro services expertise</p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center flex-1">
                                <p className="text-3xl sm:text-5xl lg:text-6xl font-semibold mb-1">300+</p>
                                <p className="text-black text-sm text-center">Companies Supported Across UAE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-44 bg-white '>

        </div>

        </>
    )
}

export default Banner

