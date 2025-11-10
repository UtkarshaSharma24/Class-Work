
import React from 'react';

const Search = ({ value, onChange }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search products..."
        className="search-box"
      />
    </div>
  );
};

export default Search;
