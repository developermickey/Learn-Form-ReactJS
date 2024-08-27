import { useEffect, useState } from "react"

export default function Counter() {

    let [count, setCount] = useState(0);

    let inccCount = () => {
        setCount(currCount => currCount + 1);
    }

    useEffect(function printSideEffect() {
        console.log("side effect");
    })
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inccCount}>+1</button>
        </div>
    )
}