import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../../config/fb-conf';

let Add = () => {
    let addDataIntoDB = async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }

    return (
        <>
            <h1>Add Data</h1>
            <button onClick={addDataIntoDB}>Add Data</button>
        </>
    )
}
export default Add