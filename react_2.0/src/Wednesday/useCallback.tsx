import React, {useState} from 'react';

export const UseCallback = () => {
    const [books, setBooks] = useState(['js', 'css'])
    const [count, setCount] = useState(0)


    const addBook = () => {
        const newBook = [...books, 'react' + new Date().getTime()]
        setBooks(newBook)
    }


    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
            <Book addBook={addBook}/>
            <>{books}</>

        </div>
    );
};


type BookPropsType = {
    addBook: () => void
}

const Book = (props: BookPropsType) => {
    console.log('Book')
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
        </div>
    )
}