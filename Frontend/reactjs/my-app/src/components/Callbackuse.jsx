import { useCallback } from "react";
import { useState } from "react"
import List from "./List"
let Callbackuse = () => {
    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);

    let handleClick = () => {
        setCount(count + 1);
    }
    let addList = useCallback(() => {
        setList((prev) => [...prev, "New List"])
    }, [list])
    return (

        <>
            <p>Handle Click 1 {count}</p>
            <button onClick={handleClick}>Click Me 1</button>
            <List list={list} addList={addList} />
        </>
    )
}
export default Callbackuse

