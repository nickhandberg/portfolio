import { motion } from "framer-motion";
import { React, useState } from "react";

const GraphItem = ({ title, location, date, details }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <motion.div
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
            className="graphItem"
            onClick={() => setShowDetails(!showDetails)}
        >
            <h3>{title}</h3>
            <p>{location}</p>
            {showDetails && <p className="details">{date}</p>}
            {showDetails && <p className="details">{details}</p>}

            <div className="chevron">
                <box-icon
                    name={showDetails ? "chevron-up" : "chevron-down"}
                    size="md"
                    color="rgba(232,232,232,1)"
                ></box-icon>
            </div>
        </motion.div>
    );
};

export default GraphItem;
