import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const services = [
        'Web Development',
        'App Development',
        'Digital Marketing',
        'UI/UX Design',
    ];

    return (
        <nav className=" absolute left-0 right-0 top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-blablue">
                            NAYYAR PRO
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className="text-blablue hover:text-blue-700 transition-colors font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-[#03030F] hover:text-gray-900 transition-colors"
                        >
                            About Us
                        </Link>
                        <Link
                            to="/blog"
                            className="text-[#03030F] hover:text-gray-900 transition-colors"
                        >
                            Blog
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className="flex items-center space-x-1 text-[#03030F] hover:text-gray-900 transition-colors">
                                <span>Services</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {/* Dropdown Menu */}
                            {isServicesOpen && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                                    {services.map((service, index) => (
                                        <Link
                                            key={index}
                                            to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blablue transition-colors"
                                        >
                                            {service}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            to="/solutions"
                            className="text-[#03030F] hover:text-gray-900 transition-colors"
                        >
                            Solutions
                        </Link>
                    </div>

                    {/* Contact Us Button & Arrow Icon */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/contact"
                            className="text-gray-900 hover:text-blablue transition-colors font-medium"
                        >
                            Contact Us
                        </Link>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors">
                            <ArrowUpRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-[#03030F] hover:text-gray-900 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        <Link
                            to="/"
                            className="block py-2 text-blablue hover:text-blue-700 font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="block py-2 text-[#03030F] hover:text-gray-900"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/blog"
                            className="block py-2 text-[#03030F] hover:text-gray-900"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Blog
                        </Link>

                        {/* Mobile Services */}
                        <div>
                            <button
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                className="flex items-center justify-between w-full py-2 text-[#03030F] hover:text-gray-900"
                            >
                                <span>Services</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {isServicesOpen && (
                                <div className="pl-4 space-y-2 mt-2">
                                    {services.map((service, index) => (
                                        <Link
                                            key={index}
                                            to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="block py-2 text-[#03030F] hover:text-blablue"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {service}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            to="/solutions"
                            className="block py-2 text-[#03030F] hover:text-gray-900"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Solutions
                        </Link>
                        <Link
                            to="/contact"
                            className="block py-2 text-gray-900 hover:text-blablue font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
