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
        name: "Register",
        link: "/register",
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
        link: "/usememoexp",
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
    {
        name:"Use Callback",
        link:"/usecallback"
    },
    {
        name:"File Upload",
        link:"/uploadimage"
    },
    {
        name:"FireBase RealTime DB",
        link:"/FirebaseRealTimeDB"
    },
    {
        name:"FireBase RealTime List",
        link:"/RealTimeDBList"
    },
    {
        name:"FireStore Database Add",
        link:"/FireStoreDatabaseAdd"
    },
    {
        name:"FireStore Database List",
        link:"/FireStoreDatabaseList"
    }
    ,
    {
        name:"Cloud Messaging",
        link:"/CloudMessage"
    }
]
let Header = () => {
    return (
        <header>
            <ul>
                {

                    menubar.map((item, index) => {
                        return (
                            <li key={index}>
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