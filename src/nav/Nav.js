import { motion } from "framer-motion";
import { navVar } from "../utils/motion";

import "./nav.css";
import NavLink from "./NavLink";

const Nav = ({ inMenu, clicked, menuClickHandler, preventHide }) => {
    return (
        <header>
            {inMenu && clicked && (
                <motion.div
                    className="growingCircle"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                />
            )}
            {!inMenu && clicked && (
                <motion.div
                    className="growingCircle"
                    initial={{ scale: 1 }}
                    animate={{ scale: 0 }}
                    transition={{ duration: 1 }}
                />
            )}
            <motion.nav
                id="navbar"
                variants={navVar}
                initial="hidden"
                whileInView="show"
            >
                <div className="gradient-01"></div>
                <a className="logo" href="#home">
                    NH
                </a>

                <div className="navLinks">
                    <NavLink
                        name={"Home"}
                        link={"#home"}
                        preventHide={preventHide}
                    />
                    <NavLink
                        name={"Experience"}
                        link={"#education"}
                        preventHide={preventHide}
                    />
                    <NavLink
                        name={"Skills"}
                        link={"#skills"}
                        preventHide={preventHide}
                    />
                    <NavLink
                        name={"Portfolio"}
                        link={"#portfolio"}
                        preventHide={preventHide}
                    />
                    <NavLink
                        name={"Contact"}
                        link={"#contact"}
                        preventHide={preventHide}
                    />
                    <motion.div onClick={menuClickHandler}>
                        {!inMenu && (
                            <motion.div
                                className="menu"
                                id="menu"
                                whileHover={{ scale: 1.1 }}
                            >
                                <box-icon
                                    name="menu"
                                    size="md"
                                    color="rgba(232,232,232,1)"
                                ></box-icon>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </motion.nav>
        </header>
    );
};

export default Nav;
