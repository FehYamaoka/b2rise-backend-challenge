SELECT 
  categories.name AS category_name, 
  products.name AS product_name, 
  SUM(sales.quantity) AS total_sales
FROM 
    sales
JOIN 
    products 
ON 
    sales.product_id = products.id
JOIN 
    categories 
ON 
    products.category_id = categories.id
GROUP BY 
    categories.name, products.name
HAVING 
    SUM(sales.quantity) > 100