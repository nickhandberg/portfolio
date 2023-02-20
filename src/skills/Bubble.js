import { motion } from "framer-motion";
import * as React from "react";
import { useEffect, useState } from "react";
import "./skills.css";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace("./", "")] = r(item);
    });
    return images;
}

const images = importAll(
    require.context("../graphic/skill-icons/", false, /\.(png|jpe?g|svg)$/)
);

// skill names list
const names = [
    "HTML5",
    "CSS",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "Express",
    "ReactJS",
    "NodeJS",
    "Java",
    "Python",
    "PHP",
    "Android",
    "MySQL",
    "Doctrine",
    "Docker",
    "Tailwind",
];

const grid = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
];

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
}

const gap = 8;

const Bubble = ({ colIndex, rowIndex, size, image, name }) => {
    return (
        <motion.div
            className="bubble"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
                delay: 0.2,
                duration: 1,
            }}
            style={{
                width: size,
                height: size,
                top: rowIndex * (size + gap),
                left: colIndex * (size + gap),
                position: "absolute",
                borderRadius: "38%",
            }}
        >
            <img
                className="iconImage"
                src={image}
                alt="icon"
                style={{ height: size - 0.2 * size, width: size - 0.2 * size }}
            ></img>
            <p className="skillName" style={{ bottom: -size / 4 }}>
                {name}
            </p>
        </motion.div>
    );
};

const BubbleGrid = () => {
    const [size, setSize] = useState(Math.min(getWindowDimensions() / 6, 150));

    useEffect(() => {
        function handleResize() {
            setSize(Math.min(getWindowDimensions() / 6, 150));
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <motion.div
                animate={{ "--base-hue": 360 }}
                initial={{ "--base-hue": 0 }}
                transition={{ duration: 10, loop: Infinity, ease: "linear" }}
            >
                <motion.div
                    className="bubbleContainer"
                    style={{
                        display: "flex",
                        width: (size + gap) * 4 - gap,
                        height: (size + gap) * 4 - gap,
                        perspective: 500,
                    }}
                >
                    {grid.map((row, rowIndex) =>
                        row.map((_item, colIndex) => (
                            <Bubble
                                rowIndex={rowIndex}
                                colIndex={colIndex}
                                key={rowIndex + colIndex}
                                size={size}
                                image={Object.values(images)[_item]}
                                name={names[_item]}
                            />
                        ))
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default BubbleGrid;
