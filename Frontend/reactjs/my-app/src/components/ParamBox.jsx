import { useEffect } from "react";
import {useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";


let ParamBox = () =>{
    const navigate = useNavigate();

    const handleClick = () =>{
        if(true){
            navigate("/usememo")
        }
    }
    const { id } = useParams()
    return(
        <> <h1>Param box with unique id {id}</h1> 
            <button onClick={()=>handleClick()}>CLick me</button>
        </>
    )
}

export default ParamBox;