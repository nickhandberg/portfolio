import { motion } from "framer-motion";
import React from "react";

const SlamText = ({ name, link, delay }) => {
    return (
        <motion.div
            className="navLink"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, delay: delay }}
        >
            <a href={link}>{name}</a>
        </motion.div>
    );
};

export default SlamText;
