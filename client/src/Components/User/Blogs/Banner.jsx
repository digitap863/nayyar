import { FaArrowRight } from "react-icons/fa6"
import authorProfile from '../../../assets/images/blogs/author.png'
import blogHero from '../../../assets/images/blogs/blogbann.svg'

function Banner() {
    return (
        <div className="w-full bg-white py-10 pt-24 md:pt-32 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
                    <div className="mb-3 md:mb-4">
                        <span className="text-xs sm:text-sm font-medium text-blablue">
                            [Blog]
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-black leading-tight">
                        Expert Insights for
                        <br />
                        UAE Entrepreneurs
                    </h1>
                </div>

                {/* Featured Blog Card */}
                <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    <div className="rounded-xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Left Side - Image */}
                            <div className="relative h-48 sm:h-64 md:h-auto">
                                <img
                                    src={blogHero}
                                    alt="Business professionals"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>

                            {/* Right Side - Content */}
                            <div className="bg-white p-5 sm:p-8 md:p-10 flex flex-col justify-between">
                                {/* Blog Content */}
                                <div className="mb-4 sm:mb-6">
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                        At our core, we believe business success begins with clarity and trust. Our goal is to simplify every step of your UAE journey through expert guidance, transparent processes, and reliable support. We are committed to building long-term partnerships and helping our clients grow with confidence and peace of mind.
                                    </p>
                                </div>

                                {/* Author and Read More */}
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    {/* Author Info */}
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <img
                                            src={authorProfile}
                                            alt="Max Henderson"
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-semibold text-black text-xs sm:text-sm">
                                                Max Henderson
                                            </h4>
                                            <p className="text-gray-600 text-[10px] sm:text-xs">
                                                CEO & founder
                                            </p>
                                        </div>
                                    </div>

                                    {/* Read More Button */}
                                    <div className='flex items-center gap-2'>
                                        <p className='text-black text-xs sm:text-sm'>Read more</p>
                                        <button className="bg-blablue hover:bg-blue-700 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all hover:scale-105">
                                            <FaArrowRight className="text-xs sm:text-sm -rotate-45" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
