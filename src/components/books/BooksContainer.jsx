import React from 'react';
import Books from "./Books";
import {connect} from "react-redux";
import {showAddBookPopupAC} from "../../redux/booksReducer";



const mapStateToProps = (state) => {
    debugger;
    return{
        booksPage: state.booksPage
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddBookBtnClick:() => {
            dispatch(showAddBookPopupAC())
        }

    }

}

let BooksContainer = connect(mapStateToProps, mapDispatchToProps)(Books)
export default BooksContainer;

