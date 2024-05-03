import { useEffect, useState, useRef } from "react"

let RefUse = () => {

    const [name, setName] = useState("")
    const prevName = useRef("")

    useEffect(() => {
        prevName.current = name
    }, [name])

    return (
        <div>
            <h1>RefUse</h1>
            <input value={name} type="text" onChange={e => setName(e.target.value)} />
            <p>my name is {name} and it use to be {prevName.current}</p>
        </div>
    )
}
export default RefUse