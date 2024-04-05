import { useState } from "react"

let Callbackuse  = () => {
    const [count, setCount] = useState(0);

    let handleClick1 = () => {
        setCount(count + 1);
    }
    let handleClick2 = () => {
        setCount(count + 1);
    }
    return (
        
        <>
            <p>Handle Click 1 {count}</p>
            <button onClick={handleClick1}>Click Me 1</button>
            <button onClick={handleClick2}>Click Me 2</button>

            <List getItems={count}/>
        </>
    )
}
export default Callbackuse

const List = (list) => {
    console.log(list)
    return (
        <>
            <h1>List</h1>
            <ul>
                <li>lorenma sldfka dfjasldfjklas df</li>
                <li>lorenma sldfka dfjasldfjklas df</li>
                <li>lorenma sldfka dfjasldfjklas df</li>
            </ul>
        </>
    )
}