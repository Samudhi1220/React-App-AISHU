import React from "react";

export class About extends React.Component {
    render() {
        return (
            <div className="bg-gray-50">
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                        {/* Left Section: Image */}
                        <div className="md:w-1/2">
                            <img
                                src={require('../../../images/beautiful-fashion-woman-posing-with-elegant-suit.jpg')}
                                alt="Fashion Woman"
                                className="rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Right Section: Text */}
                        <div className="md:w-1/2 md:pl-16 mt-8 md:mt-0">
                            <h2 className="text-3xl font-bold mb-4">About Us</h2>
                            <h3 className="text-4xl font-extralight mb-6">
                                Clothes that will be your best friends
                            </h3>
                            <p className="text-lg text-gray-600 mb-4">
                                Compared with the size of the rest of him, waved about helplessly as he looked to me,
                                Gregor then turned to look out the window at the dull weather deal to the day.
                            </p>
                            <button
                                className="mt-4 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
                        <div className="border p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                            <p className="text-lg text-gray-600">
                                Pitifully thin compared with the size of the rest of him, waved about helplessly as he
                                looked. "What’s happened to me Gregor then turned to look out the window at the dull
                                weather deal to the day."
                            </p>
                        </div>

                        <div className="border p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">Goal Of Our Business</h3>
                            <p className="text-lg text-gray-600">
                                Pitifully thin compared with the size of the rest of him, waved about helplessly as he
                                looked. "What’s happened to me Gregor then turned to look out the window at the dull
                                weather deal to the day."
                            </p>
                            <button
                                className="mt-4 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                                Go to Shop
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default About;