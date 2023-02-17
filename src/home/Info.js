import { motion } from "framer-motion";
import React from "react";
import arrow from "../graphic/arrow-down.svg";
import { staggerCont, textVar, textVar2 } from "../utils/motion";
import InfoIcon from "./InfoIcon";
import RisingText from "./RisingText";

const Info = () => {
    return (
        <div>
            <motion.div
                className="info"
                variants={staggerCont}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <RisingText text="Nicholas" delay={0.7} />
                <RisingText text="Handberg" delay={0.8} />

                <motion.div variants={textVar(1)}>
                    <div className="linksChunk">
                        <div className="lineSeparator"></div>
                        <div className="contactLinks">
                            <InfoIcon
                                link="https://github.com/noko12312"
                                iconName="github"
                                type="logo"
                            />
                            <InfoIcon
                                link="https://linkedin.com/in/nicholas-handberg-77631212b"
                                iconName="linkedin-square"
                                type="logo"
                            />
                            <InfoIcon
                                link=""
                                iconName="envelope"
                                type="default"
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <motion.img
                variants={textVar2(1.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="downArrow"
                src={arrow}
                alt="Down Arrow"
            ></motion.img>
        </div>
    );
};

export default Info;
