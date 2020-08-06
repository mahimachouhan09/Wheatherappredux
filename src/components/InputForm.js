import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWheather , getHistory } from '../actions'
import Wheathercontainer from '../containers/Wheathercontainer';
import Historycontainer from '../containers/Historycontainer';

class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      city : '',
      main : undefined,


    }
  }

  onInputChange = event => this.setState({ city: event.target.value })

  onFormSubmit = event => {
    event.preventDefault()
    this.props.getWheather(this.state.city)
    this.props.getHistory(this.state.city)
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
        <Historycontainer />
      </form>
    )
    }
}

export default connect(null, { getWheather , getHistory })(InputForm)