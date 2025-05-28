import React from "react";
import About from "./components/About/About";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";
function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        <About/>
        </>
    )
}

export default Layout