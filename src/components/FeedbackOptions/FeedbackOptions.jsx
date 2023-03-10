import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btn_container}>
      {options.map(elem => (
        <button key={elem} onClick={() => onLeaveFeedback(elem)}>
          {elem}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

/* <div className={css.btn_container}>
  <button onClick={this.goodPlus}>Good</button>
  <button onClick={this.neutralPlus}>Neutral</button>
  <button onClick={this.badPlus}>Bad</button>
</div>; */
