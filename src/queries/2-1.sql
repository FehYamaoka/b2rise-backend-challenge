SELECT 
    product, 
    SUM(quantity * price) AS total_sales
FROM 
    sales
GROUP BY 
    product
ORDER BY 
    total_sales 
DESC