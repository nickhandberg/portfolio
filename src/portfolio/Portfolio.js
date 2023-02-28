import { motion } from "framer-motion";
import React from "react";
import { staggerCont, textVar } from "../utils/motion";
import { importAll } from "../utils/utils";
import "./portfolio.css";
import PortfolioCard from "./PortfolioCard";

const images = importAll(
    require.context("../graphic/portfolio-images/", false, /\.(png|jpe?g|svg)$/)
);

const links = [
    "https://github.com/noko12312/imagegenapp",
    "https://github.com/thebaker10/Fresh-Mart",
    "https://github.com/noko12312/EmeraldTV",
    "https://github.com/DBrueberg/ZombieWar",
];

const descriptions = [
    "AI image generation app built using the MERN stack and OpenAI api",
    "Grocery marketplace site built with React and tailwind frontend, PHP and Doctrine backend, and MariaDB",
    "Alternative Android/AndroidTV app for Hulu that uses a built in script to fast forward through ad breaks",
    "ZombieWar simulation in which different classes of zombies and humans engage in a simulated war",
];

const isLive = [true, false, false, false];

const liveLinks = ["https://imagegenapp.com", "", "", ""];

const titles = ["ImageGenApp", "FreshMart", "EmeraldTV", "ZombieWar"];

const Portfolio = () => {
    return (
        <section id="portfolio" className="pageContainer">
            <motion.div
                className="portfolio"
                variants={staggerCont}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <motion.div variants={textVar(0.25)} className="sectionTitle">
                    Portfolio
                </motion.div>
                <motion.div variants={textVar(0.3)}>
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
