import React from 'react';
import './card.css';
import CartPopup from '../cart-popup/CartPopup';
import Alert from '@material-ui/lab/Alert';
import { currencyChangeHandler, datechangeHandler } from "../../utils/utils"

const books = [];

const Card = props => {
    const addToCartHandler = (book) => {
        if(books.length > 4){
            return  (
                <Alert severity="error">Cannot Add More than 5 Books In Cart</Alert>
            )
        }
        books.push(book)
    }

    return (
    <div className='card-container'>
        { props.isOpen && <CartPopup isOpen={props.isOpen} handleClose={props.handleClose} books={books}/>}
        <img alt="books" src={props.book.image} />
        <h1> {props.book["name "]} </h1>
        <p> Price: <b>RS </b> {currencyChangeHandler(props.book.price)} </p>
        <p> Stock: {props.book.stock} </p>
        <p> Created Date: {datechangeHandler(props.book.published_date)} </p>
        <p> Genre: {props.book.genre} </p>
        <p> Author: {props.book.author} </p>
        <button className="add-cart" onClick={() => addToCartHandler(props.book)}> Add To Cart </button>
    </div>
    )
}

export default Card;