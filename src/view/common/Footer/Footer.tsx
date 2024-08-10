import { Component } from "react";
import img1 from '../../../images/image1.jpg'; // replace with your actual paths
import img2 from '../../../images/image2.jpg';
import img3 from '../../../images/image3.jpg';
import img4 from '../../../images/image4.jpg';
import img5 from '../../../images/image5.jpg';
import img6 from '../../../images/image5.jpg';


export class Footer extends Component {
    render() {
        return (
            <div className="bg-white py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Instagram Section */}
                        <div className="relative md:col-span-3 flex justify-between items-center h-50 ">
                            {[img1, img2, img3, img4, img5, img6].map((imgSrc, index) => (
                                <div className="flex-1" key={index}>
                                    <img src={imgSrc} alt={`image${index + 1}`} className="w-full h-50 object-cover "/>
                                </div>
                            ))}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 bg-black bg-opacity-30">
                                <p className="text-xl font-semibold text-white">Follow our Instagram</p>
                                <a href="https://instagram.com/aviwp.studio" className="text-gray-200">@aviwp.studio</a>
                            </div>
                        </div>
                    </div>








                    <div className="bg-gray-800 text-gray-200 py-10">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                            <div>
                                <h3 className="text-lg font-semibold mb-4">Sign Up Now & Get 10% Off</h3>
                                <p className="text-gray-400 mb-4">Get timely updates from your favorite products.</p>
                                <form>
                                    <input type="email" placeholder="Email Address" className="px-4 py-2 border border-gray-500 rounded w-full mb-2"/>
                                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded">Subscribe</button>
                                </form>
                            </div>


                            <div>
                                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                                <ul>
                                    <li className="mb-2">
                                        <i className="fas fa-phone-alt mr-2"></i>
                                        <span>Phone: 888-999-000-1425</span>
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-envelope mr-2"></i>
                                        <span>Email: <a href="mailto:azedw@mail.com" className="text-blue-400 hover:underline">azedw@mail.com</a></span>
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-map-marker-alt mr-2"></i>
                                        <span>Address: 22/1 National City Austria, Dream Land, Huwai</span>
                                    </li>
                                </ul>
                            </div>


                            <div>
                                <h3 className="text-lg font-semibold mb-4">Company</h3>
                                <ul>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-white">About Us</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-white">Best Services</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-white">Recent Insights</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-white">Shipping Guide</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-white">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>


                            <div>
                                <h3 className="text-lg font-semibold mb-4">Payment & Shipping</h3>
                                <ul>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-white">Payment Method</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-white">Terms of Use</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-white">Shipping Policy</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-white">Return Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <p className="text-gray-500 text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
                        </div>
                    </div>



                    </div>
                </div>

        );
    }
}
