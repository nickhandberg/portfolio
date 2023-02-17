import { motion } from "framer-motion";
import React from "react";

const InfoIcon = ({ link, iconName, type }) => {
    return (
        <motion.a
            href={link}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
        >
            <box-icon
                name={iconName}
                size="lg"
                type={type === "default" ? null : type}
                color="rgba(232,232,232,1)"
            ></box-icon>
        </motion.a>
    );
};

export default InfoIcon;
