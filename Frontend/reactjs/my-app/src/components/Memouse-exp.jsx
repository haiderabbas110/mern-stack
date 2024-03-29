import React, { useState, useMemo } from 'react';

const MemouseExp = () => {
  const [count, setCount] = useState(0);

  // Without useMemo
  const expensiveFunction = () => {
    console.log("Executing expensive function...");
    // Simulating an expensive computation
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  };

  // With useMemo
  const memoizedValue = useMemo(() => {
    return expensiveFunction();
  }, [count]);

  // const memoizedValue = expensiveFunction();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Memoized Value: {memoizedValue}</p>
    </div>
  );
};

export default MemouseExp;