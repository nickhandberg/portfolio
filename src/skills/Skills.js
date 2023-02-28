import { motion } from "framer-motion";
import React from "react";
import { staggerCont, textVar } from "../utils/motion";
import BubbleGrid from "./Bubble.js";
import "./skills.css";

const Skills = () => {
    return (
        <section id="skills" className="pageContainer">
            <motion.div className="skills">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: false,
                        amount: 1,
                        margin: "-50px 0px 0px 0px",
                    }}
                    className="sectionTitle"
                    transition={{ duration: 0.5, delay: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                >
                    Skills
                </motion.div>

                <BubbleGrid></BubbleGrid>
            </motion.div>
        </section>
    );
};

export default Skills;
