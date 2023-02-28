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
                viewport={{ once: false, amount: 1 }}
                exit={{ opacity: 0 }}
            >
                <RisingText text="Nicholas" delay={0.1} />
                <RisingText text="Handberg" delay={0.2} />

                <motion.div variants={textVar(0.5)}>
                    <div className="linksChunk">
                        <motion.div
                            className="lineSeparator"
                            initial={{ scale: 0, opacity: 1 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{
                                once: false,
                                amount: 1,
                                margin: "-100px 0px -100px 0px",
                            }}
                            transition={{
                                delay: 1,
                                duration: 1,
                                type: "ease",
                            }}
                        ></motion.div>
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
                id="downArrow"
                className="downArrow"
                src={arrow}
                alt="Down Arrow"
            ></motion.img>
        </div>
    );
};

export default Info;
