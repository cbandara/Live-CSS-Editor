import React, { Component } from "react";

export default class EditBox extends Component {


  render() {
    return (
      <div>
        <p>Place your css here</p>
        <div className="edit-box">
          <form>
            <input className="css-input" id="css-input" name="css-input" value="css-input" type="textarea"></input>
          </form>
        </div>
      </div>
    )
  }
}