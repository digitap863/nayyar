import { useState } from 'react'
import { FaArrowDown } from "react-icons/fa6"
import contactImage from '../../../assets/images/home/contact.png'
import pin2 from '../../../assets/images/home/pin2.png'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
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
        <div className="w-full bg-[#EFEFEF] py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-tight">
                        Request a
                        <br />
                        Free <span className="text-blablue">Consultation</span>
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Left Side - Image */}
                    <div className="relative rounded-3xl overflow-hidden bg-gray-200 h-full min-h-[400px]">
                        <img
                            src={contactImage}
                            alt="Team consultation"
                            className="w-full h-full object-cover"
                        />

                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-blablue rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
                        {/* Pin Icon */}
                        <div className="mb-8">
                            <div className=" flex items-center justify-start pl-10">
                                <img src={pin2} alt="Pin" />
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between">
                            <div className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b-2 border-white/50 border-opacity-30 text-white placeholder-white placeholder-opacity-70 py-3 focus:outline-none focus:border-opacity-100 transition-all"
                                        required
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b-2 border-white/50 border-opacity-30 text-white placeholder-white placeholder-opacity-70 py-3 focus:outline-none focus:border-opacity-100 transition-all"
                                        required
                                    />
                                </div>

                                {/* Contact Number Input */}
                                <div>
                                    <input
                                        type="tel"
                                        name="contactNumber"
                                        placeholder="Contact Number"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b-2 border-white/50 border-opacity-30 text-white placeholder-white placeholder-opacity-70 py-3 focus:outline-none focus:border-opacity-100 transition-all"
                                        required
                                    />
                                </div>

                                {/* Message Input */}
                                <div>
                                    <input
                                        type="text"
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b-2 border-white/50 border-opacity-30 text-white placeholder-white placeholder-opacity-70 py-3 focus:outline-none focus:border-opacity-100 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="bg-white hover:bg-gray-100 text-blablue font-medium py-3 pl-8 pr-16 rounded-full transition-all flex items-center gap-3 group relative"
                                >
                                    <span>Book a Consultation</span>
                                    <div className="bg-blablue rounded-full w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform absolute right-1">
                                        <FaArrowDown className="text-white rotate-240 font-light w-4 h-4" />
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
