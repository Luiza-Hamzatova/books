import { useState } from "react";
import Book from "./book/book";

const Books = () => {
  
  return (
    <div className="wrapper">
      <div className="products">
        {setBooks.map(({ img, nameBook, autor, price, id }) => (
          <Book
            img={img}
            nameBook={nameBook}
            autor={autor}
            price={price}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
