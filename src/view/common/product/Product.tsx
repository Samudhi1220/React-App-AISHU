import React, { Component } from "react";

interface ProductProps {
    data:any;
}

interface ProductState {
    isActive: boolean;
}

export class Product extends Component<ProductProps, ProductState> {
    constructor(props: ProductProps) {
        super(props);
        this.state = {
            isActive: false,
        };
    }

    render() {
        const { data } = this.props;
        const image = require(`../../../images/products/${data.image}`);

        return (
            <div className="border p-4 rounded-lg text-center w-full">
                <div className="h-[150px]">
                    <img
                        className="h-full w-auto mx-auto"
                        src={image}
                        alt={data.name}
                    />
                </div>
                <div className="mt-4">
                    <h3 className="font-semibold text-lg">{data.name}</h3>
                    <p className="mt-2 text-gray-600">${data.price}</p>
                </div>
                <div className="mt-4">
                    {this.state.isActive ? (
                        <div className="bg-yellow-300 p-2 rounded-lg">
                            <h3 className="text-md">Added to Cart</h3>
                        </div>
                    ) : (
                        <button
                            className="w-full mt-1 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition text-sm"
                            onClick={this.addToCartOnClick}
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        );
    }

    private addToCartOnClick = () => {
        this.setState({
            isActive: true,
        });
    };
}
