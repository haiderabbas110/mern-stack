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
]
let Header = () => {
    return (
        <header>
            <ul>
                {
                    menubar.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </header>
    )
}


export default Header;