import { useRef } from 'react'
import { FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import step1 from '../../../assets/images/home/step1.png'
import step2 from '../../../assets/images/home/step2.png'
import step3 from '../../../assets/images/home/step3.png'
import step4 from '../../../assets/images/home/step4.png'

function Setting() {
    const swiperRef = useRef(null)

    const steps = [
        {
            id: 1,
            image: step1,
            title: 'Select Your Activities & Share Your Documents',
        },
        {
            id: 2,
            image: step2,
            title: 'Trade Name Registration & Initial Approval To Be Done',
        },
        {
            id: 3,
            image: step3,
            title: 'Signing Of MOA & Issuance Of Trade License',
        },
        {
            id: 4,
            image: step4,
            title: 'Apply For Establishment and Get Your Residency Visa',
        },
        {
            id: 5,
            image: step1,
            title: 'Select Your Activities & Share Your Documents',
        },
        {
            id: 6,
            image: step2,
            title: 'Trade Name Registration & Initial Approval To Be Done',
        },
        {
            id: 7,
            image: step3,
            title: 'Signing Of MOA & Issuance Of Trade License',
        },
        {
            id: 8,
            image: step4,
            title: 'Apply For Establishment and Get Your Residency Visa',
        }
    ]

    return (
        <div className="w-full bg-white py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-8 md:mb-12" data-aos="fade-up">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black leading-tight">
                        With Nayyar PRO, Setting Up Your
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                        Business Is <span className="text-blablue">Easy, Quick & Hassle Free</span>
                    </h2>

                    {/* Navigation Buttons - Desktop Only */}
                    <div className="hidden md:flex gap-3">
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

                {/* Steps Carousel */}
                <div data-aos="fade-up" data-aos-delay="100">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={16}
                        slidesPerView={1.15}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper
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
                        className="steps-swiper"
                    >
                        {steps.map((step) => (
                            <SwiperSlide key={step.id}>
                                <div className="relative rounded-xl overflow-hidden bg-white h-[360px]  md:h-[370px] group cursor-pointer">
                                    {/* Image */}
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Arrow Icon Button */}
                                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <FaArrowDown className='-rotate-120 text-blablue text-sm sm:text-base' />
                                    </div>

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-2 left-2 right-2 bg-white group-hover:bg-[#1D1EE3] group-hover:text-white text-black p-4 sm:p-6 rounded-lg transition-all duration-300">
                                        <h3 className="text-sm sm:text-base font-semibold leading-tight">
                                            {step.title}
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Navigation Buttons - Mobile Only (Bottom Right) */}
                <div className="flex md:hidden justify-end items-center gap-3 mt-6">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#1D1EE3] hover:text-white transition-all duration-300 text-[#1D1EE3] border border-gray-200"
                    >
                        <FaArrowLeft className="text-lg" />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="w-12 h-12 rounded-full bg-[#1D1EE3] shadow-md flex items-center justify-center hover:bg-[#1618C0] transition-all duration-300 text-white"
                    >
                        <FaArrowRight className="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Setting
