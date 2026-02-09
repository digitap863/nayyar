import { useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import logo1 from '../../../assets/images/home/logo1.svg'
import logo2 from '../../../assets/images/home/logo2.svg'


function Assosiatesection() {
    const swiperRef = useRef(null)

    const logos = [
        { id: 1, src: logo1, alt: 'Headspace' },
        { id: 2, src: logo2, alt: 'Shopify' },
        { id: 3, src: logo1, alt: 'Volvo' },
        { id: 4, src: logo2, alt: 'Mobbin' },
        { id: 5, src: logo1, alt: 'Pinterest' },
        { id: 6, src: logo2, alt: 'Duolingo' },
        { id: 7, src: logo1, alt: 'Headspace' },
        { id: 8, src: logo2, alt: 'Shopify' },
        { id: 9, src: logo1, alt: 'Volvo' },
        { id: 10, src: logo2, alt: 'Mobbin' },
        { id: 11, src: logo1, alt: 'Pinterest' },
        { id: 12, src: logo2, alt: 'Duolingo' },
    ]

    return (
        <div className="w-full bg-white py-12 sm:py-16 relative ">
            {/* gradient in left  */}
            <div className="absolute bottom-0 -left-25 w-1/4 h-1/2 bg-gradient-to-r from-white to-white z-10 blur-3xl  rounded-full"></div>
            <div className="absolute bottom-0 -right-25 w-1/4 h-1/2 bg-gradient-to-r from-white to-white z-10 blur-3xl  rounded-full"></div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="flex justify-between items-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-black">
                        Our Partners <br /> & <span className="text-blablue">  Associates In Uae </span>
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

                {/* Logo Swiper */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={40}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 60,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 60,
                        },
                    }}
                    className="logo-swiper"
                >
                    {logos.map((logo) => (
                        <SwiperSlide key={logo.id}>
                            <div className="flex items-center justify-center h-20 sm:h-24">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Assosiatesection