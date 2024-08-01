const Sorting = () => {
  const ascending = ({ setBooks }) => {
    setBooksBooks.sort((a, b) => a.price - b.price);
  };
  const descending = ({ setBooks }) => {
    setBooks.sort((a, b) => b.price - a.price);
  };
  return (
    <div className="sorting">
      <button onClick={ascending}>Цена ↑ </button>
      <button onClick={descending}>Цена ↓ </button>
    </div>
  );
};
export default Sorting;
