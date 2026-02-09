// import arrowIcon from '../../../assets/images/home/arrow.svg'
import businessImage from '../../../assets/images/home/business.png';
// import serviceIcon from '../../../assets/images/home/service.svg'
import { FaArrowDown } from "react-icons/fa6";
import pin from "../../../assets/images/home/pin.svg";

function Bussineess() {
    const services = [
        'Golden Visa',
        'New Business Setup',
        'Companies PRO Services',
        'Bank Account Opening'
    ]

    return (
        <div className="w-full bg-[#EFEFEF] py-10 md:py-20 bg-[#EFEFEF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-8 md:mb-12 flex flex-col md:flex-row gap-6 md:gap-32" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-tight md:w-[60%] w-full">
                        Empowering businesses with seamless
                        <br className="hidden sm:block" />
                        <span className="text-blablue"> UAE company</span> setup and <span className="text-blablue">PRO solutions.</span>
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed md:w-[40%] w-full">
                        We simplify business setup by managing licensing, visas, compliance, documentation, banking, and ongoing support, so you can stay focused on growth and long-term success.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-10 items-start">
                    {/* Left Side - Image Card */}
                    <div className="relative lg:w-[65%] w-full" data-aos="fade-up" data-aos-delay="100">
                        <div className="relative rounded-3xl overflow-hidden bg-gray-200">
                            <img
                                src={businessImage}
                                alt="Business team meeting"
                                className="w-full md:h-auto h-64 object-cover"
                            />

                            {/* Arrow Icon Button */}
                            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white rounded-full w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                <FaArrowDown className='-rotate-120 text-blablue text-sm sm:text-base' />
                            </div>

                            {/* Stats Badge */}
                            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 shadow-lg">
                                <p className="text-4xl lg:text-4xl font-semibold text-blablue mb-0.5">1.5 K+</p>
                                <p className="text-xs sm:text-sm text-blablue font-medium">Successful Projects Delivered</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Services List */}
                    <div className="flex flex-col justify-between bg-white lg:w-[35%] w-full p-4 sm:p-5 rounded-2xl" data-aos="fade-up" data-aos-delay="150">

                        {/* Services List */}
                        <div className="space-y-0 mb-6 sm:mb-8">
                            <div>
                                <img src={pin} alt="" className='w-auto h-auto' />
                            </div>
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 py-3 sm:py-4 border-b border-[#C7BFBF] group cursor-pointer hover:border-blablue transition-colors"
                                >
                                    <span className="text-base sm:text-lg font-medium text-black group-hover:text-blablue transition-colors">
                                        {service}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Book a Free Call Button */}
                        <div>
                            <button className="bg-blablue hover:bg-blue-700 text-white font-medium py-3 pl-6 sm:pl-8 pr-14 sm:pr-16 rounded-full transition-all flex items-center gap-3 group relative text-sm sm:text-base">
                                <span>Book A Free Call</span>
                                <div className="bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-105 transition-transform absolute right-1">
                                    <FaArrowDown className="text-blablue rotate-240 font-light w-3 h-3 sm:w-4 sm:h-4" />
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Bussineess
