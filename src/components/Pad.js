import React, { useRef } from "react";
import "./Pad.css";
import sounds from "./sounds";

const Pad = (props) => {
    const audioRef = useRef(null);

    const playSound = (e) => {
        audioRef.current.src = e.target.dataset.src;
        audioRef.current.play();
        props.updateDisplay(e.target.dataset.name);
    };

    return (
        <div className="pad-bank">
            <audio ref={audioRef} id="audio-element" />
            {sounds.map((sound) => (
                <div
                    className="drum-pad"
                    onClick={playSound}
                    key={sound.id}
                    data-src={sound.src}
                    data-name={sound.name}
                >
                    {sound.id}
                </div>
            ))}
        </div>
    );
};


export default Pad;
