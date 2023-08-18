import { useEffect } from "react";
import CreateBook from "./CreateBook";
import Book from './Book'
import { useSelector, useDispatch } from "react-redux";
import {getBook} from "../redux/books/bookSlice.jsx";

const BookList = () => {
  const dispatch = useDispatch();

  const { books, isLoading} = useSelector((store) => store.bookStore);

    useEffect(() => {
      dispatch(getBook());
    },[dispatch]);

    const arrOfBooks = Object.entries(books).reduce((e, [id, bookList]) => {
      const bookId = bookList.map((book) => ({...book, id}) );
      return [...e, ...bookId]
    }, [])

    return (
      <div>
        {isLoading ? (
          <div>loading...</div>
        ):(
          <>
             {arrOfBooks.map((book) => (
            <Book key={book.id} book={book} />
              ))}
              
              <CreateBook />
          </>
        )
      } 
       
      </div>
    );
}

export default BookList;