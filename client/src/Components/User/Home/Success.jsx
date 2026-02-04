import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import si1 from "../../../assets/images/home/si1.svg";
import si2 from "../../../assets/images/home/si2.svg";
import si3 from "../../../assets/images/home/si3.svg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Success() {
    const swiperRef = useRef(null);

    const processes = [
        {
            id: 1,
            icon: si1,
            title: 'Fast Government Processing',
            description: 'Uncover challenges, opportunities, and root causes with clarity.',
        },
        {
            id: 2,
            icon: si2,
            title: 'End-to-End Business Setup',
            description: 'Build actionable roadmaps aligned with your business goals.',
        },
        {
            id: 3,
            icon: si3,
            title: 'Expert Compliance & Documentation',
            description: 'Build actionable roadmaps aligned with your business goals.',
        }
    ];

    const ProcessCard = ({ process }) => (
        <div className="bg-white hover:bg-[#1D1EE3] rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 group md:h-full h-60">
            {/* Icon */}
            <div className="mb-4 sm:mb-6 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                <img src={process.icon} alt="" className="w-full h-full transition-all duration-300" />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-black group-hover:text-white transition-colors duration-300">
                {process.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
                {process.description}
            </p>
        </div>
    );

    return (
        <div className="w-full bg-[#EFEFEF] py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight">
                        Our Proven Process to
                        <br />
                        Drive Your <span className="text-blablue">Success</span>
                    </h2>

                    {/* Arrow Button - Hidden on mobile */}
                    <div className="hidden md:flex bg-white rounded-full w-14 h-14 lg:w-16 lg:h-16 items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                        <FaArrowDown className='-rotate-120 text-blablue text-lg lg:text-xl' />
                    </div>
                </div>

                {/* Desktop Grid - Hidden on mobile */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {processes.map((process) => (
                        <ProcessCard key={process.id} process={process} />
                    ))}
                </div>

                {/* Mobile Swiper - Visible only on mobile */}
                <div className="md:hidden">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation]}
                        spaceBetween={16}
                        slidesPerView={1.15}
                        centeredSlides={false}
                        className="!pb-4"
                    >
                        {processes.map((process) => (
                            <SwiperSlide key={process.id}>
                                <ProcessCard process={process} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons - Bottom Center */}
                    <div className="flex justify-end items-end gap-4 mt-1">
                        <button
                            onClick={() => swiperRef.current?.swiper?.slidePrev()}
                            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#1D1EE3] hover:text-white transition-all duration-300 text-[#1D1EE3]"
                        >
                            <FaArrowLeft className="text-lg" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.swiper?.slideNext()}
                            className="w-12 h-12 rounded-full bg-[#1D1EE3] shadow-md flex items-center justify-center hover:bg-[#1618C0] transition-all duration-300 text-white"
                        >
                            <FaArrowRight className="text-lg" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Success;
