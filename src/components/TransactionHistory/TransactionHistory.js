import React from 'react';
import PropTypes from 'prop-types';
import s from './Transaction.module.scss';

function TransactionHistory({ items }) {
  <table class="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Invoice</td>
        <td>125</td>
        <td>USD</td>
      </tr>
      <tr>
        <td>Withdrawal</td>
        <td>85</td>
        <td>USD</td>
      </tr>
    </tbody>
  </table>;
}
export default TransactionHistory;
