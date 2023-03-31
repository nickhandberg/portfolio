import { motion } from "framer-motion";
import React from "react";
import RisingText from "../home/RisingText";
import MenuItem from "./MenuItem";

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
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <h1>Menu</h1>
                </motion.div>

                <li className="list">
                    <MenuItem
                        name={"Home"}
                        link={"#home"}
                        delay={0.5}
                        menuClickHandler={menuClickHandler}
                    />
                    <MenuItem
                        name={"Experience"}
                        link={"#education"}
                        delay={0.7}
                        menuClickHandler={menuClickHandler}
                    />
                    <MenuItem
                        name={"Skills"}
                        link={"#skills"}
                        delay={0.8}
                        menuClickHandler={menuClickHandler}
                    />
                    <MenuItem
                        name={"Portfolio"}
                        link={"#portfolio"}
                        delay={0.9}
                        menuClickHandler={menuClickHandler}
                    />
                    <MenuItem
                        name={"Contact"}
                        link={"#contact"}
                        delay={1}
                        menuClickHandler={menuClickHandler}
                    />
                </li>
            </ul>
        </div>
    );
};

export default Menu;
