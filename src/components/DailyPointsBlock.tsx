import React from 'react';

interface DailyPointsBlockProps {
  points: string;
}

const DailyPointsBlock: React.FC<DailyPointsBlockProps> = ({ points }) => (
  <div className="daily-points-block">
    <div className="daily-points-block__title">Daily Points</div>
    <div className="daily-points-block__points">{points}</div>
  </div>
);

export default DailyPointsBlock; 