import { motion } from "framer-motion";
import React from "react";
import InfoIcon from "../home/InfoIcon";
import "./portfolio.css";

const PortfolioCard = ({
    image,
    link,
    title,
    isLive,
    liveLink,
    description,
}) => {
    return (
        <motion.div
            className="portfolioCard"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{
                once: false,
                amount: 0.5,
                margin: "0px 0px 0px 0px",
            }}
            transition={{
                delay: 0,
                duration: 0.5,
                type: "ease",
            }}
        >
            <img className="portfolioImage" alt="portfolioCard" src={image} />
            <div className="cardHover">
                <h2 className="cardTitle">{title}</h2>
                <p className="cardDescription">{description}</p>
                <div className="portfolioLinks">
                    <InfoIcon link={link} iconName="github" type="logo" />
                    {isLive && (
                        <motion.a
                            className="liveLink"
                            href={liveLink}
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.2 }}
                        >
                            Live site
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioCard;
