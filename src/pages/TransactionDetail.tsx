import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Transaction } from '../types';
import { formatTransactionDate } from '../utils';

const TransactionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/transactions.json')
      .then(res => res.json())
      .then((data: Transaction[]) => {
        setTransaction(data.find(tx => tx.id === id) || null);
      });
  }, [id]);

  if (!transaction) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: 420, margin: '0 auto', padding: 16, minHeight: '100vh', background: '#f5f6fa' }}>
      <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', fontSize: 24, marginBottom: 16 }}>&larr;</button>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 40 }}>${transaction.amount.toFixed(2)}</div>
        <div style={{ color: '#888', fontSize: 18 }}>{transaction.name}</div>
        <div style={{ color: '#888', fontSize: 15 }}>{formatTransactionDate(transaction.date)}</div>
      </div>
      <div style={{ background: '#fff', borderRadius: 12, padding: 16, marginBottom: 12 }}>
        <div style={{ fontWeight: 600, fontSize: 16 }}>Status: {transaction.pending ? 'Pending' : 'Approved'}</div>
        <div style={{ color: '#888', fontSize: 15 }}>{transaction.description}</div>
      </div>
      <div style={{ background: '#fff', borderRadius: 12, padding: 16 }}>
        <div style={{ fontWeight: 600, fontSize: 16 }}>Total</div>
        <div style={{ fontWeight: 700, fontSize: 18, textAlign: 'right' }}>${transaction.amount.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default TransactionDetail; 