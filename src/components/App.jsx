import React from 'react';
import Feedback from './feedback/feedback';
import css from './feedback/feedback.module.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = button => {
    this.setState(prevState => ({
      [button]: prevState[button] + 1,
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
    const options = Object.keys(this.state);
    return (
      <div className={css.feedbackContainer}>
        <div className={css.container}>
          <h3 className={css.title}>Please leave feedback</h3>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.updateFeedback}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            goodPersentage={this.countPositiveFeedbackPercentage}
          />
        </div>
      </div>
    );
  }
}

export default App;
