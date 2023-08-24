import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const storedBooks = () => {
    const storedBooks = localStorage.getItem('data');
    return storedBooks ? JSON.parse(storedBooks) : [];
};

const initialState = {
    books: storedBooks(),
}

const bookSlice = createSlice({
    name:'books',
    initialState,
    reducers: {
        removeBooks: (state, action) => {
            const bookId = action.payload
            state.books = state.books.filter((book) => book.id !== bookId)
        },

        addBooks: (state, action) => {
            const title = action.payload[0];
            const author = action.payload[1];
            const book = {
                id: uuidv4(),
                title:title,
                author: author,
                category: 'Actions',
                genre: 'Action',
                done: '30%',
                chapter:'10',
            };

            state.books = [...state.books, book];
        },
    },
});

export const {removeBooks, addBooks} = bookSlice.actions;

export default  bookSlice.reducer;  