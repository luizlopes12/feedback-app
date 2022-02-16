import React from "react";
import ProtTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem";

function FeedbackStats({ feedback }) {
  //calculando a média com todos os items do array
  let avg =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  //fixando o numero decimal em apenas uma casa decimal, ex: 9.6 e não 9.6666666
  avg = avg.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}
FeedbackStats.ProtTypes = {
  feedback: ProtTypes.array.isRequired,
}
export default FeedbackStats;
