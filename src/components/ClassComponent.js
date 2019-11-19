import React, { Component } from 'react'
import HOCComponent from './HOCComponent';

class ClassComponent extends Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      name: ''
    }
  }

  clickMe = () => alert('hello im a class component');

  button = <button onClick={this.clickMe}>Class Component Button</button>;

  handleInputChange = (event) => {
    console.log(event);
    this.setState({ name: event.target.value });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        {this.button}
        <input type="text" name="name" value={name} onChange={this.handleInputChange} />
      </div>
    )
  }
}

export default HOCComponent(ClassComponent);