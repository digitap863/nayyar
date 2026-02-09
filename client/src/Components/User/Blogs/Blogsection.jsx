import { FaArrowRight } from "react-icons/fa6"

import blog1 from '../../../assets/images/blogs/blog1.png'
import blog2 from '../../../assets/images/blogs/blog2.png'
import blog3 from '../../../assets/images/blogs/blog3.png'
import blog4 from '../../../assets/images/blogs/blog4.png'
import blog5 from '../../../assets/images/blogs/blog5.png'


function Blogsection() {
  const blogs = [
    {
      id: 1,
      image: blog1,
      title: 'Mainland vs Free Zone: Choosing the Right Setup',
      description: 'Understand key differences to select the best structure for your business.'
    },
    {
      id: 2,
      image: blog2,
      title: 'Step-by-Step Guide to Starting a Business in the UAE',
      description: 'A simple breakdown of company formation from idea to license.'
    },
    {
      id: 3,
      image: blog3,
      title: 'UAE Visa Types Explained for Business Owners',
      description: 'Know which visa suits investors, partners, employees, and dependents.'
    },
    {
      id: 4,
      image: blog4,
      title: 'Common Business Setup Mistakes to Avoid in the UAE',
      description: 'Avoid delays, penalties, and unnecessary costs with expert insights.'
    },
    {
      id: 5,
      image: blog5,
      title: 'UAE Visa Types Explained for Business Owners',
      description: 'Why outsourcing documentation improves efficiency and business focus.'
    }
  ]

  return (
    <div className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12" data-aos="fade-up">
          <div className="mb-4">
            <span className="text-sm font-medium text-blablue">
              [Blogs]
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-black">
            Popular Blogs
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
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
                <h3 className="text-lg font-medium text-black mb-3 leading-tight line-clamp-3 lg:pr-8">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {blog.description}
                </p>

                {/* Read More Button */}
                <button className="flex items-center gap-2 text-gray-700 font-medium text-sm group-hover:gap-3 transition-all font-medium ">
                  <span>Read More</span>
                  <div className="bg-blablue text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaArrowRight className="text-xs -rotate-45" />
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

export default Blogsection