import { useRef } from 'react'
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaLinkedin } from "react-icons/fa6"
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { default as expert1, default as expert2, default as expert3, default as expert4 } from '../../../assets/images/about/team1.png'

function Experts() {
    const swiperRef = useRef(null)

    const experts = [
        {
            id: 1,
            image: expert1,
            name: 'Ann Maria',
            position: 'SENIOR MANAGER'
        },
        {
            id: 2,
            image: expert2,
            name: 'Ann Maria',
            position: 'SENIOR MANAGER'
        },
        {
            id: 3,
            image: expert3,
            name: 'Ann Maria',
            position: 'SENIOR MANAGER'
        },
        {
            id: 4,
            image: expert4,
            name: 'Ann Maria',
            position: 'SENIOR MANAGER'
        },
        {
            id: 5,
            image: expert1,
            name: 'Ann Maria',
            position: 'SENIOR MANAGER'
        },
        {
            id: 6,
            image: expert2,
            name: 'Ann Maria',
            position: 'SENIOR MANAGER'
        }
    ]

    return (
        <div className="w-full bg-white py-16 sm:py-20 overflow-hidden ">
            <div className="max-w-7xl mx-auto pl-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-black">
                        Meet our <span className="text-blablue">Experts</span>
                    </h2>

                    {/* Navigation Buttons */}
                    <div className="md:block hidden">
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
                </div>

                {/* Experts Carousel */}
                <div data-aos="fade-up" data-aos-delay="100">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={16}
                        slidesPerView={1.25}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                        }}
                        className="experts-swiper"
                    >
                        {experts.map((expert) => (
                            <SwiperSlide key={expert.id}>
                                <div className="relative rounded-xl overflow-hidden bg-gray-300 group cursor-pointer">
                                    {/* Expert Image */}
                                    <img
                                        src={expert.image}
                                        alt={expert.name}
                                        className="w-full h-auto object-cover grayscale"
                                    />

                                    {/* Arrow Icon Button - Hidden on hover */}
                                    <div className="absolute top-6 right-6 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all group-hover:opacity-0 group-hover:invisible">
                                        <FaArrowDown className='-rotate-120 text-blablue' />
                                    </div>

                                    {/* Name and Position Overlay */}
                                    <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-white group-hover:bg-[#1D1EE3] text-black group-hover:text-white px-5 py-4 flex items-center justify-between transition-all duration-300">
                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {expert.name}
                                            </h3>
                                            <p className="text-xs group-hover:text-blue-100">
                                                {expert.position}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <FaLinkedin className="text-black group-hover:text-white text-lg w-5 h-5 transition-colors duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Experts
