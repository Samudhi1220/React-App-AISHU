import React, { useEffect, useState } from 'react';
import axios from 'axios';
import data from '../../../data/product-data.json';
import { ProductModel } from "../../../model/ProductModel";
import heroImage from '../../../images/beautiful-fashion-woman-posing-with-elegant-suit.jpg';
import { CollectionItem } from "../../../model/CollectionItem";
import { Categories } from "../../../model/Categories";
import collections from '../../../data/collections.json'
import categories from '../../../data/categories.json'

const Home = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        axios.get('http://localhost:4000/products/all')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center w-full bg-gray-100">
                <div className="absolute inset-0 bg-gradient bg-opacity-50 from-white via-white to-transparent"></div>
                <div className="container px-4 relative z-20 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-light font-bold text-amber-50 leading-tight">
                        STYLISH COAT
                    </h1>
                    <p className="text-lg md:text-xl mt-4 text-black uppercase tracking-widest">
                        Stylish Shop
                    </p>
                    <button className="mt-8 px-6 py-2 md:px-8 md:py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                        Shop Now
                    </button>
                </div>
                <div className="absolute inset-0 bg-cover bg-center"
                     style={{ backgroundImage: `url(${heroImage})`, objectFit: 'cover' }}>
                </div>
            </section>

            {/* Collections Section */}
            <section className="py-10 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {collections.map((collection, index) => (
                            <div key={index} className="relative mb-4 md:mb-0">
                                <img src={collection.imageUrl} alt={collection.title}
                                     className="w-full h-64 md:h-full object-cover rounded-lg shadow-lg"/>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <h3 className="text-xl md:text-2xl">{collection.title}</h3>
                                        <a href={collection.link}
                                           className="mt-2 md:mt-4 inline-block bg-white text-black px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-gray-200 transition">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Best Seller Section */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-4xl text-tertiary font-extralight mb-6 md:mb-10">RECENT PRODUCTS</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                        {data.filter((product: ProductModel) => product.isBestSeller).map((product: ProductModel) => (
                            <div key={product.id}
                                 className="border p-4 rounded-lg text-center shadow-lg hover:shadow-2xl transition-shadow">
                                <img src={product.image} alt={product.name} className="h-40 md:h-48 mx-auto w-full object-cover"/>
                                <h3 className="mt-4 font-semibold text-base md:text-lg">{product.name}</h3>
                                <p className="mt-2 text-gray-600">${product.price}</p>
                                <button className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-black text-white rounded-full hover:bg-gray-700 transition">
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trending & New Fashion Collection */}
            <section className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <img
                            src={heroImage}
                            alt="Gray Sweatshirt"
                            className="w-full h-64 md:h-full object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Trending New Fashion</h1>
                        <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi
                            distinctio magni, iure deserunt doloribus optio.
                        </p>
                        <button className="px-6 py-2 md:px-8 md:py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
                            Shop Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Aishu Categories Section */}
            <section className="bg-gradient-to-r to-gray-800 py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8 mt-4 md:mt-8 text-gray-800 tracking-tight">
                        AISHU Categories
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-5 text-center">
                        {categories.map((category) => (
                            <div key={category.name}
                                 className="group relative overflow-hidden rounded-lg shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out">
                                <div className="absolute inset-0 bg-gradient from-transparent to-black opacity-60"></div>
                                <h3 className="absolute inset-x-0 bottom-0 p-2 md:p-4 font-semibold text-sm md:text-base text-amber-50 z-10">
                                    {category.name}
                                </h3>
                                <img src={category.image} alt={category.name}
                                     className="w-full h-40 md:h-60 object-cover"/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;