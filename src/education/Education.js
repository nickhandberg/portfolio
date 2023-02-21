import { motion } from "framer-motion";
import React from "react";
import { staggerCont, textVar } from "../utils/motion";
import "./education.css";
import GraphItem from "./GraphItem";
import GraphTitle from "./GraphTitle";

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
                    Experience
                </motion.div>
                <div className="graphContainer">
                    <div className="educationContainer">
                        <GraphTitle title="Education" />
                        <GraphItem
                            title="BS Computer Science"
                            location="Concordia University, St. Paul"
                            date="Attended 2021-2022"
                            details="3.87 GPA"
                        />
                        <GraphItem
                            title="Some College"
                            location="South Dakota State University"
                            date="Attended 2014-2018"
                        />
                        <GraphItem
                            title="High School Diploma"
                            location="Saint Michael-Albertville High School"
                            date="Graduated 2014"
                            details="3.40 GPA"
                        />
                    </div>
                    <div className="experienceContainer">
                        <GraphTitle title="Work" />
                        <GraphItem
                            title="Manufacturing Technician"
                            location="Winchester Interconnect"
                            date="2019-2020"
                        />
                        <GraphItem
                            title="Programming Intern"
                            location="Interstates Control Systems"
                            date="Summer 2018"
                        />
                        <GraphItem
                            title="Cashier and Cook"
                            location="Domino's Pizza"
                            date="2013-2014"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
