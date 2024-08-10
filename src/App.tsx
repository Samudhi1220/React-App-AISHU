import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultContent/DefaultLayout";
import {NavBar} from "./view/common/NavBar/NavBar";
import LoginPage from "./view/pages/Login/LoginPage";

function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/*"
                           Component={DefaultLayout}>
                    </Route>
                    <Route path="/account"
                           Component={LoginPage}>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
