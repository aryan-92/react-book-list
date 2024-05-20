import React from 'react'

//function Book(props) {
function Book({ img, author, title, children }) {
    //console.log(props);
    //const { img, author, title } = props; //
    // const Image = () => {
    //     return <div className="bookImg">
    //         <img src="/images/book1.jpg" alt="" />
    //     </div>
    // }
    // const Title = () => {
    //     return <div className="bookTitle">
    //         <h2 style={{ color: 'red', textAlign: 'center' }}>Book Title</h2>
    //     </div>
    // }
    // const Author = () => {
    //     return <div className="bookAuthor">
    //         <h6>Author</h6>
    //     </div>
    // }
    return (

        <div className="col-md-4">
            {/* <Image />
            <Title />
            <Author /> */}
            {/* <div className="bookImg">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="bookTitle">
                <h2 style={{ color: 'red', textAlign: 'center' }}>{props.title}</h2>
            </div>
            <div className="bookAuthor">
                <h4 className='text-center'>{props.author}</h4>
            </div> */}
            <div className="bookImg">
                <img src={img} alt={title} />
            </div>
            <div className="bookTitle">
                <h2 style={{ color: 'red', textAlign: 'center' }}>{title}</h2>
            </div>
            <div className="bookAuthor">
                <h4 className='text-center'>{author}</h4>
            </div>
            {children}
        </div>

    )
}

export default Book