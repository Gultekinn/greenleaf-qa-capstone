SELECT * FROM orders 
JOIN users ON orders.user_id = users.id 
WHERE users.email = 'capstone.guest@example.test' 
ORDER BY orders.created_at DESC 
LIMIT 1;