import React from "react";
import reactDOM from "react-dom";
import "./index.css";
import {books} from "./books"


function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;


  const clickHandler = (e) => {
    alert(title)
  }

  const beforeClick = () => {
    console.log(title);
  }

  return (
    <article className="book" onMouseOver={beforeClick}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button onClick={clickHandler}>
        Click here
      </button>
    </article>
  );
};

reactDOM.render(<BookList />, document.getElementById("root"));
