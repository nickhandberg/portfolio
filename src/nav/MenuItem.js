import { motion } from "framer-motion";
import React from "react";

const MenuItem = ({ name, link, delay, menuClickHandler }) => {
    return (
        <motion.div
            className="navLink"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, delay: delay }}
        >
            <a href={link} onClick={menuClickHandler}>
                {name}
            </a>
        </motion.div>
    );
};

export default MenuItem;
