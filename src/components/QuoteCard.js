import React from 'react';
import ReactDOM from 'react-dom';
import './QuoteCard2.css';

class QuoteCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favorite: false,
    };
  }
  render() {
    return (
      <figure className="QuoteCard">
        <img src={this.props.image} alt={this.props.character} />
        <figcaption>
          <blockquote>{this.props.quote}</blockquote>
          <p>
            <cite>{this.props.character}</cite>
            <span onClick={event => {
                const newFavorite = !this.state.favorite;
                this.setState({favorite: newFavorite});
              }} className={this.state.favorite ? 'is-favorite' : ''}>&#9733;</span>
          </p>
        </figcaption>
      </figure>
    );
  }      
}

ReactDOM.render(<QuoteCard />, document.getElementById('root'));

  export default QuoteCard;