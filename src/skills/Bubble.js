import { motion } from "framer-motion";
import * as React from "react";
import { useEffect, useState } from "react";
import { importAll } from "../utils/utils";
import "./skills.css";

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

let grid = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
];

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
}

const gap = 10;

const Bubble = ({ colIndex, rowIndex, size, image, name }) => {
    return (
        <motion.div
            className="bubble"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{
                once: false,
                amount: 1,
                margin: "-100px 0px -100px 0px",
            }}
            transition={{
                delay: 0,
                duration: 0.5,
                type: "ease",
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
            <p className="skillName">{name}</p>
        </motion.div>
    );
};

const BubbleGrid = () => {
    const [size, setSize] = useState(Math.min(getWindowDimensions() / 4, 150));
    const [grid, setGrid] = useState(
        size < 150
            ? [
                  [0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8],
                  [9, 10, 11],
                  [12, 13, 14],
              ]
            : [
                  [0, 1, 2, 3, 4],
                  [5, 6, 7, 8, 9],
                  [10, 11, 12, 13, 14],
              ]
    );

    useEffect(() => {
        function handleResize() {
            setSize(Math.min(getWindowDimensions() / 6, 150));
            if (size < 150) {
                setGrid([
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [9, 10, 11],
                    [12, 13, 14],
                ]);
            } else {
                setGrid([
                    [0, 1, 2, 3, 4],
                    [5, 6, 7, 8, 9],
                    [10, 11, 12, 13, 14],
                ]);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [size]);

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
                        width: (size + gap) * grid[0].length - gap,
                        height: (size + gap) * grid.length - gap,
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
