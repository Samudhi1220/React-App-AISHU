import React from "react";

export class Contact extends React.Component {
    render() {
        return (
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-900">Get in Touch</h1>
                        <p className="mt-4 text-gray-600">We'd love to hear from you! Whether you have a question about
                            our products, pricing, or anything else, our team is ready to answer all your questions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Form</h2>
                            <form action="#" method="POST">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your
                                        Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your
                                        Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your
                                        Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition duration-200">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                            <p className="text-gray-600 mb-4">Feel free to reach out to us via any of the channels
                                below:</p>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                                <p className="text-gray-600">contact@yourcompany.com</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                                <p className="text-gray-600">+1 (234) 567-890</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                                <p className="text-gray-600">1234 Street Name, City, State, ZIP Code</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
                                <div className="flex space-x-4 mt-4">
                                    <a href="#" className="text-gray-500 hover:text-gray-900">
                                        <svg fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                                            <path
                                                d="M19.768 3H4.232C3.552 3 3 3.552 3 4.232v15.536C3 20.448 3.552 21 4.232 21h15.536c.68 0 1.232-.552 1.232-1.232V4.232C21 3.552 20.448 3 19.768 3zM12 7.4c2.535 0 4.6 2.065 4.6 4.6 0 2.535-2.065 4.6-4.6 4.6-2.535 0-4.6-2.065-4.6-4.6 0-2.535 2.065-4.6 4.6-4.6zM18 18h-1.6c-.2 0-.4-.2-.4-.4v-1.2c0-.2.2-.4.4-.4H18v1.6zM8.4 10.8H7.2v-1.6h1.2v1.6zM16.8 10.8h-1.2v-1.6h1.2v1.6zM12 10.8h-1.2v-1.6H12v1.6zM15.6 12H18v1.6h-2.4V12zM8.4 12H6v1.6h2.4V12zM12 12h1.2v1.6H12V12z"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-900">
                                        <svg fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                                            <path
                                                d="M18.4 8.45a7.55 7.55 0 0 1-2.175.595 3.803 3.803 0 0 0 1.664-2.097 7.608 7.608 0 0 1-2.41.924 3.793 3.793 0 0 0-6.538 3.457 10.765 10.765 0 0 1-7.812-3.967 3.794 3.794 0 0 0 1.175 5.064 3.763 3.763 0 0 1-1.72-.475v.048a3.796 3.796 0 0 0 3.045 3.717 3.803 3.803 0 0 1-1.717.065 3.796 3.796 0 0 0 3.548 2.637A7.607 7.607 0 0 1 2 19.798a10.744 10.744 0 0 0 5.82 1.705c6.975 0 10.785-5.777 10.785-10.784 0-.165-.003-.33-.011-.494A7.698 7.698 0 0 0 20 7.577a7.547 7.547 0 0 1-2.2.603A3.805 3.805 0 0 0 18.4 8.45z"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-900">
                                        <svg fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                                            <path
                                                d="M22.54 6.42c-.5-.37-1.12-.63-1.77-.71A4.451 4.451 0 0 0 23 3.58c-.86.52-1.82.89-2.84 1.1a4.463 4.463 0 0 0-7.6 4.07 12.64 12.64 0 0 1-9.17-4.65c-.41.71-.65 1.54-.65 2.42a4.463 4.463 0 0 0 1.98 3.72A4.46 4.46 0 0 1 3 8.87v.06a4.464 4.464 0 0 0 3.58 4.38c-.41.11-.84.17-1.29.17-.31 0-.62-.03-.92-.09a4.469 4.469 0 0 0 4.16 3.09A8.94 8.94 0 0 1 2 18.1a12.632 12.632 0 0 0 6.84 2.01c8.22 0 12.72-6.81 12.72-12.72 0-.19-.004-.38-.012-.57A9.086 9.086 0 0 0 24 4.56a8.938 8.938 0 0 1-2.46.67A4.482 4.482 0 0 0 22.54 6.42z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}