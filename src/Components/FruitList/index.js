import './style.css';

function FruitList({ fruits }) {
  return (
    <ul className="fruitsList">
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit.name}</li>
      ))}
    </ul>
  );
}

export default FruitList;
