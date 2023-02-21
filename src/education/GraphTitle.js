import { motion } from "framer-motion";
import React from "react";

const GraphTitle = ({ title }) => {
    return (
        <motion.h2
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{
                once: false,
                amount: 0.5,
                margin: "-100px 0px -100px 0px",
            }}
            transition={{
                delay: 0,
                duration: 0.4,
                type: "ease",
            }}
            className="graphLabel"
        >
            {title}
        </motion.h2>
    );
};

export default GraphTitle;
