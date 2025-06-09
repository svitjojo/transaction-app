import React, { useEffect, useState } from 'react';
import CardBalanceBlock from '../components/CardBalanceBlock';
import NoPaymentDueBlock from '../components/NoPaymentDueBlock';
import DailyPointsBlock from '../components/DailyPointsBlock';
import TransactionItem from '../components/TransactionItem';
import { Transaction } from '../types';
import { calculateDailyPoints, formatPoints } from '../utils';
import { useNavigate } from 'react-router-dom';

const CARD_LIMIT = 1500;

const TransactionsList: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState(17.3); // Example balance
  const [seasonStart] = useState(new Date('2023-09-01'));
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/transactions.json')
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);

  const points = formatPoints(calculateDailyPoints(seasonStart, new Date()));

  return (
    <div className="transactions-list__container">
      <div className="transactions-list__top-row">
        <div className="transactions-list__left-col">
          <CardBalanceBlock balance={balance} limit={CARD_LIMIT} />
          <DailyPointsBlock points={points} />
        </div>
        <NoPaymentDueBlock />
      </div>
      <div className="transactions-list__title">Latest Transactions</div>
      <div>
        {transactions.slice(0, 10).map(tx => (
          <TransactionItem key={tx.id} transaction={tx} onClick={() => navigate(`/transaction/${tx.id}`)} />
        ))}
      </div>
    </div>
  );
};

export default TransactionsList; 