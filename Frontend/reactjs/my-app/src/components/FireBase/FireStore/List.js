import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../../../config/fb-conf';

let List = () => {

    const [data, setData] = useState([]);

    let showData = async () => {
        const querySnapshot = await getDocs(collection(db, "books"));
        const books = [];
        querySnapshot.forEach((doc) => {
            // Assuming the data structure includes a property named `formData`
            console.log(doc.data()); // Debugging
            books.push(doc.data().formData); // Modify according to your data structure
        });
        setData(books);
    };
    useEffect(() => {
        showData();
    }, []);

    return (
        <>
            <h1>FireStore Database </h1>
            <h2>List Data</h2>

            <button onClick={showData}>Load Books</button>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.booktitle} - {item.bookprice}</li> // Modify based on your actual data fields
                ))}
            </ul>



        </>
    );
};

export default List;
