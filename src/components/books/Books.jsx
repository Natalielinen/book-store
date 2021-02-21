import React from 'react';
import style from './Books.module.css'
import Book from "./book/Book";

const Books = () => {

    return (
        <div>
            <button className={style.btn}>Add book</button>
            <Book />
        </div>
    )
}

export default Books;

