import { useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import blog1 from '../../../assets/images/home/blog1.png'
import blog2 from '../../../assets/images/home/blog2.png'
import blog3 from '../../../assets/images/home/blog3.png'
import blog4 from '../../../assets/images/home/blog4.png'

function Insight() {
    const swiperRef = useRef(null)

    const blogs = [
        {
            id: 1,
            image: blog1,
            title: 'Why PRO Services Are Essential for Smooth Business Setup in Dubai',
            description: 'A quick guide explaining how PRO services save time, reduce stress'
        },
        {
            id: 2,
            image: blog2,
            title: 'Top Licensing Mistakes Entrepreneurs Make — And How to Avoid Them',
            description: 'Highlights common errors during business setup and offers'
        },
        {
            id: 3,
            image: blog3,
            title: 'Your Hub for Forward-Thinking Strategies',
            description: 'A guide to navigating disruption and sparking creativity, offering leaders evidence'
        },
        {
            id: 4,
            image: blog4,
            title: 'How PRO Services Help You Focus on What Truly Matters: Growth',
            description: 'A resource for executives and decision-makers, highlighting leadership principles'
        }
    ]

    // Blog Card Component for reuse
    const BlogCard = ({ blog }) => (
        <div className="bg-white overflow-hidden cursor-pointer group pb-2">
            {/* Blog Image */}
            <div className="relative overflow-hidden rounded-xl">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"
                />
            </div>

            {/* Blog Content */}
            <div className="pt-4">
                {/* Title */}
                <h3 className="text-base font-medium text-black mb-3 leading-tight line-clamp-3">
                    {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {blog.description}
                </p>

                {/* Read More Button */}
                <button className="flex items-center gap-2 text-blablue font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Read More</span>
                    <div className="bg-blablue text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FaArrowRight className="text-xs" />
                    </div>
                </button>
            </div>
        </div>
    )

    return (
        <div className="w-full bg-white py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 lg:mb-12" data-aos="fade-up">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black leading-tight">
                        Strategic Insights That
                        <br />
                        Drive <span className="text-blablue">Business Success</span>
                    </h2>

                    {/* View More Blogs Button */}
                    <Link to="/blogs" className="bg-blablue hover:bg-blue-700 text-white font-medium py-3 pl-6 sm:pl-8 pr-14 sm:pr-16 rounded-full transition-all flex items-center gap-3 group relative text-sm sm:text-base">
                        <span>View More Blogs</span>
                        <div className="bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-105 transition-transform absolute right-1">
                            <FaArrowRight className="text-blablue w-3 h-3 sm:w-4 sm:h-4 -rotate-45" />
                        </div>
                    </Link>
                </div>

                {/* Desktop Blog Grid - Hidden on mobile */}
                <div className="hidden lg:grid grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="100">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

                {/* Mobile/Tablet Swiper - Hidden on desktop */}
                <div className="lg:hidden">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1.15}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper
                        }}
                        breakpoints={{
                            480: {
                                slidesPerView: 1.5,
                                spaceBetween: 16,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2.5,
                                spaceBetween: 24,
                            },
                        }}
                        className="insight-swiper"
                    >
                        {blogs.map((blog) => (
                            <SwiperSlide key={blog.id}>
                                <BlogCard blog={blog} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons - Mobile Only (Bottom Right) */}
                    <div className="flex justify-end items-center gap-3 mt-6">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blablue hover:text-white transition-all duration-300 text-blablue border border-gray-200"
                        >
                            <FaArrowLeft className="text-base sm:text-lg" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blablue shadow-md flex items-center justify-center hover:bg-blue-700 transition-all duration-300 text-white"
                        >
                            <FaArrowRight className="text-base sm:text-lg" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insight
