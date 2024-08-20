import React from "react";
import img1 from '../../../images/image1.jpg';
import img2 from '../../../images/image2.jpg';
import img3 from '../../../images/image3.jpg';
import img4 from '../../../images/image4.jpg';
import img5 from '../../../images/image5.jpg';
import img6 from '../../../images/image5.jpg';

export const Footer = () => {
    return (
        <div className="bg-white py-5 sm:py-10">
            <div className="container mx-auto px-4">
                {/* Instagram Section */}
                <div className="relative mb-10">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                        {[img1, img2, img3, img4, img5, img6].map((imgSrc, index) => (
                            <div key={index} className="aspect-w-1 aspect-h-1">
                                <img src={imgSrc} alt={`image${index + 1}`} className="w-full h-full object-cover"/>
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 bg-black bg-opacity-30">
                        <p className="text-lg sm:text-xl font-semibold text-white">Follow our Instagram</p>
                        <a href="https://instagram.com/aviwp.studio" className="text-sm sm:text-base text-gray-200">@aviwp.studio</a>
                    </div>
                </div>

                <div className="bg-gray-800 text-gray-200 py-8 sm:py-10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Sign Up Now & Get 10% Off</h3>
                                <p className="text-gray-400 mb-4">Get timely updates from your favorite products.</p>
                                <form>
                                    <input type="email" placeholder="Email Address" className="px-4 py-2 border border-gray-500 rounded w-full mb-2"/>
                                    <button type="submit" className="w-full bg-black text-white px-4 py-2 rounded">Subscribe</button>
                                </form>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                                <ul>
                                    <li className="mb-2 flex items-center">
                                        <i className="fas fa-phone-alt mr-2"></i>
                                        <span>Phone: 888-999-000-1425</span>
                                    </li>
                                    <li className="mb-2 flex items-center">
                                        <i className="fas fa-envelope mr-2"></i>
                                        <span>Email: <a href="mailto:azedw@mail.com" className="text-blue-400 hover:underline">azedw@mail.com</a></span>
                                    </li>
                                    <li className="mb-2 flex items-start">
                                        <i className="fas fa-map-marker-alt mr-2 mt-1"></i>
                                        <span>Address: 22/1 National City Austria, Dream Land, Huwai</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4">Company</h3>
                                <ul>
                                    {["About Us", "Best Services", "Recent Insights", "Shipping Guide", "Privacy Policy"].map((item, index) => (
                                        <li key={index} className="mb-2">
                                            <a href="#" className="hover:text-white">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4">Payment & Shipping</h3>
                                <ul>
                                    {["Payment Method", "Terms of Use", "Shipping Policy", "Return Policy"].map((item, index) => (
                                        <li key={index} className="mb-2">
                                            <a href="#" className="hover:text-white">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-8">
                            <p className="text-gray-500 text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}