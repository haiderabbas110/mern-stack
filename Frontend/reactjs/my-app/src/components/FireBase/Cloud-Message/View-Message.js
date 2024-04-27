import { useEffect } from "react"
import  GenerateToken  from "./GenerateToken"
import { onMessage } from "firebase/messaging"
import { messaging } from '../../../config/fb-conf';
let ViewMessage = () => {


    useEffect(() => {
        GenerateToken()
        onMessage(messaging, (payload) => {
            console.log(payload)
        })
    }, [])
    return (
        <div>
            <h1>View Message</h1>
    </div>
    )
}

export default ViewMessage