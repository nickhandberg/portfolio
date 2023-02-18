import { distance } from "@popmotion/popcorn";
import { motion, useMotionValue, useSpring } from "framer-motion";
import * as React from "react";
import { useEffect, useState } from "react";
import "./skills.css";

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

const gap = 5;

const Bubble = ({ active, setActive, colIndex, rowIndex, x, y, size }) => {
    const isDragging = colIndex === active.col && rowIndex === active.row;
    const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
    const d = distance(
        { x: active.col, y: active.row },
        { x: colIndex, y: rowIndex }
    );
    const springConfig = {
        stiffness: Math.max(700 - d * 120, 0),
        damping: 20 + d * 5,
    };
    const dx = useSpring(x, springConfig);
    const dy = useSpring(y, springConfig);

    return (
        <motion.div
            className="bubble"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
            dragElastic={0.9}
            onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
            style={{
                background: `hsla(calc(var(--base-hue) + ${diagonalIndex}), 80%, 60%, 1)`,
                width: size,
                height: size,
                top: rowIndex * (size + gap),
                left: colIndex * (size + gap),
                position: "absolute",
                borderRadius: "50%",
                cursor: "pointer",
                x: isDragging ? x : dx,
                y: isDragging ? y : dy,
                zIndex: isDragging ? 1 : 0,
            }}
        />
    );
};

const BubbleGrid = () => {
    const [active, setActive] = useState({ row: null, col: null });
    const x = useMotionValue(0);
    const y = useMotionValue(0);

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
                                x={x}
                                y={y}
                                active={active}
                                setActive={setActive}
                                rowIndex={rowIndex}
                                colIndex={colIndex}
                                key={rowIndex + colIndex}
                                size={size}
                            />
                        ))
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default BubbleGrid;
