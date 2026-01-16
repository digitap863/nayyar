import { FaArrowRight } from "react-icons/fa6"

import blog1 from '../../../assets/images/home/blog1.png'
import blog2 from '../../../assets/images/home/blog2.png'
import blog3 from '../../../assets/images/home/blog3.png'
import blog4 from '../../../assets/images/home/blog4.png'

function Insight() {
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

    return (
        <div className="w-full bg-white py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-tight">
                        Strategic Insights That
                        <br />
                        Drive <span className="text-blablue">Business Success</span>
                    </h2>

                    {/* View More Blogs Button */}
                    <button className="bg-blablue hover:bg-blue-700 text-white font-medium py-3 pl-8 pr-16 rounded-full transition-all flex items-center gap-3 group relative">
                        <span>View More Blogs</span>
                        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform absolute right-1">
                            <FaArrowRight className="text-blablue w-4 h-4 -rotate-45" />
                        </div>
                    </button>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white  overflow-hidden  cursor-pointer group pb-2"
                        >
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
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Insight
