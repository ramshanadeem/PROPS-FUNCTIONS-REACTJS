import React, { useState } from 'react';

/* function Gate({ isOpen }) {
    return (
        <div >
            {isOpen == 'true' ? "Open" : "Closed"}
            {isOpen ? "open" : "closed"}
        </div >
    );
} */
function Gate() {
    const [islit, setIslit] = useState(true);
    let [count, setCount] = useState(0);
    let [roomTemperature, setRoomTemperature] = useState(72);
    return (
        <div >
            <div className={` ${islit ? "lit" : "dark"}`} >
                <button onClick={() => setIslit(!islit)} >on{islit} </button>

                <button onClick={() => setIslit(!islit)}>off{islit}</button>
                <button onClick={() => setRoomTemperature(roomTemperature + 1)}>+</button>
                <button onClick={() => setRoomTemperature(roomTemperature - 1)}>-</button>
                <p>{roomTemperature}</p>
            </div>



            {/* counting in ternary operator */}
            {/*  {count ? (<button onClick={() => setCount(count + 1)}>counting</button>) : 'dec'}
            <p>{count}</p> */}

            {/* counting in toggle button */}
            {/* <button onClick={() => setCount(count + 1)}> counting2 </button>
            <p>{count}</p> */}

        </div>
    );
}


export default Gate;