import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { currencyChangeHandler } from "../../utils/utils"

let total = 0;

const CartPopup = props => {
    return (
        <div> 
            <Dialog
                open={props.isOpen}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Items In The Cart"}</DialogTitle>
                <DialogContent>
                <DialogContentText>
                {
                    props.books.map(book => (
                        <>
                            <p> Name: {book["name "]} </p>
                            <p> No of Books : 1 </p>
                            <hr></hr>
                            {total += 1 * currencyChangeHandler(book.price)} 
                        </>
                    ))
                }
                <h3> Total Payable Amount : RS {total}</h3>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Close
                </Button>
                <Button autoFocus onClick={props.handleClose} color="primary">
                    Order
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CartPopup