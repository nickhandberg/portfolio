import { motion } from "framer-motion";
import { navVar } from "../utils/motion";

import "./nav.css";
import NavLink from "./NavLink";

const Nav = ({ inMenu, clicked, menuClickHandler }) => {
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
            <motion.nav variants={navVar} initial="hidden" whileInView="show">
                <div className="gradient-01"></div>
                <h1 className="logo">NH</h1>

                <div className="navLinks">
                    <NavLink name={"Home"} link={"index.html"} degree={4} />
                    <NavLink name={"About"} link={"index.html"} degree={-4} />
                    <NavLink
                        name={"Education"}
                        link={"index.html"}
                        degree={4}
                    />
                    <NavLink name={"Skills"} link={"index.html"} degree={-4} />
                    <NavLink
                        name={"Portfolio"}
                        link={"index.html"}
                        degree={4}
                    />
                    <NavLink name={"Contact"} link={"index.html"} degree={-4} />
                    <motion.div
                        onClick={menuClickHandler}
                        whileHover={{ scale: 1.1 }}
                    >
                        {!inMenu && (
                            <div className="menu">
                                <box-icon
                                    name="menu"
                                    size="md"
                                    color="rgba(232,232,232,1)"
                                ></box-icon>
                            </div>
                        )}
                    </motion.div>
                </div>
            </motion.nav>
        </header>
    );
};

export default Nav;
