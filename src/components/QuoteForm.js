import React from 'react';
import ReactDOM from 'react-dom';
import './QuoteForm.css';

class QuoteForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        character: '',
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    handleChange(event) {
      this.setState({ character: event.target.value });
    }
  
    render() {
      return (
        <form className="QuoteForm">
          <label htmlFor="character">Character:</label>
          <input
            id="name"
            name="character"
            type="text"
            value={this.state.character}
            onChange={this.handleChange}
            />
            <p>
              You typed: <strong>{this.state.character}</strong>
            </p>
        </form>
      );
    }
  }
  
  ReactDOM.render(<QuoteForm />,document.getElementById('root'));

  export default QuoteForm;