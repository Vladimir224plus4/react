import { useState } from "react";

const ProductItem = ({ id, name, price, count, onIncrement, onDecrement, onDelete }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Count: {count}</p>
      <button onClick={() => onIncrement(id)}>+</button>
      <button onClick={() => onDecrement(id)}>-</button>
      <div onDoubleClick={() => onDelete(id)}>Double-click to delete</div>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
  ]);

  const handleIncrement = (id) => {
    setData(prevData => {
      return prevData.map(item => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    });
  };

  const handleDecrement = (id) => {
    setData(prevData => {
      return prevData.map(item => {
        if (item.id === id && item.count > 0) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
    });
  };

  const handleDelete = (id) => {
    setData(prevData => prevData.filter(item => item.id !== id));
  };

  const handleAddProduct = () => {
    const name = prompt('Enter name:');
    const price = +prompt('Enter price:');
    const count = +prompt('Enter count:');
    const id = data.length + 1;
    const newProduct = { id, name, price, count };
    setData(prevData => [...prevData, newProduct]);
  };

  return (
    <div>
      <button onClick={handleAddProduct}>Add Product</button>
      {data.map(product => (
        <ProductItem
          key={product.id}
          {...product}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ProductItem;