import { motion } from "framer-motion";
import React from "react";
import { staggerCont, textVar } from "../utils/motion";
import BubbleGrid from "./Bubble.js";
import "./skills.css";

const Skills = () => {
    return (
        <section className="pageContainer">
            <motion.div
                className="skills"
                variants={staggerCont}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <motion.div variants={textVar(0.2)} className="sectionTitle">
                    Skills
                </motion.div>
                <motion.div className="bubbleGrid" variants={textVar(0.5)}>
                    <BubbleGrid></BubbleGrid>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;
