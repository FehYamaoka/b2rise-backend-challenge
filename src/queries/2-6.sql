CREATE VIEW monthly_summary AS
SELECT 
  transactions.account_id, 
  MONTH(transactions.transaction_date) AS month, 
  SUM(transactions.amount) AS total_transactions
FROM 
    transactions
GROUP BY 
    transactions.account_id, MONTH(transactions.transaction_date)

-- SELECT FROM VIEW
SELECT * FROM monthly_summary
WHERE total_transactions > 10000;