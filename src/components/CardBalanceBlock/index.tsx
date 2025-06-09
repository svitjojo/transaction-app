import React from 'react';

interface CardBalanceBlockProps {
  balance: number;
  limit: number;
}

const CardBalanceBlock: React.FC<CardBalanceBlockProps> = ({ balance, limit }) => {
  const available = limit - balance;
  return (
    <div className="card-balance-block">
      <div className="card-balance-block__title">Card Balance</div>
      <div className="card-balance-block__balance">${balance.toFixed(2)}</div>
      <div className="card-balance-block__available">${available.toFixed(2)} Available</div>
    </div>
  );
};

export default CardBalanceBlock; 