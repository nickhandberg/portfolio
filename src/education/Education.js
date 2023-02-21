import { motion } from "framer-motion";
import React from "react";
import { staggerCont, textVar } from "../utils/motion";
import "./education.css";
import GraphItem from "./GraphItem";

const Education = () => {
    return (
        <section id="education" className="pageContainer">
            <motion.div
                className="education"
                variants={staggerCont}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <motion.div variants={textVar(0.25)} className="sectionTitle">
                    Experience
                </motion.div>
                <div className="graphContainer">
                    <div className="educationContainer">
                        <h2>Education</h2>
                        <GraphItem
                            title="BS Computer Science"
                            location="Concordia University, St. Paul"
                            details="3.87 GPA"
                        />
                        <GraphItem
                            title="Transferred Out"
                            location="South Dakota State University"
                        />
                        <GraphItem
                            title="High School Diploma"
                            location="Saint Michael-Albertville High School"
                            details="3.40 GPA"
                        />
                    </div>
                    <div className="experienceContainer">
                        <h2>Work</h2>
                        <GraphItem
                            title="Manufacturing Technician"
                            location="Winchester Interconnect"
                        />
                        <GraphItem
                            title="Programming Intern"
                            location="Interstates Control Systems"
                        />
                        <GraphItem
                            title="Cashier and Cook"
                            location="Domino's Pizza "
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
