import Uselelo from '../hook/useLelo'
let UserFetch = () => {
    const userList = Uselelo(`https://jsonplaceholder.typicode.com/todos/`)
    const oneuser = Uselelo(`https://jsonplaceholder.typicode.com/todos/1`)

    return (

        <>
            {oneuser && oneuser.title}
            <ul>
                {
                    userList && userList.map((user, id) => {
                        return (
                            <li key={id}>{user.title}</li>
                        )

                    })
                }
            </ul>
        </>
    )
}

export default UserFetch;