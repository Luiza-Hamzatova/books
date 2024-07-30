import Book from "./book/book";

const Books = () => {
  const Books = [
    {
      img: "./img/img(1).jpg",
      nameBook: "Гордость и предубеждение",
      autor: "Остен Дж.",
      price: "598р",
    },
    {
      img: "./img/img(2).jpg",
      nameBook: "Маленькая хозяйка большего дома",
      autor: "Джек Лондон",
      price: "600р",
    },
    {
      img: "./img/img(3).jpg",
      nameBook: "Приключение Тома Сойера",
      autor: "Марк Твен",
      price: "700р",
    },
  ];

  return (
    <div className="wrapper">
      <div className="products">
        {Books.map(({ img, nameBook, autor, price }) => (
          <Book img={img} nameBook={nameBook} autor={autor} price={price} />
        ))}
      </div>
    </div>
  );
};
export default Books;
