import serviceBanner from "../../../assets/images/service/bann.png";


function Banner() {
    return (
        <div className="w-full bg-white py-16 md:pt-32 pb-10">
            <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <div className="mb-4">
                        <span className="text-sm font-medium text-blablue">
                            [Our Services]
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-tight">
                        heading ..
                    </h1>
                </div>

                {/* Hero Image */}
                <div className="max-w-5xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
                    <div className="rounded-t-3xl overflow-hidden">
                        <img
                            src={serviceBanner}
                            alt="Business meeting"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner
