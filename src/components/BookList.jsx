import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import CreateBook from "./CreateBook";
import Book from './Book'


const bookStorage = [
    {
       id: uuidv4(),
       genre: "Action",
       title: "The Hunger Games",
       author: "Suzanne Collins",
       completed: "64%",
       chapter: "Chapter 17",
    },
    {
        id: uuidv4(),
        genre: "Action",
        title: "Dune",
        author: "Frank Herbert",
        completed: "8%",
        chapter: "Chapter 3: 'Alesson learned'",
    },
    {
        id: uuidv4(),
        genre: "Action",
        title: "Capital in The Twenty-First Century",
        author: "Suzanne Collins",
        completed: "0%",
        chapter: "Introduction",
    },
];

const BookList = () => {
    const [book, setBook] = useState([])

    useEffect(() => {
        setBook(bookStorage);
    },[]);

    return (
      <div>
        {book.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        <CreateBook />
      </div>
    );
}

export default BookList;