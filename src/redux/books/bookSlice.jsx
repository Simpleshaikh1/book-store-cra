import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios'

const initialState = {
    books: [],
    isLoading: true,
}

// xqDpmLzvPxikb9A9LRQw

const getUrl =  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xqDpmLzvPxikb9A9LRQw/books";
const addUrl = "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xqDpmLzvPxikb9A9LRQw/books";
const deleteUrl = "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xqDpmLzvPxikb9A9LRQw/books";

export const getBook = createAsyncThunk("books/getBooks", async (api) => {
    try {
        const res = await axios.get(getUrl)
        return res.data
    } catch (error) {
        return api.rejectWithValue("error fetching data")
    }
});

export const addBook = createAsyncThunk(
    "books/addbook",
    async (book, api) =>{
       const bookHash =  {
            item_id:uuidv4(),
            title:book[0],
            author:book[1],
            category:'Action',
        };

        try {
             const res = await axios.post(addUrl, bookHash);
             api.dispatch(getBook());
             return res.data
        } catch (error) {
            return api.rejectWithValue('error fetching data')
        }
    }
);

export const deleteBook = createAsyncThunk('books/deleteBook', async (item_id, api) => {
    try {
        const res = await axios.delete(`${deleteUrl}/${item_id}`);
        return res.data
    } catch (error) {
        return api.rejectWithValue('error connecting to api')
    }
})



const bookSlice = createSlice({
    name:'bookStore',
    initialState,
    extraReducers: (builder) => {
        builder 
            .addCase(getBook.fulfilled, (state, action) => {
                state.isLoading= false;
                state.books = action.payload;
            })
    },
});


export default bookSlice.reducer;  