import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Card  from "./components/Card";

export default function App() {

    return (
        <div>
            <Navbar />
            <div><h1 className="heading">Patient Search</h1></div>
            <SearchBar />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Footer/>
        </div>
    );
}