import { motion } from "framer-motion";
import React from "react";
import RisingText from "../home/RisingText";
import MenuItems from "./MenuItems";

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
                    <MenuItems
                        name={"Home"}
                        link={"#home"}
                        delay={0.5}
                        menuClickHandler={menuClickHandler}
                    />
                    <MenuItems
                        name={"About"}
                        link={"#about"}
                        delay={0.6}
                        menuClickHandler={menuClickHandler}
                    />
                    <MenuItems
                        name={"Experience"}
                        link={"#education"}
                        delay={0.7}
                        menuClickHandler={menuClickHandler}
                    />
                    <MenuItems
                        name={"Skills"}
                        link={"#skills"}
                        delay={0.8}
                        menuClickHandler={menuClickHandler}
                    />
                    <MenuItems
                        name={"Portfolio"}
                        link={"#portfolio"}
                        delay={0.9}
                        menuClickHandler={menuClickHandler}
                    />
                    <MenuItems
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
