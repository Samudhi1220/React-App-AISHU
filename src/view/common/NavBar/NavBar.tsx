import React from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import {Link} from "react-router-dom";

export class NavBar extends React.Component {
    render() {
        return (
            <div>
                {/* Promo Bar */}
                <div className="bg-black w-screen text-white text-center py-2">
                    Join our showroom and get 25% off! Coupon code: Bangbang45
                </div>

                {/* Main Navbar */}
                <div className="bg-white px-4 py-2 border-b border-gray-200">
                    <div className="container  flex items-center justify-between">
                        {/* Left Section: Hamburger Menu and Logo */}
                        <div className="flex items-center space-x-4">
                            {/* Hamburger Menu */}
                            <button className="text-black">
                                <div className="space-y-1">
                                    <span className="block w-6 h-0.5 bg-black"></span>
                                    <span className="block w-6 h-0.5 bg-black"></span>
                                    <span className="block w-6 h-0.5 bg-black"></span>
                                </div>
                            </button>

                            {/* Logo */}
                            <span className="text-black font-bold text-2xl">AISHU</span>
                        </div>

                        {/* Center Section: Navigation Links */}
                        <div className="hidden md:flex space-x-8">
                            <ul className="flex space-x-8">
                                <li className="text-black hover:text-gray-500">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="text-black hover:text-gray-500">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="text-black hover:text-gray-500">
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li className="text-orange-600 hover:text-orange-500">
                                    <Link to="/pages">Pages</Link>
                                </li>
                                <li className="text-black hover:text-gray-500">
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li className="text-black hover:text-gray-500">
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Right Section: Search Bar and Icons */}
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for.."
                                    className="pl-10 pr-4 py-2 border rounded-full w-64"
                                />
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"/>
                            </div>

                            <div className="flex items-center space-x-4">
                                {/* Wrap the FaUser icon with a Link component */}
                                <Link to="/account">
                                    <FaUser className="text-black hover:text-gray-500"/>
                                </Link>
                                <FaHeart className="text-black hover:text-gray-500"/>
                                <div className="relative">
                                    <FaShoppingBag className="text-black hover:text-gray-500"/>
                                    <span
                                        className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
