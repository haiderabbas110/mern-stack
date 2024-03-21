import { useState } from "react"

let Form = () => {
    const [firstname, setFirstname] = useState("");
    return (
        <form action="">
            <input type="text" value={firstname} onChange={(event) => setFirstname(event.target.value)} />
        </form>
    )
}

export default Form;