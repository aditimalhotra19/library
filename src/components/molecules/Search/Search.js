import React, { useState, useEffect } from "react";
import BooksData from '../../../books.json';
import './search.css';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});
  
  useEffect(() => {
    const results = BooksData.books.filter(bookItem =>
        bookItem.title.toLowerCase().includes(searchValue) || bookItem.author.toLowerCase().includes(searchValue) || bookItem.category.toLowerCase().includes(searchValue)
    );
    setSearchResults(results);
  }, [searchValue]);

  const handleInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const handleBookSelection = (e) => {
    setSelectedBook({
        id: e.target.value
    })
  }

  return (
      <>
        <div className="selectedBooks">{selectedBook.id}</div>
        <input
        value={searchValue}
        onChange={handleInputChanges}
        type="text"
        />
        <ul>
            {searchResults.map(item => (
                <li key={item.id} id={item.id} aria-label={item.title} onClick={handleBookSelection}>
                    <p className="title">{item.title}</p>
                    <p>Author - {item.author}</p>
                    <p>Category - {item.category}</p>
                    <p>Rack - {item.rack}</p>
                    <div>Click to add the book</div>
                </li>
            ))}
        </ul>
      </>
    );
}

export default Search;