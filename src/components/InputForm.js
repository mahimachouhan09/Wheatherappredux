import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWheather } from '../actions'
import Wheathercontainer from '../containers/Wheathercontainer';

class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      city : '',
      main : undefined 
    }
  }

  onInputChange = event => this.setState({ city: event.target.value })

  onFormSubmit = event => {
    event.preventDefault()
    this.props.getWheather(this.state.city)
    this.setState({
      city: ''
    })
  }

  render() {
    return (
      <form onSubmit = {this.onFormSubmit}>
        <input type = "text"
          placeholder ="city name"
          value = {this.state.city}
          onChange = {this.onInputChange } 
        />
        <button type="submit" >Submit</button>
        <Wheathercontainer />
      </form>
    )
    }
}


export default connect(null, { getWheather })(InputForm)