import { motion } from "framer-motion";

import { React } from "react";
import { staggerCont, textVar3 } from "../utils/motion";
import "./about.css";

const About = () => {
    return (
        <section id="about" className="pageContainer">
            <motion.div
                className="about"
                variants={staggerCont}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.6 }}
            >
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
                    About
                </motion.div>
                <div className="contentContainer">
                    <motion.p
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{
                            once: false,
                            amount: 1,
                            margin: "-100px 0px -100px 0px",
                        }}
                        transition={{
                            delay: 0,
                            duration: 0.5,
                            type: "ease",
                        }}
                        className="greenText"
                    >
                        Hello, I am Nicholas Handberg.
                    </motion.p>
                    <motion.p
                        className="sectionContent"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{
                            once: false,
                            amount: 1,
                            margin: "-100px 0px 0px 0px",
                        }}
                        transition={{
                            delay: 0,
                            duration: 0.5,
                            type: "ease",
                        }}
                    >
                        I recently graduated college with a Bachelors degree in
                        computer science. I am looking to put my skills and
                        experience to use and am hoping to gain valuable
                        experience in a professional enviornment.
                    </motion.p>
                    <motion.hr
                        initial={{ scale: 0, opacity: 1 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{
                            once: false,
                            amount: 1,
                            margin: "-100px 0px -100px 0px",
                        }}
                        transition={{
                            delay: 0,
                            duration: 1,
                            type: "ease",
                        }}
                    />
                    <motion.p
                        className="sectionContent"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{
                            once: false,
                            amount: 1,
                            margin: "-100px 0px 0px 0px",
                        }}
                        transition={{
                            delay: 0,
                            duration: 0.5,
                            type: "ease",
                        }}
                    >
                        Please continue on to learn about my experience and
                        skills.
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
