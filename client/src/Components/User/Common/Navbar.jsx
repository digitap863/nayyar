import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/blogs', label: 'Blog' },
        { path: '/services', label: 'Services' }
    ];

    const mobileLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/blogs', label: 'Blog' },
        { path: '/services', label: 'Services' },
        { path: '/contact', label: 'Contact Us' }
    ];

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <nav className=" absolute left-0 right-0 top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0" data-aos="fade-down" data-aos-duration="400">
                        <Link to="/" className="text-2xl font-bold text-blablue">
                            NAYYAR PRO
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                data-aos="fade-down"
                                data-aos-duration="400"
                                data-aos-delay={50 + index * 50}
                                className={`relative font-medium transition-colors group ${isActive(link.path)
                                    ? 'text-blablue'
                                    : 'text-[#03030F] hover:text-blablue'
                                    }`}
                            >
                                {link.label}
                                {/* Underline animation */}
                                <span className={`absolute left-0 bottom-0 h-0.5 bg-blablue transition-all duration-300 ${isActive(link.path)
                                    ? 'w-full'
                                    : 'w-0 group-hover:w-full'
                                    }`}></span>
                            </Link>
                        ))}


                    </div>

                    {/* Contact Us Button & Arrow Icon */}
                    <div className="hidden md:flex items-center space-x-4" data-aos="fade-left" data-aos-duration="400" data-aos-delay="250">
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
                    <div className="md:hidden" data-aos="fade-left" data-aos-duration="400">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-[#03030F] hover:text-gray-900 focus:outline-none p-2 rounded-lg transition-all duration-300 hover:bg-gray-100"
                        >
                            <svg
                                className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
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

            {/* Mobile Menu with Animation */}
            <div
                className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 pt-4 pb-6 space-y-1">
                    {mobileLinks.map((link, index) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`block py-3 px-4 rounded-xl font-medium transition-all duration-300 transform ${isMobileMenuOpen
                                    ? 'translate-x-0 opacity-100'
                                    : '-translate-x-4 opacity-0'
                                } ${isActive(link.path)
                                    ? 'text-blablue bg-blue-50'
                                    : 'text-[#03030F] hover:text-blablue hover:bg-gray-50'
                                }`}
                            style={{
                                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                            }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Mobile CTA Button */}
                    <div
                        className={`pt-4 transition-all duration-300 transform ${isMobileMenuOpen
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-4 opacity-0'
                            }`}
                        style={{
                            transitionDelay: isMobileMenuOpen ? '250ms' : '0ms'
                        }}
                    >
                        <Link
                            to="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-2 w-full bg-blablue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors"
                        >
                            Get Started
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

