# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT p.ProductName, c.CategoryName from Products as p
JOIN Categories as c
ON c.CategoryId = p.CategoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.OrderId, s.ShipperId from Orders as o
JOIN Shippers as s
ON s.ShipperId = o.ShipperId
WHERE o.OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT p.ProductName, od.quantity FROM OrderDetails AS od
JOIN Products as p
ON od.ProductId = p.ProductId
WHERE od.OrderId = '10251'
ORDER BY p.ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT o.OrderId, c.CustomerName, e.LastName as EmployeeLastName FROM Orders as o
JOIN Customers as c
ON o.CustomerId = c.CustomerId
JOIN Employees as e
ON o.EmployeeId = e.EmployeeId

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 