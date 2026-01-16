import { useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import client1 from '../../../assets/images/home/client1.png'
import client2 from '../../../assets/images/home/client2.png'
import client3 from '../../../assets/images/home/client3.png'
import doubleq from '../../../assets/images/home/doubleq.png'

function Testimonials() {
    const swiperRef = useRef(null)

    const testimonials = [
        {
            id: 1,
            quote: "Nayyar's service exceeded expectations. Their team was proactive, resolved issues quickly, and guided me through the entire licensing journey.",
            name: "Jane Cooper",
            role: "Mechanic",
            image: client1
        },
        {
            id: 2,
            quote: "Nayyar made my business setup incredibly smooth. Their team handled every document and approval with precision. I saved so much time and avoided stress, making the entire process efficient and hassle-free.",
            name: "Arlene McCoy",
            role: "Entrepreneur",
            image: client2
        },
        {
            id: 3,
            quote: "I was amazed by their professionalism and speed. Nayyar managed all government procedures perfectly, allowing me to focus on my operations. Their guidance made every step clear, and extremely convenient.",
            name: "Cameron Williamson",
            role: "Entrepreneur",
            image: client3
        },
        {
            id: 4,
            quote: "Nayyar's service exceeded expectations. Their team was proactive, resolved issues quickly, and guided me through the entire licensing journey.",
            name: "Jane Cooper",
            role: "Mechanic",
            image: client1
        },
        {
            id: 5,
            quote: "Nayyar made my business setup incredibly smooth. Their team handled every document and approval with precision. I saved so much time and avoided stress, making the entire process efficient and hassle-free.",
            name: "Arlene McCoy",
            role: "Entrepreneur",
            image: client2
        },
        {
            id: 6,
            quote: "I was amazed by their professionalism and speed. Nayyar managed all government procedures perfectly, allowing me to focus on my operations. Their guidance made every step clear, and extremely convenient.",
            name: "Cameron Williamson",
            role: "Entrepreneur",
            image: client3
        },
    ]

    return (
        <div className="w-full bg-[#EFEFEF] py-16 sm:py-20 relative ">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute top-16 left-0 w-20 h-full bg-[#EFEFEF] blur-lg z-10 "></div>
                <div className="absolute top-16 -right-10 w-28 h-full bg-[#EFEFEF] blur-lg z-10 "></div>


                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-black">
                        Proven What Our <span className="text-blablue">Client Say</span>
                    </h2>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="bg-blablue hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all"
                        >
                            <FaArrowLeft className="text-lg" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="bg-blablue hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all"
                        >
                            <FaArrowRight className="text-lg" />
                        </button>
                    </div>
                </div>

                {/* Testimonials Carousel */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3.5,
                            spaceBetween: 24,
                        },
                    }}
                    className="testimonials-swiper"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-white rounded-2xl p-8 h-full flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-6">
                                    <img src={doubleq} alt="" className="w-auto h-auto" />
                                </div>

                                {/* Quote Text */}
                                <p className="text-gray-700 text-sm leading-relaxed mb-8 flex-grow">
                                    {testimonial.quote}
                                </p>

                                {/* Client Info */}

                            </div>
                            <div className="flex flex-col gap-3 pt-5">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover border border-gray-700"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-black text-sm">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-gray-500 text-xs">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials
