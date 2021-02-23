import React from 'react';
import style from './Book.module.css';
import book from '../../../img/book.png';



let BooksItem = (props) => {

    let onDeleteBtnClick = () => {
        alert('Deleted');
    }

    let onBookImgClick = () => {
        alert('Book clicked');
    }

    return (
        <div className={style.bookContainer}>
            <div onClick={onBookImgClick} className={style.bookImage}>
                <img  src={book} alt={'book'}/>
                
            </div>
            <div className={style.info}>
                <p>name: <span>{props.name}</span></p>
                <p>category: <span>{props.category}</span></p>
                <p>price: $<span>{props.price}</span></p>
                <p>description: <span>{props.description}</span></p>
            </div>
            <div className={style.deleteBtn}>
                <button onClick={onDeleteBtnClick}>delete</button>
            </div>
        </div>
    )
}

export default BooksItem;