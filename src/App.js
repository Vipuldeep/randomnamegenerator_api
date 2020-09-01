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
      return <div className='ma5 tc f3'>Please be patient! loading data for you!</div>;
    }

    if (!this.state.person) {
      return <div className='tc f4'>Sorry, please try again, We didn't get a person!</div>;
    }

    return (
      <div className='ma6 tc'>
        <div className='f1 ma5'>This is going to be your random name profile in Parallel universe!</div>
        <div className='bg-white dib br3 pa3 ma2 grow bw2 shadow-5 br-4 name tj'>{this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</div><br/>
        <img className='bg-white dib br3 pa3 ma2 shadow-5' alt='profile' src={this.state.person.picture.large} />
        <div className='bg-black pa2 ma4 br-pill'><a href="https://github.com/Vipuldeep/Robofriends"><p className='tc link hover-gray'>@vipuldeep</p></a></div>
      </div>
    );
  }
}
export default App;