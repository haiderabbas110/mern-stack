import { getToken } from "firebase/messaging";
import { messaging } from '../../../config/fb-conf';

let GenerateToken = () => {

    const keypair = "BOo6g1Lq_AEVQLRb6ZCM075eYi2CrTrp5l-VNQGPTpDTha9p_Hi0JFsNzwqCHusVzJcSuZUyaoLHWPCrrmjD2Pg"
    async function requestPermission() {
        const permission = await Notification.requestPermission()
        console.log(permission);

        if (permission == "granted") {
            const token = await getToken(messaging, { vapidKey: keypair });
            console.log(token);

        }




    }

    requestPermission()

}

export default GenerateToken;