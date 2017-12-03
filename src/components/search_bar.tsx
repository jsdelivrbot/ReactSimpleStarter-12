import * as React from 'react';
import { Component } from 'react';

class SearchBar extends Component<{onSearchTermChange:any},{term:any}>  {
  constructor(props: any) {
    super(props);

    this.state = { term: '' };
    
  }
  render() {
    return (
      <div className="search-bar">
        <input 
        value={ this.state.term }
        onChange = { e => this.onInputChange(e.target.value) }/>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;