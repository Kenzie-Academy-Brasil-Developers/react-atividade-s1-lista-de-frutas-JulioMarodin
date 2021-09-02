function FruitList({ fruits }) {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit.name}</li>
      ))}
    </ul>
  );
}

export default FruitList;
