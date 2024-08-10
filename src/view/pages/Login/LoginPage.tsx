import React from "react";
import NavBar from "../../common/NavBar/NavBar";

export class LoginPage extends React.Component {
    render() {
        return (
            <div>
                {/* Promo Bar */}
                <NavBar />
                {/* Account Page Content */}
                <div className="container mx-auto py-16">
                    <h2 className="text-center text-3xl font-bold mb-8">My Account</h2>

                    <div className="flex justify-center space-x-8">
                        {/* Login Form */}
                        <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">Login</h3>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Username or email address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border rounded"
                                        placeholder="Enter your username or email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Password <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="w-full px-3 py-2 border rounded"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-black text-white px-4 py-2 rounded mt-4"
                                >
                                    Login
                                </button>
                            </form>
                        </div>

                        {/* Register Form */}
                        <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">Register</h3>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Email address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-3 py-2 border rounded"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-black text-white px-4 py-2 rounded mt-4"
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
