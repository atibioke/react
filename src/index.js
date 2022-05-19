import React from "react";
import reactDOM from "react-dom";
import './index.css'


const firstBook = {
  title: "Book Image",
  author: "John Mason",
  img : "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1"
}

const secondBook ={
  title: "Mind Book",
  author: "Mark Mason",
  img: "https://media.istockphoto.com/photos/the-mind-can-never-get-enough-books-picture-id1182489137?s=612x612"
}



function BookList() {
  return (
    <section className="booklist">
      <Book title={firstBook.title} author={firstBook.author} img={firstBook.img}/>
      <Book title={secondBook.title} author={secondBook.author} img={secondBook.img}/>
    </section>
  );
}

const Book = (props) => {

  const { img, title, author } = props; 
 
  return (
    <article className="book">
     
     <img
      src= {img}
      alt=""
    />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};





reactDOM.render(<BookList />, document.getElementById("root"));














