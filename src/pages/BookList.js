import React from 'react'
import Books from '../booklist'
import Book from '../components/Book';


function BookList() {

  return (
    <div>

      <div className="container">
        <div className="row">

          {/* <Book title='Atomic Habits' author=' James Clear' img='/images/book1.jpg'> <p>chidren prop paragraph</p></Book>
                    <Book title='The Power of Your Subconscious Mind' author='Joseph Murphy' img='/images/book2.jpg'/>
                    <Book title='THE SILENT PATIENT' author='Alex Michaelides' img='/images/book3.jpg'/> */}
          {/* {Books.map((book,index) => (
                        // console.log(book);
                        // const {img,title,author} = book;
                         <Book key={index} title={book.title} author={book.author} img={book.img}/>
                       
                    ))} */}
          {Books.map((book, index) => {
            //const { img, title, author,id } = book;
            return (
              // <Book  book={book} key={id} />
              <Book  {...book} key={book.id} />
            );
          })}


        </div>
      </div>

    </div>
  )
}

export default BookList