import React, { Component } from 'react';
import axios from 'axios';
import data from '../../../data/product-data.json';
import { ProductModel } from "../../../model/ProductModel";
import heroImage from '../../../images/beautiful-fashion-woman-posing-with-elegant-suit.jpg';
import { CollectionItem } from "../../../model/CollectionItem";
import { Categories } from "../../../model/Categories";
import collections from '../../../data/collections.json'
import categories from '../../../data/categories.json'

interface State {
    products: ProductModel[];
    collections: CollectionItem[];
    category:Categories[];
}

class Home extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            products: [],
            collections:[],
            category:[],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products/all')
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }

    render() {


        return (
            <div className="bg-gray-50">
                {/* Hero Section */}
                <section className="relative h-screen   flex items-center justify-center w-full bg-gray-100">
                    <div
                        className="absolute inset-0  bg-gradient  bg-opacity-50 from-white via-white to-transparent"></div>
                    <div className="container px-4 relative z-20">
                        <h1 className="text-8xl font-light font-bold text-amber-50 leading-tight">
                            STYLISH COAT
                        </h1>
                        <p className="text-xl mt-4 text-black uppercase tracking-widest">
                            Stylish Shop
                        </p>
                        <button
                            className="mt-8 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                            Shop Now
                        </button>
                    </div>
                    <div className="absolute inset-0 bg-cover bg-center"
                         style={{backgroundImage: `url(${heroImage})`, objectFit: 'cover'}}>
                    </div>
                </section>
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-4">
                            {collections.map((collection, index) => (
                                <div key={index} className="relative">
                                    <img src={collection.imageUrl} alt={collection.title}
                                         className="w-full h-full object-cover rounded-lg shadow-lg"/>
                                    <div
                                        className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <h3 className="text-2xl ">{collection.title}</h3>
                                            <a href={collection.link}
                                               className="mt-4 inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">
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
                        <h2 className="text-4xl text-tertiary font-extralight  mb-10">RECENT PRODUCTS</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {data.filter((product: ProductModel) => product.isBestSeller).map((product: ProductModel) => (
                                <div key={product.id}
                                     className="border p-4 rounded-lg text-center shadow-lg hover:shadow-2xl transition-shadow">
                                    <img src={product.image} alt={product.name} className="h-48 mx-auto w-75"/>
                                    <h3 className="mt-4 font-semibold text-lg">{product.name}</h3>
                                    <p className="mt-2 text-gray-600">${product.price}</p>
                                    <button
                                        className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-700 transition">
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Azedw Categories Section */}
                <section className=" bg-black-to-r to-gray-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-semibold text-center  mb-8 mt-8 text-gray-800 tracking-tight">AISHU
                            Categories</h2>
                        <div
                            className="grid  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-8 gap-5 text-center">
                            {categories.map((category) => (
                                <div key={category.name}
                                     className="group relative overflow-hidden rounded-lg shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out">
                                    <div
                                     className="absolute inset-0 bg-gradient from-transparent to-black opacity-60"></div>
                                    <h3 className="absolute inset-x-0 bottom-0 p-8 font-semibold text-lg text-amber-50 z-10">{category.name}</h3>
                                    <img src={category.image} alt={category.name}
                                         className="w-full h-60 object-cover"/>

                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Collection Section */}


                {/* Trending & New Fashion Collection */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-10">Trending & New Fashion Collection</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {this.state.products.map((product: ProductModel) => (
                                <div key={product.id}
                                     className="border p-4 rounded-lg text-center shadow-lg hover:shadow-2xl transition-shadow">
                                    <img src={product.image} alt={product.name} className="h-48 mx-auto"/>
                                    <h3 className="mt-4 font-semibold text-lg">{product.name}</h3>
                                    <p className="mt-2 text-gray-600">${product.price}</p>
                                    <button
                                        className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
