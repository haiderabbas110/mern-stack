import { NavLink, Link } from 'react-router-dom'

const menubar = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Contact",
        link: "/contact",
    },
    {
        name: "Portfolio",
        link: "/portofolio",
    },
    {
        name: "Login",
        link: "/login",
    },
    {
        name: "Users",
        link: "/users",
    },
    {
        name: "User",
        link: "/users/user1",
    },
    {
        name: "Use Memnu",
        link: "/usememo",
    },
    {
        name: "Params Box",
        link: "/parambox",
    },
    {
        name: "Data Fetch",
        link: "/reuse-hook",
    },
    {
        name: "Use Effect",
        link: "/useeffect",
    },

    {
        name: "Form Contact",
        link: "/form",

    },
]
let Header = () => {
    return (
        <header>
            <ul>
                {

                    menubar.map((item, index) => {
                        return (
                            <li key={index}>
                                {/* <a href={item.link}>{item.name}</a> */}
                                <Link to={item.link} >{item.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </header>
    )
}


export default Header;