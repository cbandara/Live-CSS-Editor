import React, { Component } from "react";

export default class EditBox extends Component {

  handleChange = (e) => {
    this.setState({
      cssInput: e.target.value
    })
  }

  render() {
    return (
      <div>
        <p>Place your css here</p>

      </div>
    )
  }
}