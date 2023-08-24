import { useState } from "react";
import  {getBook, addBook}  from "../redux/books/bookSlice";
import { useDispatch } from "react-redux";

const CreateBook = () => {
  const dispatch = useDispatch();
  const [ title, setTitle ] = useState("");
  const [ author, setAuthor ] = useState("");


  const submit = async (e) => {
    e.preventDefault();
    if(!title || !author)return;
    try{
       await dispatch(addBook([title, author]));
      setTitle("");
      setAuthor("");
       await dispatch(getBook());
    }catch(err) {
      console.log(err)
    }
  }

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
           <button className="addBookBtn" type="submit" onClick={submit}>
              ADD BOOK
           </button>
        </form>
    </div>
  )
}

export default CreateBook;