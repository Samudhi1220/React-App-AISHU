import React from "react";
import img2 from '../../../images/three-young-beautiful-smiling-girls-trendy-summer-casual-jeans-clothes-sexy-carefree-women-posing-positive-models-sunglasses.jpg'
import img3 from '../../../images/three-beautiful-young-girls-posing-city-street-night.jpg'

export const About = () => {
    return (
        <div className="bg-gray-50">
            {/* About Us Section */}
            <section className="py-10 sm:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        {/* Left Section: Image */}
                        <div className="w-full md:w-1/2 mb-8 md:mb-0">
                            <img
                                src={img2}
                                alt="Fashion Woman"
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>

                        {/* Right Section: Text */}
                        <div className="w-full md:w-1/2 md:pl-16">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Us</h2>
                            <h3 className="text-3xl sm:text-4xl font-extralight mb-6">
                                Clothes that will be your best friends
                            </h3>
                            <p className="text-base sm:text-lg text-gray-600 mb-4">
                                Compared with the size of the rest of him, waved about helplessly as he looked to me,
                                Gregor then turned to look out the window at the dull weather deal to the day.
                            </p>
                            <button className="mt-4 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Goal Section */}
            <section className="py-10 sm:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                        <div className="border p-6 sm:p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Our Mission</h3>
                            <p className="text-base sm:text-lg text-gray-600">
                                Pitifully thin compared with the size of the rest of him, waved about helplessly as he
                                looked. "What's happened to me Gregor then turned to look out the window at the dull
                                weather deal to the day."
                            </p>
                        </div>

                        <div className="border p-6 sm:p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Goal Of Our Business</h3>
                            <p className="text-base sm:text-lg text-gray-600">
                                Pitifully thin compared with the size of the rest of him, waved about helplessly as he
                                looked. "What's happened to me Gregor then turned to look out the window at the dull
                                weather deal to the day."
                            </p>
                            <button className="mt-4 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                                Go to Shop
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client's Quote Section */}
            <section className="py-10 sm:py-20 px-4 sm:px-8">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Client's Quote</h2>
                            <p className="text-base sm:text-lg text-gray-700 mb-8">
                                Travelling salesman and above it there hung a picture
                            </p>
                            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                                <p className="text-base sm:text-lg text-gray-600 mb-4">
                                    "Samsa was a travelling salesman and above it there hung a picture that he had recently
                                    cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady
                                    fitted out with a fur hat and..."
                                </p>
                                <p className="text-base sm:text-lg font-semibold">— Jhon Smith</p>
                            </div>
                            <div className="flex space-x-2 mt-4">
                                <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                                <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                                <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 mt-8 md:mt-0">
                            <img
                                src={img3}
                                alt="Two Women"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;