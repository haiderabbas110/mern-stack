import React, { useState, useCallback } from 'react';

const ListWithCallback = () => {
  const [items, setItems] = useState([]);

  const addItem = useCallback(() => {
    setItems(prevItems => {
      const newItem = { id: prevItems.length + 1, name: `Item ${prevItems.length + 1}` };
      return [...prevItems, newItem];
    });
  }, [setItems]);

  console.log('ListWithCallback rendered');

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListWithCallback;
