import { useContext } from "react";
import {counterContext} from "../context/context"

let Home = () => {
    const counter = useContext(counterContext)
    return (
        <div>
            <h1>Home {counter}</h1>
        </div>
    )
}

export default Home;