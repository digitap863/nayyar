import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import serviceBanner from "../../../assets/images/service/bann.png";


function Banner() {
    const stats = [
        {
            id: 1,
            number: '500+',
            label: 'Business Licenses Processed',
            description: 'Setup quickly with expert guidance and seamless documentation support.',
            isHighlighted: true
        },
        {
            id: 2,
            number: '98%',
            label: 'Approval Success Rate',
            description: '',
            isHighlighted: false
        },
        {
            id: 3,
            number: '10+',
            label: 'years of pro services expertise',
            description: '',
            isHighlighted: false
        },
        {
            id: 4,
            number: '300+',
            label: 'Companies Supported Across UAE',
            description: '',
            isHighlighted: false
        }
    ]

    return (
        <div className="w-full bg-white py-16 md:pt-32 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="mb-4">
                        <span className="text-sm font-medium text-blablue">
                            [Our Services]
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-tight">
                        Innovative Solutions
                        <br />
                        That Drive Success
                    </h1>
                </div>

                {/* Hero Image */}
                <div className="max-w-5xl mx-auto mb-12">
                    <div className="rounded-t-3xl overflow-hidden">
                        <img
                            src={serviceBanner}
                            alt="Business meeting"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                <div className="bg-black rounded-3xl p-6 md:p-8 z-10 relative bottom-14  max-w-7xl ">
                <div className="flex  gap-6">
                    {/* Primary Stat Card */}
                    <div className="bg-blablue rounded-2xl p-6 text-white ">
                    <p className="text-3xl sm:text-5xl font-semibold mb-2">500+</p>
                    <p className="font-semibold mb-2 text-sm">Business Licenses Processed</p>
                    <p className="text-xs text-blue-100">
                        Setup quickly with expert guidance and seamless documentation support.
                    </p>
                    </div>

                    {/* Secondary Stat Cards */}
                    <div className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center w-68 ">
                    <p className="text-3xl sm:text-7xl font-semibold mb-1">98%</p>
                    <p className="text-black text-sm text-center ">Approval Success Rate</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center w-68 ">
                    <p className="text-3xl sm:text-7xl font-semibold mb-1">10+</p>
                    <p className="text-black text-sm text-center ">years of pro services expertise</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center w-68 ">
                    <p className="text-3xl sm:text-7xl font-semibold mb-1">300+</p>
                    <p className="text-black text-sm text-center ">Companies Supported Across UAE</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
