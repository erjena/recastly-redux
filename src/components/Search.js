import React from 'react';

// var debounced = _.debounce((value, func) => (func(value)), 1000);

// var Search = ({ handleSearchInputChange }) => (
//   <div className="search-bar form-inline">
//     <input
//       className="form-control"
//       type="text"
//       onChange={(event) => (debounced(event.target.value, handleSearchInputChange))}
//     />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// )

// converted to class component to allow for default loading of videos with query 'hello'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.debounced = _.debounce((value) => (this.props.handleSearchInputChange(value)), 1000);
  }

  componentDidMount() {
    this.props.handleSearchInputChange('hello');
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={(event) => (this.debounced(event.target.value))}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}


export default Search;
