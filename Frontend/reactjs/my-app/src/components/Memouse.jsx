import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

let Memouse = () => {
    const [count, setCount] = useState(0);

    // useEffect to log the count whenever it changes
    useEffect(() => {
      console.log("useEffect: Count changed to", count);
    }, [count]);
  
    // useMemo to memoize the square value
    const square = useMemo(() => {
      console.log("useMemo: Computing square...");
      return count * count;
    }, [count]);
  
    const handleIncrement = () => {
      setCount(prevCount => prevCount + 1);
    };
  
    return (
      <div>
        <button onClick={handleIncrement}>Increment Count</button>
        <p>Count: {count}</p>
        <p>Square: {square}</p>
      </div>
    );
}
export default Memouse;