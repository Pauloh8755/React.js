import React from "react";

export default ({min,max})=>{
    const radomNumber = Math.random() * (max-min) + min
    return (
        <div>
            <h1>Random: {Math.round(radomNumber)}</h1>
        </div>
    )
}