import { motion } from "framer-motion";
import React from "react";
import { importAll } from "../utils/utils";
import PortfolioCard from "./PortfolioCard";
import "./portfolio.css";

const images = importAll(
    require.context("../graphic/portfolio-images/", false, /\.(png|jpe?g|svg)$/)
);

const links = [
    "https://github.com/noko12312/forum-app",
    "https://github.com/noko12312/imagegenapp",
    "https://github.com/thebaker10/Fresh-Mart",
    "https://github.com/noko12312/EmeraldTV",
    "https://github.com/DBrueberg/ZombieWar",
    "",
];

const descriptions = [
    "Fully functional reddit clone built using the PERN stack",
    "AI image generation app built using the MERN stack and OpenAI api",
    "Grocery marketplace site built with React, Tailwind, PHP, Doctrine, and MariaDB",
    "Alternative Android/AndroidTV app for Hulu that uses a built in script to fast forward through ad breaks",
    "ZombieWar simulation in which different classes of zombies and humans engage in a simulated war",
    "A driving simulation controlled by a neural network made with JavaScript. Trains in browser",
];

const isLive = [true, true, false, false, false, true];

const liveLinks = [
    "https://sawwit.netlify.app/",
    "https://imagegenapp.com",
    "",
    "",
    "",
    "https://nhandberg.xyz/car/index.html",
];

const titles = [
    "Sawwit",
    "ImageGenApp",
    "FreshMart",
    "EmeraldTV",
    "ZombieWar",
    "Neural Net Car",
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="pageContainer">
            <motion.div>
                <motion.div
                    className="sectionTitle"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 1,
                        margin: "-50px 0px 0px 0px",
                    }}
                    transition={{ duration: 0.5, delay: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                >
                    Portfolio
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 1,
                        margin: "-50px 0px 0px 0px",
                    }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    exit={{ opacity: 0, y: 0 }}
                >
                    <p id="portfolioNotice">
                        tap or hover on cards to view details
                    </p>
                </motion.div>
                <div id="portfolioGrid">
                    {links.map((link, i) => (
                        <PortfolioCard
                            image={Object.values(images)[i]}
                            link={link}
                            title={titles[i]}
                            isLive={isLive[i]}
                            liveLink={liveLinks[i]}
                            description={descriptions[i]}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Portfolio;
