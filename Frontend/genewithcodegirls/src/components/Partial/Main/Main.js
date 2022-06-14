// import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import React from "react";

const Main = () => {
    return (
        <main>
            {/* <h1>Main</h1> */}
            <Outlet />
        </main>

    )
}

export default Main;