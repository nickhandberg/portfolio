import { motion } from "framer-motion";
import React from "react";
import { staggerCont, textVar } from "../utils/motion";

const Contact = () => {
    return (
        <section id="contact" className="pageContainer">
            <motion.div
                className="about"
                variants={staggerCont}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <motion.div variants={textVar(0.25)} className="sectionTitle">
                    Under Construction
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
