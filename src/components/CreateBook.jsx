import { useState } from "react";
import { addBooks} from "../redux/books/bookSlice";

const CreateBook = () => {
  const [ title, setTitle ] = useState("");
  const [ author, setAuthor ] = useState("");

  return(
    <div className="container">
        <h1>ADD NEW BOOK</h1>
        <form className="form">
          <input type="text"
           title={title}
           placeholder="Book title"
           onChange={(e) => setTitle(e.target.value)} 
          />
          <input type="text"
           title={author}
           placeholder="Book author"
           onChange={(e) => setAuthor(e.target.value)} 
           />
           <button className="addBookBtn" type="submit" onClick={addBooks()}>
              ADD BOOK
           </button>
        </form>
    </div>
  )
}

export default CreateBook;