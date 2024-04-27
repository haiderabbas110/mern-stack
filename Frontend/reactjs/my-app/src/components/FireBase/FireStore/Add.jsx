import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from '../../../config/fb-conf';

let Add = () => {

    const [formData, setFormData] = useState({
        booktitle: '',
        bookprice: '',
    });

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    let addDataIntoDB = async (e) => {
        e.preventDefault();
        // const postData = {
        //     formData
        // };

        try {
            const docRef = await addDoc(collection(db, "books"), {
                formData
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }

    return (


        <>
            <h1>FireStore Database </h1>
            <h2>Add Data</h2>

            <form>
                <input type="text" name='booktitle' placeholder='Enter Book Title' onChange={handleChange} />
                <input type="text" name='bookprice' placeholder='Enter Book Price' onChange={handleChange} />
                <button onClick={addDataIntoDB}>Add Data</button>
            </form>

        </>
    )
}
export default Add