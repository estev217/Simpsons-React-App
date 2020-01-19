import React from 'react';
import Navbar from './components/Navbar';
import DisplayQuote from './components/DisplayQuote';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          quote: data[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        {this.state.quote ? <DisplayQuote quote={this.state.quote} /> : null}
        <button type="button" onClick={this.getQuote}>Change quote</button>
      </div>
    );
  }
}
export default App;
