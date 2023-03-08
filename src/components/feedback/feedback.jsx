import React from 'react';
import css from './feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  goodPlus = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralPlus = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badPlus = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div className={css.container}>
        <h3 className={css.title}>Please leave feedback</h3>
        <div className={css.btn_container}>
          <button onClick={this.goodPlus}>Good</button>
          <button onClick={this.neutralPlus}>Neutral</button>
          <button onClick={this.badPlus}>Bad</button>
        </div>
        <div className={css.stats_conteiner}>
          <h3 className={css.title}>Statistic</h3>
          <span className={css.grade}>Good: {this.state.good}</span>
          <span className={css.grade}>Neutral: {this.state.neutral}</span>
          <span className={css.grade}>Bad: {this.state.bad}</span>
          <span>Total: {this.state.total}</span>
        </div>
      </div>
    );
  }
}

export default Feedback;
