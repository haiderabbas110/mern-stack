import { useState } from "react"

let Form = () => {
    const [firstname, setFirstname] = useState("");

    const formHandler = (event) => {   
        event.preventDefault();
        console.log(firstname);
    }

    return (
        <form action="">
            <input type="text" value={firstname} onChange={(event) => setFirstname(event.target.value)} />
            <button onClick={formHandler} >Submit</button>
        </form>
    )
}

export default Form;