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
      <div className="section">
        <div className='mt5 tc heading'>Random Name generator</div>
          <div className=' ma3 tc text'>Get new names every time you refresh!</div>
          <div class="first br3 pa3 ma2"> 
              <p>How about this name?</p> 
          </div> 
          <div class="second br3 pa3 ma2"> 
              <p>{this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</p> 
          </div> 
          <div class="third br3 pa3 ma2"> 
          <p> 
          <img className='third bg-white br3 pa3' alt='profile' src={this.state.person.picture.large} />
          </p> 
      </div> 
     </div>
    );
  }
}
export default App;