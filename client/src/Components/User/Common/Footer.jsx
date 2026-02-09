import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Handle newsletter subscription ... .. . 
        console.log('Subscribing email:', email);
        setEmail('');
    };

    return (
        <footer className="bg-[#F7F7F4] pt-16 pb-10 md:px-0 px-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Newsletter Section */}
                    <div className="lg:col-span-2" data-aos="fade-up">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Newsletter</h3>
                        <form onSubmit={handleSubscribe} className="relative mb-4 bg-white p-2 rounded-full md:w-[77%] w-[96%]">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="w-full px-4 py-2 pr-32 rounded-full bg-white border border-gray-200 focus:outline-none focus:border-blablue text-sm"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute right-1 top-1/2 -translate-y-1/2 bg-blablue hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors text-sm font-medium"
                            >
                                Subscribe
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                        <p className="text-gray-600 text-sm">Let's transform your vision into results.</p>
                    </div>

                    {/* Main Pages */}
                    <div className="lg:pl-18" data-aos="fade-up" data-aos-delay="100">
                        <div className="flex gap-20">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Main Pages</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link to="/" className="text-gray-600 hover:text-blablue transition-colors">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/case-study" className="text-gray-600 hover:text-blablue transition-colors">
                                            Case Study
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pricing" className="text-gray-600 hover:text-blablue transition-colors">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog" className="text-gray-600 hover:text-blablue transition-colors">
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div className='md:hidden block  '>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Company</h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <Link to="/contact" className="text-gray-600 hover:text-blablue transition-colors">
                                                Contact
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/services" className="text-gray-600 hover:text-blablue transition-colors">
                                                Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about" className="text-gray-600 hover:text-blablue transition-colors">
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/pricing" className="text-gray-600 hover:text-blablue transition-colors">
                                                Pricing
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Company */}
                    <div className='md:block hidden ' data-aos="fade-up" data-aos-delay="150">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/contact" className="text-gray-600 hover:text-blablue transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-600 hover:text-blablue transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-600 hover:text-blablue transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="text-gray-600 hover:text-blablue transition-colors">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Empty column for spacing on large screens */}
                    <div className="hidden lg:block"></div>
                </div>

                {/* Contact Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8" data-aos="fade-up" data-aos-delay="200">
                    <div>
                        <p className="text-sm text-[#03030F] mb-1">Email</p>
                        <a href="mailto:contactnayyar@gmail.com" className="text-[#03030F] hover:text-blablue transition-colors">
                            contactnayyar@gmail.com
                        </a>
                    </div>
                    <div>
                        <p className="text-sm text-[#03030F] mb-1">Visit Us</p>
                        <p className="text-[#03030F]">Karama Centre, Dubai</p>
                    </div>
                    <div>
                        <p className="text-sm text-[#03030F] mb-1">Call us Now</p>
                        <a href="tel:+9912345478" className="text-[#03030F] hover:text-blablue transition-colors">
                            +99 1234 5478
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Blue Section */}
            <div className="bg-blablue text-white py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg" data-aos="fade-up" data-aos-delay="250">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-row justify-between items-center gap-4 py-6 mb-10 md:mb-0">
                        {/* Logo and Social Links */}
                        <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
                            <Link to="/" className="text-2xl font-bold">
                                NAYYAR PRO
                            </Link>
                        </div>

                        {/* Right Side Links */}
                        <div className="flex items-center gap-4 text-sm">
                            <Link to="/changelog" className="hover:text-blue-200 transition-colors">
                                Changelog
                            </Link>
                            <span>•</span>
                            <Link to="/terms" className="hover:text-blue-200 transition-colors">
                                Terms
                            </Link>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div className="flex items-center gap-6">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                            Twitter
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                            Facebook
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                            Instagram
                        </a>
                        {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                                    Instagram
                                </a> */}
                    </div>

                    {/* Copyright for mobile */}
                    {/* <div className="text-center md:hidden mt-4 text-sm">
                        © 2026. All rights reserved.
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
