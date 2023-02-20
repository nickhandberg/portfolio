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

    let prevScrollpos = 0;
    const handleScroll = () => {
        let pages = document.getElementById("scrollCatch");
        let currentScrollPos = pages.scrollTop;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
            document.getElementById("menu").style.top = "20px";
        } else {
            document.getElementById("navbar").style.top = "-80px";
            document.getElementById("menu").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    };

    const menuClickHandler = () => {
        setInMenu(!inMenu);
        setClicked(true);
    };

    return (
        <div className="App">
            <AnimatePresence>
                {inMenu && <Menu menuClickHandler={menuClickHandler} />}
            </AnimatePresence>
            <div id="scrollCatch" className="pages" onScroll={handleScroll}>
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
