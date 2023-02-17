import { motion } from "framer-motion";
import React from "react";
import { textVar } from "../utils/motion";

const RisingText = ({ text, delay, duration }) => {
    return (
        <div className="risingText">
            <motion.div
                variants={textVar(delay)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <h1>{text}</h1>
            </motion.div>
        </div>
    );
};

export default RisingText;
