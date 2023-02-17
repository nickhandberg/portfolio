import { motion } from "framer-motion";
import React from "react";
import { staggerCont, textVar } from "../utils/motion";

const Portfolio = () => {
    return (
        <section className="pageContainer">
            <motion.div
                className="about"
                variants={staggerCont}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <motion.div variants={textVar(0.25)} className="sectionTitle">
                    Portfolio
                </motion.div>
                <motion.div
                    variants={textVar(0.4)}
                    className="contentContainer"
                >
                    <p className="sectionContent">
                        This is text about me. I am writing this as a test. Do
                        not think this is about me. This is just test text to
                        test out the format.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Portfolio;
