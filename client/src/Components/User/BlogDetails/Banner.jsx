
function Banner({ image, heading }) {
    return (
        <div className="w-full bg-white py-16 md:pt-32 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="mb-4">
                        <span className="text-sm font-medium text-blablue">
                            [Blog Details]
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-tight max-w-4xl mx-auto">
                        {heading}
                    </h1>
                </div>

                {/* Featured Image */}
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-3xl overflow-hidden">
                        <img
                            src={image}
                            alt={heading}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
