import React from 'react';
import PropTypes from 'prop-types';
import s from './Transaction.module.scss';

function TransactionHistory({ items }) {
  <table className={s.transactionHistory}>
    <thead>
      <tr className={s.tableHead}>
        <th className={s.tableHeader}>Type</th>
        <th className={s.tableHeader}>Amount</th>
        <th className={s.tableHeader}>Currency</th>
      </tr>
    </thead>
    <tbody>
      <tr className={idx}>
        <td className={s.type}>Invoice</td>
        <td className={s.amount}>125</td>
        <td className={s.currency}>USD</td>
      </tr>
    </tbody>
  </table>;
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default TransactionHistory;
