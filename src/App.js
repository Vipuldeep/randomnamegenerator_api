import React, { Component } from 'react';
import './App.scss';



// Ajax request using fetch API
// javascript ES6 and AJAX have promises to tell that when they will get the result they will surely let us know
// promise is a object that may produce a single value in future
//3 states: full-filled, rejected and pending
export class App extends Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Please be patient! loading data for you!</div>;
    }

    if (!this.state.person) {
      return <div>Sorry, please try again, We didn't get a person!</div>;
    }

    return (
      <div>
        <div class='tc'>{this.state.person.name.title}</div>
        <div>{this.state.person.name.first}</div>
        <div>{this.state.person.name.last}</div>
        <img alt='image' src={this.state.person.picture.large} />
      </div>
    );
  }
}
export default App;