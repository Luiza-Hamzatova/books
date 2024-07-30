const Input = () => {
  const search = (event) => {};
  return (
    <div className="wrapper">
      <input placeholder="Поиск"></input>
      <button onClick={search}>Поиск</button>
    </div>
  );
};
export default Input;
