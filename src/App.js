import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import * as THREE from "three";
import About from "./about/About";
import "./App.css";
import Contact from "./contact/Contact";
import Education from "./education/Education";
import Home from "./home/Home";
import Menu from "./nav/Menu";
import Nav from "./nav/Nav";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";
import SceneInit from "./utils/SceneInit";

function App() {
    const [inMenu, setInMenu] = useState(false);
    const [clicked, setClicked] = useState(false);
    const test = new SceneInit("myThreeJsCanvas");

    useEffect(() => {
        test.initialize();
        test.animate();
    }, []);

    let prevScrollpos = 0;
    const handleScroll = () => {
        let pages = document.getElementById("scrollCatch");
        let currentScrollPos = pages.scrollTop;

        if (currentScrollPos === 0) {
            document.getElementById("downArrow").style.display = "block";
        }
        if (prevScrollpos > currentScrollPos) {
            test.mouseY += 0.001;
            document.getElementById("navbar").style.top = "0";
            document.getElementById("menu").style.top = "20px";
        } else if (prevScrollpos === currentScrollPos) {
            test.mouseY = 0;
        } else {
            test.mouseY -= 0.001;
            document.getElementById("navbar").style.top = "-80px";
            document.getElementById("menu").style.top = "-80px";
            document.getElementById("downArrow").style.display = "none";
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
            <canvas id="myThreeJsCanvas"></canvas>
        </div>
    );
}

export default App;
