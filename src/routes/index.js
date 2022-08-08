import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Test from "../pages/test";


export default function Root() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/test" element={<Test />} />
            </Routes>
        </BrowserRouter>
    )
}
