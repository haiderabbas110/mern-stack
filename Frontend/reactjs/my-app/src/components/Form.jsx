import { useState } from "react"

let Form = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
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
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => console.error(error));

    }

    return (
        <form action="" method="POST">
            <label>
                ID:
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
            </label>
            <br />
            <label>
                Name:
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
            </label>
            <br />
            <button onClick={formHandler} type="submit">Submit</button>
        </form>
    )
}

export default Form;