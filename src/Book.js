import React from 'react';

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

  export default Book