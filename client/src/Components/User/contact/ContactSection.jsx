import { useState } from 'react'
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa"

function ContactSection() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log('Form submitted:', formData)
    }

    return (
        <div className="w-full bg-white py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side - Contact Info */}
                    <div>
                        {/* Header */}
                        <div className="mb-12">
                            <div className="mb-2">
                                <span className="text-sm font-medium text-blablue">
                                    [Contact]
                                </span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-4">
                                Drop Us a <span className="text-blablue">Message</span>
                            </h2>
                            <p className="text-gray-700 text-base">
                                We're always happy to hear from you and will get back to you as soon as possible.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="bg-[#EAEAFF] bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope className="text-blablue text-lg" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-600 ">
                                        Email
                                    </h3>
                                    <p className="text-lg font-semibold text-black">
                                        nayyarprouae@gmail.com
                                    </p>
                                </div>
                            </div>

                            {/* Call */}
                            <div className="flex items-start gap-4">
                                <div className="bg-[#EAEAFF] bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                                    <FaPhone className="text-blablue text-lg" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-600 ">
                                        Call
                                    </h3>
                                    <p className="text-lg font-semibold text-black">
                                        +99 1234 5478
                                    </p>
                                </div>
                            </div>

                            {/* Visit Us */}
                            <div className="flex items-start gap-4">
                                <div className="bg-[#EAEAFF] bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-blablue text-lg" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-600 ">
                                        Visit Us
                                    </h3>
                                    <p className="text-lg font-semibold text-black">
                                        See on Google Map
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-[#EFEFEF] rounded-3xl p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-black placeholder-gray-400 focus:outline-none focus:border-blablue transition-colors"
                                    required
                                />
                            </div>

                            {/* Email Address */}
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-black placeholder-gray-400 focus:outline-none focus:border-blablue transition-colors"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">
                                    Write Your Message
                                </label>
                                <textarea
                                    name="message"
                                    placeholder="I want to collaborate"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-black placeholder-gray-400 focus:outline-none focus:border-blablue transition-colors resize-none"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blablue hover:bg-blue-700 text-white font-medium py-3 pl-8 pr-16 rounded-full transition-all flex items-center justify-start font-light gap-3 group relative"
                            >
                                <span>Send Message</span>
                                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform absolute right-1">
                                    <FaArrowRight className="text-blablue w-4 h-4 -rotate-45 font-light text-light" />
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
