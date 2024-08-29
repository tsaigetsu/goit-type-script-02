import React from "react";

interface FeedbackProps {
  feedback: {
    good: number;
    neutral: number;
    bad: number;
  };
  totalFeedback: number;
  positivePercentage: number;
}

const Feedback = ({ feedback, totalFeedback, positivePercentage }: FeedbackProps): JSX.Element => {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Percentage: {positivePercentage}</p>
    </div>
  );
};

export default Feedback;
