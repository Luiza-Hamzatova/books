const Book = ({ img, nameBook, autor, price }) => {
  return (
    <div className="product">
      <img src={img} alt="book" className="product__image" />
      <h3 className="product__tittle">{nameBook}</h3>
      <h3 className="product__tittle">{autor}</h3>
      <p className="product__description">{price}р</p>
    </div>
  );
};
 export default Book