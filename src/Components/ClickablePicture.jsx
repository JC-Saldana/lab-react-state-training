import coolMaxence from "../assets/images/maxence-glasses.png"
import maxence from "../assets/images/maxence.png"
import { useState } from "react"

export default function ClickablePicture() {
    const [clicked, setClicked] = useState(false)
    return (
        <div style={{ display: "flex", gap: 4, margin: "12px" }}>
            <img
                onClick={() => setClicked(true)}
                style={{ width: "240px" }}
                src={clicked ? coolMaxence : maxence}
                alt="maxence" />
        </div>
    )
}