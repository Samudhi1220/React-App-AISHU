import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import {Contact} from "../../pages/Contact/Contact";
export class MainContent extends Component {
    render() {
        return (
            <div className="md:px-12
                 max-2x1  mx-auto">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>



                </Routes>
            </div>
        );
    }
}