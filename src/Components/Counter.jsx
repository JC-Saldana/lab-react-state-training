import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div style={{ display: "flex", gap: 4, margin: "12px" }}>
            <button>{count}</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        </div>
    )
}