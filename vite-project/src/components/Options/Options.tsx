import React from "react";

interface OptionsProps {
  onGoodClick: () => void;
  onNeutralClick: () => void;
  onBadClick: () => void;
  onResetClick?: () => void;
  hasFeedback: boolean;
}

const Options: React.FC<OptionsProps> = ({
  onGoodClick,
  onNeutralClick,
  onBadClick,
  onResetClick,
  hasFeedback
}) => {
  return (
    <div>
      <button onClick={onGoodClick}>Good</button>
      <button onClick={onNeutralClick}>Neutral</button>
      <button onClick={onBadClick}>Bad</button>
      {hasFeedback && onResetClick && (
        <button onClick={onResetClick}>Reset</button>
      )}
    </div>
  );
};

export default Options;
