import { useState } from "react"

export default function LikeButton() {
    const [count, setCount] = useState(0)
    return (
        <button style={{ margin: "12px" }} onClick={() => setCount(prevCount => prevCount + 1)}>{count}</button>
    )
}