import css from './Tesr.module.css';
import React from 'react';

class Aaa extends React.Component {
  state = {
    value: 0,
  };

  plusOne = evt => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };
  minusOne = evt => {
    console.log('Hallo -');
  };

  render() {
    return (
      <div className={css.a}>
        <span className={css.value}>{this.state.value}</span>
        <button type="button" onClick={this.plusOne}>
          Додати один
        </button>
        <button type="button" onClick={this.minusOne}>
          Відняти один
        </button>
      </div>
    );
  }
}

export default Aaa;
