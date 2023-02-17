import { motion } from "framer-motion";
import React from "react";
import { slideIn } from "../utils/motion";

const SlidingText = ({ text, delay }) => {
    return (
        <div className="slidingText">
            <motion.div
                variants={slideIn("left", "tween", delay, 1)}
                initial="hidden"
                whileInView="show"
            >
                <p>{text}</p>
            </motion.div>
        </div>
    );
};

export default SlidingText;
