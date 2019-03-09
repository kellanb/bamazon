# Bamazon

## About
Bamazon is a CLI App that utilizes MySQL and Node.js to create an Amazon-like storefront. A MySQL database is used to store and populate data dynamically as the user interacts with the application.

## Bamazon In Action
node bamazonCustomer.js

![](images/bamazon-start.JPG)

When the application is run, it pulls up the most current data from the MySQL database and displays it to the user. It then asks which product they would like to purchase followed by how many of that particular product they would like to purchase.

![](images/bamazon-cost.JPG)

After the application has the product ID and the number of units, it calculates the total purchase cost and displays it to the user. After a short timeout, the updated table of data is displayed with the new stock quantity of each item.

![](images/bamazon-out.JPG)















If at any point the user tries to buy more of a product that Bamazon has in stock, the application will display a message to the user letting them know that there is insufficient quantity and it will then let the user buy a different amount of that same product or choose a different product altogether.
