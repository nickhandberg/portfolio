import { motion } from "framer-motion";
import React from "react";

const Star = ({ x, y, scale }) => {
    return (
        <div>
            <motion.div
                style={{ top: y + "vh", left: x + "vw" }}
                className="star"
                initial={{ scale: scale }}
                animate={{
                    scale: [scale, scale * 1.5, scale, scale * 1.5, scale],
                }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",

                    repeat: Infinity,
                    repeatDelay: 0,
                }}
            />
        </div>
    );
};

export default Star;
