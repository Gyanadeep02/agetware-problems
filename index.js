const express = require('express');
const app = express();
app.use(express.json());

app.get('/loans/:loan_id/ledger', (req, res) => {
  res.status(200).json({
    loan_id: req.params.loan_id,
    customer_id: "cust123",
    principal: 10000,
    total_amount: 12000,
    monthly_emi: 1000,
    amount_paid: 2000,
    balance_amount: 10000,
    emis_left: 10,
    transactions: [
      {
        transaction_id: "txn123",
        date: new Date().toISOString(),
        amount: 2000,
        type: "EMI"
      }
    ]
  });
});

app.listen(300, () => console.log('Server running on port 300'));
