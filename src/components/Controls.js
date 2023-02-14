import React, { useState } from "react";
import "./Controls.css";

const Controls = (props) => {
    const [isOn, setIsOn] = useState(false);

    const handleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="controls-container">
            <div id="switch-container">
            {/* <p>Power</p>
                <label className="switch">
                    <input type="checkbox" onClick={handleSwitch} />
                    <span className="slider round"></span>
                </label> */}
            </div>
            <div id="display">
                {props.display}
            </div>
        </div>
    );
};

export default Controls;
