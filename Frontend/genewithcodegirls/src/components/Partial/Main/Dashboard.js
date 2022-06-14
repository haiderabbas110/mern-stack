// import { Link } from "react-router-dom";
import React from "react";

const Dashboard = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    return (
        <>
            <h1>Dashboard</h1>
            <ul>
                {listItems}
            </ul>
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        </>


    )
}

export default Dashboard;