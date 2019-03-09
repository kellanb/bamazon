CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cordless Vacuum Cleaner", "Home & Kitchen", 224.00, 10),
  ("Bluetooth Speaker", "Electronics", 64.99, 22),
  ("Stainless Steel Designer Watch", "Shoes & Jewelry", 39.22, 17),
  ("LED Grow Lights for Indoor Plants", "Lawn & Garden", 17.37, 2),
  ("Wireless Charging Stand", "Electronics", 16.79, 27),
  ("GPS RC Drone", "Electronics", 195.49, 5),
  ("Scotts Weed Preventer", "Lawn & Garden", 13.48, 7),
  ("RFID Blocking Wallet", "Shoes & Jewelry", 8.57, 9),
  ("Scooter", "Sports & Outdoor", 49.95, 6),
  ("Boot and Shoe Polish", "Shoes & Jewelry", 5.59, 32);