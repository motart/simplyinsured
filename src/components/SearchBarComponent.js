import React from "react";

class SearchBarComponent extends React.Component {
   
   constructor(props) {
      super(props);
      this.state = {
          searchInput: ''
      }
      this.handleChange = this.handleChange.bind(this);
  }
   
   handleChange(e) {
      e.preventDefault();
      this.setState({searchInput: e.target.value});
      this.props.setSearchInput(e.target.value);
    };
    
   render() {
      return (
         <input
            type="text"
            placeholder="Search here"
            onChange={this.handleChange}
            value={this.searchInput} />
      )
   }
}
export default SearchBarComponent;
   