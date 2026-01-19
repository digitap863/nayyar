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
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-blablue">
                            NAYYAR PRO
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
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

                        <Link
                            to="/services"
                            className="block py-2 text-[#03030F] hover:text-gray-900"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Services
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
