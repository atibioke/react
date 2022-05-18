import React from "react";
import reactDOM from "react-dom";
import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />

    </section>
  );
}

const Book = () => {
  const title =  "Book Image"
const author = "John Mason"
  return (
    <article className="book">
     
      <Image></Image>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1"
      alt=""
    />
  );
};



reactDOM.render(<BookList />, document.getElementById("root"));














