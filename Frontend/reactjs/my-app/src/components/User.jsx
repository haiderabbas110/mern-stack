let Users = (prop) => {
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {
                    prop.users.map((user,id) => {
                        return (
                            <>
                                <li key={id}> {user.name}
                                    <button onClick={() => prop.handDelete(user.id)}> Delete </button>
                                </li>

                            </>
                        )
                    })

                }
            </ul>
        </div>
    )
}
export default Users;