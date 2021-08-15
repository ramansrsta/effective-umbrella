import React from 'react';
import Card from '../card/card';
import './card-list.css';

const CardList = props => {
    return (
        <div className='card-list'>
            {
                props.books.map(book => (
                    <Card key={book.id} book={book} isOpen={props.isOpen} handleClose={props.handleClose}/>
                ))
            }
        </div>
    )
}

export default CardList;