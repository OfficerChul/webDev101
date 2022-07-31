import React, { useState } from 'react';
import './Temp.css';

export default function Temp() {

    const [index, setIndex] = useState("");
    let [num, setNum] = useState(1);

    const addNav = (e) => {
        setNum(num += 1);
        if (num % 2 === 0) {
            setIndex("index");
            return;
        }
        setIndex("about");

        console.log(index);
    }

    return (
        <div>
            <button onClick={addNav}>{index}</button>
        </div>
    )
}
