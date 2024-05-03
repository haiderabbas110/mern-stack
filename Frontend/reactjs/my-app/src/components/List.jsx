import { memo } from "react";

const List = ({ list, addList }) => {
    console.log("List Render");
    return (
        <>
            <h1>List</h1>
            <ul>
                {
                    list.map((todo, index) => {
                        return <li key={index}>{todo}</li>
                    })
                }
            </ul>
            <button onClick={addList}>Add Me</button>
        </>
    )
}
export default memo(List);