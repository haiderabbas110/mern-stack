import { useEffect, useState } from "react"

let UserFetch = ({ userID }) => {
    let [userList, setUserList] = useState();

    let list = () => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${userID}`)
            .then(response => response.json())
            .then(json => setUserList(json))

    }

    useEffect(() => {
        list()
    })



    return (
        <div>
            {userList && userList.title}
        </div>
    )
}

export default UserFetch;