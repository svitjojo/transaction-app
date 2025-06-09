import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard, faStore, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { Transaction } from '../types';
import { formatTransactionDate } from '../utils';

const iconMap: Record<string, any> = {
  apple: faApple,
  'cc-visa': faCcVisa,
  store: faStore,
  bullseye: faBullseye,
  payment: faCreditCard,
};

interface TransactionItemProps {
  transaction: Transaction;
  onClick: () => void;
}

const getRandomDark = () => {
  const colors = ['#222', '#333', '#444', '#555', '#666', '#111'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, onClick }) => {
  const icon = iconMap[transaction.icon || 'payment'] || faCreditCard;
  const amountSign = transaction.type === 'Payment' ? '+' : '';
  return (
    <div className="transaction-item transaction-item--flex" onClick={onClick}>
      <div className="transaction-item__icon-wrap" style={{ background: getRandomDark() }}>
        <FontAwesomeIcon icon={icon} color="#fff" size="lg" />
      </div>
      <div className="transaction-item__main">
        <div className="transaction-item__name">{transaction.name}</div>
        <div className="transaction-item__desc">
          {transaction.pending ? 'Pending - ' : ''}
          {transaction.description}
          {transaction.authorizedUser ? ` - ${transaction.authorizedUser}` : ''}
          {' - '}
          {formatTransactionDate(transaction.date)}
        </div>
      </div>
      <div className="transaction-item__amount">
        {amountSign}${transaction.amount.toFixed(2)}
      </div>
    </div>
  );
};

export default TransactionItem; 