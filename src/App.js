import React, { Component } from "react";
import EditBox from './components/EditBox/EditBox';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cssInput: ""
    }
  }


  handleChange = (e) => {
    this.setState({
      cssInput: e.target.value
    })

  }

  render() {
    const style = this.state.cssInput;
    const example = "* {color: red !important;}"
    return (
      <div className="App" >
        <style dangerouslySetInnerHTML={{ __html: style }}></style>
        <header className="App-header">
          <h1>
            Live CSS Editor
          </h1>
          <p>Try entering some css</p>
          <p>Example: {example}</p>
        </header>
        <body>
          <div >
            <form>
              <textarea className="edit-box" id="css-input" name="css-input" onChange={this.handleChange}></textarea>
            </form>
            <p>{this.state.cssInput}</p>
          </div>
        </body>

      </div >
    );
  }

}
