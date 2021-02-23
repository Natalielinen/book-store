import React from 'react';
import style from './Books.module.css'
import BooksItem from "./book/BooksItem";

const Books = (props) => {


    let booksElement = props.booksPage.booksData.map(book =>
        <BooksItem name={book.name} category={book.category} price={book.price} description={book.description}
                   key={book.id}/>)


    return (
        <div>
            <button onClick={props.onAddBookBtnClick} className={style.btn}>Add book</button>
            {booksElement}
        </div>
    )
}

export default Books;

