import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Test from "../pages/home";


export default function Root () {
    
    return (
        <>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/test" element={<Test/>} />
        </>
    )
}
