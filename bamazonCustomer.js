const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "root",

  database: "bamazon"
});

connection.connect((err) => {
  if (err) throw err;
  showProducts();
});

const showProducts = () => {
  connection.query("SELECT * FROM products", (err, res) => {
    if (err) throw err;
    console.table(res);
    buyStuff();
  });
};

const buyStuff = () => {
  inquirer
    .prompt([
      {
        name: "buyproduct",
        type: "input",
        message: "What is the [ID] of the product you would like to buy?",
        validate: (value) => {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "quantity",
        type: "input",
        message: "How many units would you like to buy?",
        validate: (value) => {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then((answer) => {
      let selectedItem = answer.buyproduct;
      let quantity = answer.quantity;
      
      connection.query("SELECT * FROM products WHERE ?",
      {item_id: selectedItem},
      (err, res) => {
        let stock = res[0].stock_quantity;
        let price = res[0].price;
        let purchaseCost = quantity * price;
        let divider = "\n------------------------------------------------------------\n\n";
        
        if (err) throw err;
        if (stock < quantity) {
          console.log("Insufficient quantity!");
          setTimeout(() => {
            buyStuff();
          }, 2000);
        } else {
          connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: stock - quantity}, 
            {item_id: selectedItem}], 
            (err, res) => {
              console.log(divider + "Purchase Cost: " + "$" + purchaseCost + "\n" + divider);
              setTimeout(() => {
                showProducts();
              }, 2000);
          })
        }
      }
      )

    });
}