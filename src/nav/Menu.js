import { motion } from "framer-motion";
import React from "react";
import RisingText from "../home/RisingText";
import SlamText from "./SlamText";

const Menu = ({ menuClickHandler }) => {
    return (
        <div className="hMenu">
            <ul>
                <motion.div
                    className="cancelMenu"
                    onClick={menuClickHandler}
                    whileHover={{ scale: 1.1 }}
                >
                    <box-icon name="x" size="lg"></box-icon>
                </motion.div>
                <RisingText text="Menu" delay={0.5} duration={0}></RisingText>

                <li className="list">
                    <SlamText
                        name={"Home"}
                        link={"index.html"}
                        degree={4}
                        delay={0.5}
                    />
                    <SlamText
                        name={"About"}
                        link={"index.html"}
                        degree={-4}
                        delay={0.6}
                    />
                    <SlamText
                        name={"Education"}
                        link={"index.html"}
                        degree={4}
                        delay={0.7}
                    />
                    <SlamText
                        name={"Skills"}
                        link={"index.html"}
                        degree={-4}
                        delay={0.8}
                    />
                    <SlamText
                        name={"Portfolio"}
                        link={"index.html"}
                        degree={4}
                        delay={0.9}
                    />
                    <SlamText
                        name={"Contact"}
                        link={"index.html"}
                        degree={-4}
                        delay={1}
                    />
                </li>
            </ul>
        </div>
    );
};

export default Menu;
