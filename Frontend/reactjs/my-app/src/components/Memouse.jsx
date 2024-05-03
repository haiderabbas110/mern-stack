import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

let Memouse = () => {
    const [count, setCount] = useState(0);
  
    const noreRender = useMemo(() => {
        console.log("noreRender")
        return <p>No render {count}</p>
    },[])
  
    
    const handleIncrement = () => {
      setCount(prevCount => prevCount + 1);
    };
  
    return (
      <div>

        {noreRender}
       
        <p>Count: {count}</p>

        <button onClick={handleIncrement}>Click Me</button>
      </div>
    );
}
export default Memouse;