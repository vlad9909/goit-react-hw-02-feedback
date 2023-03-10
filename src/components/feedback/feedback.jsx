import React from 'react';
import css from './feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodPlus = () => {
    this.setState(({ good }) => ({
      good: good + 1,
    }));
  };

  neutralPlus = () => {
    this.setState(({ neutral }) => ({
      neutral: neutral + 1,
    }));
  };

  badPlus = () => {
    this.setState(({ bad }) => ({
      bad: bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return `${Math.round((good / this.countTotalFeedback()) * 100)}%`;
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
          <span className={css.grade}>Total: {this.countTotalFeedback()}</span>
          <span className={css.grade}>
            Positive feedback: {this.countPositiveFeedbackPercentage()}
          </span>
        </div>
      </div>
    );
  }
}

export default Feedback;
