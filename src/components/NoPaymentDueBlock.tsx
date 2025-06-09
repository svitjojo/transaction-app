import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const NoPaymentDueBlock: React.FC = () => (
  <div className="no-payment-due-block no-payment-due-block--flex">
    <div>
      <div className="no-payment-due-block__title">No Payment Due</div>
      <div className="no-payment-due-block__desc">You've paid your September balance.</div>
    </div>
    <div className="no-payment-due-block__icon-wrap">
      <FontAwesomeIcon icon={faCheckCircle} className="no-payment-due-block__icon" />
    </div>
  </div>
);

export default NoPaymentDueBlock; 