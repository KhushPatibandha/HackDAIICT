import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Card  from "./components/Card";
import SignIn from "./components/SignIn";
import CreateForm from "./components/UserRegistration";
import InfoCard from "./components/InfoCard";
import data from "./data"
import Text from "./components/Text";

export default function App() {

    const infocards = data.map(item => {
        return (
            <InfoCard
                key={item.id}
                {...item}
                
            />
        )
    })

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
            <Text />
            <section>
                {infocards}
            </section>
            <Footer/> 
            {/* <SignIn />
            <CreateForm /> */}
        </div>
    );
}