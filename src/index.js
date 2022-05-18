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
  return (
    <article className="book">
     
      <Image></Image>
      <Title/>
      <Author/>
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

const Title = () =>  <h1>Book Image</h1>
const Author = () =>  <h4>John Mason</h4>

reactDOM.render(<BookList />, document.getElementById("root"));














