import React, { useRef, useEffect } from "react";
import "./Pad.css";
import sounds from "./sounds";

const Pad = (props) => {
    const audioRef = useRef(null);

    const playSound = (e) => {
        const audioElement = audioRef.current;
        audioElement.src = e.target.dataset.src;
        audioElement.play();
        props.updateDisplay(e.target.dataset.name);
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            const audioElement = audioRef.current;
            const sound = sounds.find((s) => s.id === e.key.toUpperCase());
            if (!sound) return;
            audioElement.src = sound.src;
            audioElement.play();
            props.updateDisplay(sound.name);
        };
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, []);

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
