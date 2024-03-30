import { Outlet } from 'react-router-dom';
let Main  = () =>{
    return(
       <>
        <main className='mymain'>
          <Outlet />
        </main>
       </>
    )
}
export default Main;