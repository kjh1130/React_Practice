import type {SyntheticEvent} from "react";

export default function StopPropagation() {
    const onDivClick = (e: SyntheticEvent) => console.log('click event bubles on <div>')
    const onButtonClick = (e: SyntheticEvent) => {
        console.log('mouse click occurs on <button> on call stopPropagation')
        e.stopPropagation()
    }
    return (
        <div onClick = {onDivClick}>
            <p>StopPropagation</p>
            <button onClick={onButtonClick}>Click Me and stop event propagation</button>
        </div>
    )
}