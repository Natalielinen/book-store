import React from 'react';
import style from './Book.module.css';
import book from '../../../img/book.png';



let Book = () => {


    return (
        <div className={style.bookContainer}>
            <div className={style.bookImage}>
                <img  src={book} alt={'book'}/>
                
            </div>
            <div className={style.info}>
                <p>name: <span>Name</span></p>
                <p>category: <span>Category</span></p>
                <p>price: $<span>10</span></p>
                <p>description: <span>description</span></p>
            </div>
            <div className={style.deleteBtn}>
                <button>delete</button>
            </div>
        </div>
    )
}

export default Book;