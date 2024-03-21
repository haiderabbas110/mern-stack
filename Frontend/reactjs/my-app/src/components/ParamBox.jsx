import {useParams} from "react-router-dom"

let ParamBox = () =>{
    const { id } = useParams()
    return(
        <> <h1>Param box with unique id {id}</h1> </>
    )
}

export default ParamBox;