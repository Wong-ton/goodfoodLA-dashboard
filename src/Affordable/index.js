import React, { Component } from 'react';

class Affordable extends Component {

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    //submit data to db
  }

  render() {

    const { }
    
    return(
      <form onSubmit={this.onSubmit}>
        Food Insecurity - All Households
        <br/>Enter Number
        <input 
          type="text"
          name=""
          value=""
          onChange={this.onChange}
        />
        <br/>Source
        <input 
          type="text"
          name=""
          value=""
          onChange={this.onChange}
        />
      </form>
    )
  }
}

export default Affordable;