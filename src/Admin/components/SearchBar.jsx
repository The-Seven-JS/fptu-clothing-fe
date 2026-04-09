import React, { useState } from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false); // Tracks visibility of the results container

  const handleSearch = async () => {
    if (query.trim() === '') {
      setResults([]);
      setShowResults(false); // Hide results if input is empty
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(`https://be.fuct.gay/articles/get-articles-keyword`, {
        params: { keyword: query },
      });
      setResults(response.data); // Adjust based on API response structure
      setShowResults(true); // Show the results container after search
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setResults([]);
      setShowResults(true); // Show the container with "Không có bài viết này" if error occurs
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    // Automatically hide results container if input is empty
    if (value.trim() === '') {
      setResults([]);
      setShowResults(false);
    }
  };

  return (
    <div className="search-container">
      {/* Search box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Nhập để tìm kiếm..."
          value={query}
          onChange={handleInputChange} // Updated to handle input changes
        />
        <button onClick={handleSearch}>Tìm kiếm</button>
      </div>

      {/* Loading indicator */}
      {loading && <p className='search-not-found'>Đang tải...</p>}

      {/* Results container */}
      {showResults && (
        <div className="results-container">
          {results.length > 0 ? (
            results.map((card, index) => (
              <PostCard
                key={index}
                title={card.content}
                id={card.id}
                bg={card.title}
                source="FUCT NEWS"
                date={card.created_at}
                titleEmpty=""
              />
            ))
          ) : (
            <p className='search-not-found'>Không có bài viết này</p> // Message displayed when no results
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
