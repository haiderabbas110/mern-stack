import { useState } from "react"

let Form = () => {
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        passwrod:''
    });

    const handleChange = (e) => {
       
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    const formHandler = (e) => {
        e.preventDefault();

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        };


        fetch('http://localhost:8000/register', options)
            .then(response => {
                if (!response.ok) {
                    const err = 'Network response was not ok';
                    setError(err)
                    throw new Error(err);
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => console.error(error));

    }

    return (
        <form action="">
            <label>
                First Name:
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
            </label>
            <br />
            <button onClick={formHandler}>Submit</button>
            <span>{ error && error}</span>
        </form>
    )
}

export default Form;