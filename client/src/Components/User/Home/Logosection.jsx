import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import logo1 from '../../../assets/images/home/logo1.svg'
import logo2 from '../../../assets/images/home/logo2.svg'


function Logosection() {
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
        <div className="w-full relative -top-20 ">
        <div className="w-full bg-[#EFEFEF] py-12 md:pt-36 md:pb-0 ">
            {/* gradient in left  */}
            <div className="absolute top-24 -left-24 w-1/4 h-full bg-gradient-to-r from-[#EFEFEF] to-[#EFEFEF] z-10 blur-3xl  rounded-full"></div>
            <div className="absolute top-24 -right-24 w-1/4 h-full bg-gradient-to-r from-[#EFEFEF] to-[#EFEFEF] z-10 blur-3xl  rounded-full"></div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-base text-black mb-1">
                        Already Chosen By
                    </h2>
                    <p className="text-2xl sm:text-3xl font-semibold text-blablue">
                        The Leaders
                    </p>
                </div>

                {/* Logo Swiper */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={40}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
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
        </div>
    )
}

export default Logosection