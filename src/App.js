import Books from "./components/books/books";
import Input from "./components/input/input";
import Sorting from "./components/sorting/sorting";

const App = () => {
  return (
    <div className="wrapper">
      <Input />
      <Sorting />
      <Books />
    </div>
  );
};

export default App;
