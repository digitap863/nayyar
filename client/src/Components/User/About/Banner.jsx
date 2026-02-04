import banner from '../../../assets/images/about/banner.svg'
import bannermob from '../../../assets/images/about/bannermob.png'

function Banner() {
    return (
        <>
        <div className="w-full bg-white overflow-visible">
            {/* Hero Section with Background */}
            <div className="relative w-full h-[110vh] flex flex-col px-2">
                {/* Building background image - Full width */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img
                        src={banner}
                        alt="Building background"
                        className="w-full h-full object-cover md:block hidden"
                    />
                    <img
                        src={bannermob}
                        alt="Building background"
                        className="w-full h-full object-cover md:hidden block"
                    />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex-1 flex flex-col md:justify-center items-center px-4 sm:px-6 lg:px-8 md:pt-0 pt-16">
                    {/* About Us Label */}
                    <div className="mb-4">
                        <span className="text-sm font-medium text-gray-700 bg-white bg-opacity-80 px-4 py-1 rounded-full">
                            [About Us]
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black text-center leading-tight">
                        Your Business<br className='md:hidden block ' />  Setup {" "}
                        <br className='md:block hidden' />
                        Partner in  <br className='md:hidden block ' /> the UAE
                    </h1>
                </div>

                {/* Stats Section - Positioned at bottom */}
                <div className="relative -bottom-45 z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 md:block hidden">
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

                <div className="bg-black rounded-3xl p-3 md:p-8 z-10 relative md:hidden block px-3  -bottom-30 ">
                    <div className="flex flex-col md:flex-row md:gap-6 gap-3">
                        <div className="flex flex-row gap-3">
                        {/* Primary Stat Card */}
                        <div className="bg-blablue rounded-2xl pl-3 py-3 text-white ">
                        <p className="text-3xl sm:text-5xl font-semibold mb-2">500+</p>
                        <p className="font-semibold mb-2 text-sm">Business Licenses Processed</p>
                        <p className="text-[0.7rem] text-blue-100">
                            Setup quickly with expert guidance and seamless documentation support.
                        </p>
                        </div>

                        {/* Secondary Stat Cards */}
                        <div className="bg-white rounded-2xl p-1 flex flex-col justify-center items-center w-55 ">
                        <p className="text-3xl sm:text-7xl font-semibold mb-1">98%</p>
                        <p className="text-black text-sm text-center ">Approval Success Rate</p>
                        </div>
                        </div>
                        <div className="flex flex-row gap-3">

                        <div className="bg-white rounded-2xl p-2 flex flex-col justify-center items-center w-68 ">
                        <p className="text-3xl sm:text-7xl font-semibold mb-1">10+</p>
                        <p className="text-black text-sm text-center ">years of pro services expertise</p>
                        </div>

                        <div className="bg-white rounded-2xl p-2 flex flex-col justify-center items-center w-68 ">
                        <p className="text-3xl sm:text-7xl font-semibold mb-1">300+</p>
                        <p className="text-black text-sm text-center ">Companies Supported Across UAE</p>
                        </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
        <div className='md:h-44 h-30 bg-white '>

        </div>

        </>
    )
}

export default Banner

