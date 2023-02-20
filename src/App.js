import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import About from "./about/About";
import "./App.css";
import Contact from "./contact/Contact";
import Education from "./education/Education";
import Home from "./home/Home";
import Menu from "./nav/Menu";
import Nav from "./nav/Nav";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";

function App() {
    const [inMenu, setInMenu] = useState(false);
    const [clicked, setClicked] = useState(false);

    const menuClickHandler = () => {
        setInMenu(!inMenu);
        setClicked(true);
    };

    return (
        <div className="App">
            <AnimatePresence>
                {inMenu && <Menu menuClickHandler={menuClickHandler} />}
            </AnimatePresence>
            <div className="pages">
                <Nav
                    inMenu={inMenu}
                    clicked={clicked}
                    menuClickHandler={menuClickHandler}
                />
                <Home />
                <About />
                <Education />
                <Skills />
                <Portfolio />
                <Contact />
            </div>
        </div>
    );
}

export default App;
