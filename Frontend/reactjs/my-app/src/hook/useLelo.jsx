import { useEffect, useState } from "react"
let Uselelo = (url) => {
    let [userList, setUserList] = useState();

    let list = () => {
        fetch(url)
            .then(response => response.json())
            .then(json => setUserList(json))

    }
    useEffect(() => {
        list()
    }, [])

    return userList;
}

export default Uselelo;