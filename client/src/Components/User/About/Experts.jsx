import { useEffect, useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaLinkedin } from "react-icons/fa6"
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AxiosAdmin } from '../../../api/url'

function Experts() {
    const swiperRef = useRef(null)
    const [teams, setTeams] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await AxiosAdmin.get('/teams')
                if (response.data.success) {
                    setTeams(response.data.data)
                }
            } catch (error) {
                console.error('Error fetching teams:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchTeams()
    }, [])

    if (loading) {
        return (
            <div className="w-full bg-white py-16 sm:py-20 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blablue"></div>
            </div>
        )
    }

    if (teams.length === 0) {
        return null
    }

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
                        modules={[Navigation, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1.25}
                        loop={teams.length > 4}
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
                        {teams.map((expert) => (
                            <SwiperSlide key={expert._id}>
                                <div className="relative rounded-xl overflow-hidden bg-gray-300 group cursor-pointer">
                                    {/* Expert Image */}
                                    <div className="h-[400px] overflow-hidden">
                                        <img
                                            src={expert.Image}
                                            alt={expert.name}
                                            className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Name and Position Overlay */}
                                    <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-white group-hover:bg-[#1D1EE3] text-black group-hover:text-white px-5 py-4 flex items-center justify-between transition-all duration-300">
                                        <div>
                                            <h3 className="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]">
                                                {expert.name}
                                            </h3>
                                            <p className="text-[10px] group-hover:text-blue-100 uppercase">
                                                {expert.position}
                                            </p>
                                        </div>
                                        {expert.linkedinlink && (
                                            <a
                                                href={expert.linkedinlink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FaLinkedin className="text-black group-hover:text-white text-lg w-5 h-5 transition-colors duration-300" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Mobile Navigation Buttons */}
                <div className="flex md:hidden justify-center gap-3 mt-8">
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
    )
}

export default Experts
