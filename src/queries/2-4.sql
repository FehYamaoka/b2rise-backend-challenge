SELECT 
    customers.name, SUM(orders.total) AS total_spent
FROM 
    customers
JOIN 
    orders 
ON 
    customers.id = orders.customer_id
WHERE 
    orders.total > 0
GROUP BY 
    customers.id
ORDER BY 
    total_spent
DESC;