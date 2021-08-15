import './App.css';
import React, { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';

class App extends Component {
  state = {
    books : [],
    cartOpen: false
  }

  componentDidMount() {
    fetch('https://book-set-task.herokuapp.com/api/list_books')
    .then(response => response.json())
    .then(books => this.setState({
      books : books,
      searchField : ''
    }))
  }
 
  inputChangeHandler = event => {
    this.setState({ searchField: event.target.value })
  }

  cartPopUpHandler = () => {
    this.setState({
      cartOpen: true
    })
  }

  handleClose = () => {
    this.setState({
      cartOpen: false
    })
  }

  render () {

    const { books, searchField } = this.state;
    const filteredBooks = books.filter(book => 
      book.genre.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <IconButton color="primary" component="span" className="cart-container" onClick={this.cartPopUpHandler}>
          <ShoppingCartIcon size="medium" className="cart-button" />
        </IconButton>
         <h1> Book Store </h1>
        <SearchBox changed={this.inputChangeHandler} />
        <CardList books={filteredBooks} isOpen={this.state.cartOpen} handleClose={this.handleClose}/>
      </div>
    );
  }
}

export default App;
