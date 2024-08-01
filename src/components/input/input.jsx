import setBooks from "../arrayBooks/arrayBooks";

const Input = () => {
  const [value, setValue] = useState("");
  const filtered = setBooks.filter((book) => {
    return setBooks.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={filtered}> поиск</button>
    </div>
  );
};
export default Input;
