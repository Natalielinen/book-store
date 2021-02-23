const SHOW_ADD_BOOK_POPUP = 'SHOW-ADD-BOOK-POPUP';

let initialState = {
    booksData:[
        {
            id: 1,
            name: `Harry Potter and the sorcerer's stone`,
            category: 'Fantasy',
            price: 20,
            description: 'The first part of the books about adventures young wizard',
        },

        {
            id: 2,
            name: 'Jane Eyre',
            category: 'Adventure',
            price: 23,
            description: 'The novel about the life of an orphan girl',
        },
        {
            id: 3,
            name: `Salem's lot`,
            category: 'Horror',
            price: 18,
            description: 'The horror about the little town full on mysteries',
        }
    ]
}

export const booksReducer = (state = initialState, action) => {
    if(action.type === SHOW_ADD_BOOK_POPUP){
        alert(state.booksData[0].name);
    }

    return state;
}

export const showAddBookPopupAC = () => ({type: SHOW_ADD_BOOK_POPUP})