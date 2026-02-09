import { useRef } from 'react'
import { FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import si1 from "../../../assets/images/home/si1.svg"
import si2 from "../../../assets/images/home/si2.svg"
import si3 from "../../../assets/images/home/si3.svg"


function Success() {
    const swiperRef1 = useRef(null)
    const swiperRef2 = useRef(null)

    const processes = [
        {
            id: 1,
            icon: si1,
            title: 'Strategic Planning',
            description: 'Uncover challenges, opportunities, and root causes with clarity.',
            isActive: false
        },
        {
            id: 2,
            icon: si2,
            title: 'Market Research',
            description: 'Build actionable roadmaps aligned with your business goals.',
            isActive: true
        },
        {
            id: 3,
            icon: si3,
            title: 'Business Consultation',
            description: 'Build actionable roadmaps aligned with your business goals.',
            isActive: false
        },
        {
            id: 4,
            icon: si1,
            title: 'Financial Analysis',
            description: 'Uncover challenges, opportunities, and root causes with clarity.',
            isActive: false
        },
        {
            id: 5,
            icon: si2,
            title: 'Operational Efficiency',
            description: 'Build actionable roadmaps aligned with your business goals.',
            isActive: true
        },
        {
            id: 6,
            icon: si3,
            title: 'Risk Management',
            description: 'Build actionable roadmaps aligned with your business goals.',
            isActive: false
        }
    ]

    const processes1 = [
        {
            id: 1,
            icon: si1,
            title: 'Strategic Planning',
            description: 'Uncover challenges, opportunities, and root causes with clarity.',
            isActive: false
        },
        {
            id: 2,
            icon: si2,
            title: 'Market Research',
            description: 'Build actionable roadmaps aligned with your business goals.',
            isActive: true
        },
        {
            id: 3,
            icon: si3,
            title: 'Business Consultation',
            description: 'Build actionable roadmaps aligned with your business goals.',
            isActive: false
        }
    ]

    const processes2 = [
        {
            id: 1,
            icon: si1,
            title: 'Financial Analysis',
            description: 'Uncover challenges, opportunities, and root causes with clarity.',
            isActive: false
        },
        {
            id: 2,
            icon: si2,
            title: 'Operational Efficiency',
            description: 'Build actionable roadmaps aligned with your business goals.',
            isActive: true
        },
        {
            id: 3,
            icon: si3,
            title: 'Risk Management',
            description: 'Build actionable roadmaps aligned with your business goals.',
            isActive: false
        }
    ]

    // Process Card Component for reuse
    const ProcessCard = ({ process }) => (
        <div
            className="bg-white hover:bg-[#1D1EE3] rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-300 group h-full"
        >
            {/* Icon */}
            <div className="mb-4 md:mb-6 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                <img src={process.icon} alt="" className="w-full h-full transition-all duration-300" />
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-black group-hover:text-white transition-colors duration-300">
                {process.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
                {process.description}
            </p>
        </div>
    )

    return (
        <div className="w-full bg-[#EFEFEF] py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-8 md:mb-12" data-aos="fade-up">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black leading-tight">
                        Why Should you <span className="text-blablue">Choose Us</span>?
                    </h2>

                    {/* Arrow Button - Desktop Only */}
                    <div className="hidden md:flex bg-white rounded-full w-14 h-14 lg:w-16 lg:h-16 items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                        <FaArrowDown className='-rotate-120 text-blablue text-lg lg:text-xl' />
                    </div>
                </div>

                {/* Desktop Process Cards Grid - Hidden on mobile */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
                    {processes.map((process) => (
                        <ProcessCard key={process.id} process={process} />
                    ))}
                </div>

                {/* Mobile Swiper - Hidden on desktop */}
                <div className="md:hidden">
                    <div className="pb-10">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={16}
                            slidesPerView={1}
                            loop={true}
                            // autoplay={{
                            //     delay: 3000,
                            //     disableOnInteraction: false,
                            // }}
                            onSwiper={(swiper) => {
                                swiperRef1.current = swiper
                            }}
                            className="chooseus-swiper "
                        >
                            {processes1.map((process) => (
                                <SwiperSlide key={process.id}>
                                    <ProcessCard process={process} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        loop={true}
                        // autoplay={{
                        //     delay: 3000,
                        //     disableOnInteraction: false,
                        // }}
                        onSwiper={(swiper) => {
                            swiperRef2.current = swiper
                        }}
                        className="chooseus-swiper"
                    >
                        {processes2.map((process) => (
                            <SwiperSlide key={process.id}>
                                <ProcessCard process={process} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons - Mobile Only (Bottom Right) */}
                    <div className="flex justify-end items-center gap-3 mt-6">
                        <button
                            onClick={() => {
                                swiperRef1.current?.slidePrev()
                                swiperRef2.current?.slidePrev()
                            }}
                            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blablue hover:text-white transition-all duration-300 text-blablue border border-gray-200"
                        >
                            <FaArrowLeft className="text-base" />
                        </button>
                        <button
                            onClick={() => {
                                swiperRef1.current?.slideNext()
                                swiperRef2.current?.slideNext()
                            }}
                            className="w-10 h-10 rounded-full bg-blablue shadow-md flex items-center justify-center hover:bg-blue-700 transition-all duration-300 text-white"
                        >
                            <FaArrowRight className="text-base" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success
