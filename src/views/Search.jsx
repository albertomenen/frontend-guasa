import React, { useState, useRef, useEffect } from "react";
import "../styles.scss";
import "../App.css";

export default function SearchButton() {
    const [inputValue, setInputValue] = useState('');
    const [offsets, setOffsets] = useState({ offsetLeft: "0px", offsetLeftScale: "0px" });
    const spanRef = useRef();

    const handleInputChange = (event) => {
        const { value } = event.target;
        setInputValue(value);
        setOffsets({
            offsetLeft: `${spanRef.current.offsetWidth + 3}px`,
            offsetLeftScale: `${spanRef.current.offsetWidth + 19}px`,
        });
    };

    useEffect(() => {
        setOffsets({
            offsetLeft: `${spanRef.current.offsetWidth + 3}px`,
            offsetLeftScale: `${spanRef.current.offsetWidth + 19}px`,
        });
    }, []);

    return (
        <div className="search-body" style={{ '--offsetLeft': offsets.offsetLeft, '--offsetLeftScale': offsets.offsetLeftScale }}>
            <div className="inputAnimate">
                <input value={inputValue} onChange={handleInputChange} />
                <span ref={spanRef} style={{ visibility: 'hidden' }}>{inputValue}</span>
                <div>
                </div>
                <em></em>
            </div>
            <a className="dribbble" href="https://dribbble.com/shots/5341172-Text-field-animation" target="_blank">
                <img src="https://dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png" alt="" />
            </a>
        </div>
    )
}
