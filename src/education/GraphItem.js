import { React, useState } from "react";

const GraphItem = ({ title, location, details }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="graphItem" onClick={() => setShowDetails(!showDetails)}>
            <h3>{title}</h3>
            {showDetails && <p>{location}</p>}
            {showDetails && <p className="details">{details}</p>}

            <div className="chevron">
                <box-icon
                    name={showDetails ? "chevron-up" : "chevron-down"}
                    size="md"
                    color="rgba(232,232,232,1)"
                ></box-icon>
            </div>
        </div>
    );
};

export default GraphItem;
