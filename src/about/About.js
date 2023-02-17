import { motion } from "framer-motion";
import React from "react";
import { staggerCont, textVar } from "../utils/motion";
import "./about.css";

const About = () => {
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
                    About
                </motion.div>
                <motion.div
                    variants={textVar(0.4)}
                    className="contentContainer"
                >   
                    
                    <p className="sectionContent">
                        Hello, I am Nicholas Handberg. 
                        I recently graduated college with a Bachelor in computer science. 
                        I am looking to put my skills and experience to use and am hoping to 
                        gain valuable experience in a professional enviornment. Please continue on to
                        take a look at my education, skills, and portfolio              
                    </p>
                </motion.div>
                
            </motion.div>
        </section>
    );
};

export default About;
