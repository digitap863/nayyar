import building1 from '../../../assets/images/home/buildingno1.png'
import building2 from '../../../assets/images/home/buildingno2.png'
import threepeople from '../../../assets/images/home/threepeople.svg'
import vdoplay from '../../../assets/images/home/vdoplay.svg'

function Banner() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-24 ">
        {/* Content */}
        <div className="text-center mb-4">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4 relative z-10">
            Start Your Dream Business
            <br />
            <span className="text-blablue">In The UAE</span>
          </h1>
          <p className="text-black  text-base max-w-2xl mx-auto mb-4 leading-tight relative z-10 ">
            We handle company setup, licensing, visas, and all PRO documentation—so you can focus on growing your
            business while we manage the rest.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 relative z-10">
            <button className="bg-blablue hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition">
              Learn More
            </button>
            <img src={vdoplay} alt="Video Play" className="w-14 h-14" />
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mb-0 mx-auto flex justify-center items-center">
          {/* Building background image */}
          <img
            src={building1}
            alt="Building background"
            className="absolute w-auto h-auto -bottom-30 object-contain z-0 left-1/2 -translate-x-[70%]"
          />
          <img
            src={building2}
            alt="Building background"
            className="absolute w-auto h-auto -bottom-60 object-contain z-0 left-1/2 -translate-x-[30%]"
          />
          {/* Three people foreground image */}
          <img
            src={threepeople}
            alt="Three professional men in business attire"
            className="relative w-[82%] h-[82%] z-10 mx-auto"
          />
        </div>

        {/* Stats Section */}
        <div className="bg-black rounded-3xl p-6 md:p-8 z-10 relative ">
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
