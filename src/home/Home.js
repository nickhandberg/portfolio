import React from "react";
import "./home.css";
import Info from "./Info";

const Home = () => {
    return (
        <main id="home" className="pageContainer">
            <div className="home">
                <Info />
            </div>
        </main>
    );
};

export default Home;
