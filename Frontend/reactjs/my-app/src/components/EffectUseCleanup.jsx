import { useEffect, useState } from "react";
import Uselelo from "../hook/useLelo";

let EffectUseCleanup = () => {
  const data = Uselelo("https://jsonplaceholder.typicode.com/todos/");
  const [toggle, setToggle] = useState(false)

  useEffect(()=>{

   let chaltyraho = setInterval(() => {
      console.log("chalty raho")
    }, 3000);

    return () => {
      console.log("i am cleanup")
      clearInterval(chaltyraho)
    }
    
  })
  let Child = () => {
    return(
      <>
        <h1>Child Compo</h1>
      </>
    )
  }

  return (
    <>
      <h1>Use effect with use cleanup</h1>
      <ul>
        {
          // data && data.map((item,i)=>{
          //   return (
          //     <li key={i}>{item.title}</li>
          //   )
          // })
        }

        <button onClick={() => setToggle(!toggle)}>toggle</button>
        {!toggle && <Child />}
      </ul>
    </>

  )
}
export default EffectUseCleanup;