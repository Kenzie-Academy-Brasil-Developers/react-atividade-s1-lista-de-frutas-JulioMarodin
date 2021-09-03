import './App.css';
import { useState } from 'react';
import FruitList from './Components/FruitList';
import { GiPriceTag } from 'react-icons/gi';

function App() {
  const [fruits, setFruits] = useState([
    { name: 'banana', color: 'yellow', price: 2 },
    { name: 'cherry', color: 'red', price: 3 },
    { name: 'strawberry', color: 'red', price: 4 },
  ]);

  const filterRedFruits = fruits.filter((fruit) => {
    return fruit.color === 'red';
  });

  const handleFruits = () => {
    setFruits(filterRedFruits);
  };

  const totalPrice = fruits.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <GiPriceTag />
          {totalPrice}
        </div>
        <FruitList fruits={fruits} />
        <button className="priceButton" onClick={handleFruits}>
          Red Fruits Only
        </button>
      </header>
    </div>
  );
}

export default App;
