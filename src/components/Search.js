import React from 'react';

var debounced = _.debounce((value, func) => (func(value)), 1000);

var Search = ({ handleSearchInputChange }) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={(event) => (debounced(event.target.value, handleSearchInputChange))}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
)


export default Search;
