import React from 'react';
import './search-box.css';

const SearchBox = props => {
    return (
        <input
        className='search'
        type = 'search'
        placeholder = 'Input Genre For Search'
        onChange={ props.changed }
        />
    )
}

export default SearchBox;