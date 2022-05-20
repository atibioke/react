import React from "react";
import reactDOM from "react-dom";
import "./index.css";

const books = [
  {
    id:1,
    title: "Book Image",
    author: "John Mason",
    img: "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1",
  },

  {
    id:2,
    title: "Mind Book",
    author: "Mark Mason",
    img: "https://media.istockphoto.com/photos/the-mind-can-never-get-enough-books-picture-id1182489137?s=612x612",
  },
  {
    id:3,
    title: "Old Book",
    author: "Philip Mason",
    img: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg",
  },
];

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
