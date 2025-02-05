import { useState } from "react"
import diceEmpty from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

const getRandomDice = () => {
    const dices = [dice1, dice2, dice3, dice4, dice5, dice6]
    const randomValue = Math.floor(Math.random() * 5);
    return dices[randomValue]
}

export default function Dice() {

    const [diceImg, setDiceImg] = useState(getRandomDice())
    const throwDice = () => {
        setDiceImg(diceEmpty)
        setTimeout(() => {
            setDiceImg(getRandomDice())
        }, 1000);
    }

    return (
        <div style={{ display: "flex", gap: 4, margin: "12px" }}>
            <img
                onClick={throwDice}
                style={{ width: "240px" }}
                src={diceImg}
                alt="maxence" />
        </div>
    )
}