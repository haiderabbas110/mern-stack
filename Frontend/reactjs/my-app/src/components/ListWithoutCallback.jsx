import React, { useState } from 'react';

const ListWithoutCallback = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems(prevItems => {
      const newItem = { id: prevItems.length + 1, name: `Item ${prevItems.length + 1}` };
      return [...prevItems, newItem];
    });
  };

  console.log('ListWithoutCallback rendered');

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

export default ListWithoutCallback;
