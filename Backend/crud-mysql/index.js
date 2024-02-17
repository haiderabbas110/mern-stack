import express from 'express';
const app = express();
import mysql from 'mysql';
const port = 8000;
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_db'
});

app.get('/create-table', function (req, res) {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        createTable(); // Call the function to create the table once connected
    });

    function createTable() {
        var sql = "CREATE TABLE IF NOT EXISTS customers (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.send("Table created")
            connection.end(); // Close the connection after the operation is done
        });
    }
})


app.get('/insert-data', function (req, res) {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        insert(); // Call the function to create the table once connected
    });

    function insert() {
        var sql = "INSERT INTO `customers` (`name`, `address`) VALUES ('haider', 'karachi')";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.send("Data inserted")
            connection.end(); // Close the connection after the operation is done
        });
    }
})

app.get('/delete', function (req, res) {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        remove(); // Call the function to create the table once connected
    });

    function remove() {
        var sql = "DELETE FROM customers WHERE name='haider'";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.send("Data Deleted")
            connection.end(); // Close the connection after the operation is done
        });
    }
})

app.get('/update', function (req, res) {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        update(); // Call the function to create the table once connected
    });

    function update() {
        var sql = "UPDATE customers SET name = 'Alfred Schmidt' WHERE name = 'haider'"
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.send("Data Updated")
            connection.end(); // Close the connection after the operation is done
        });
    }
})

app.listen(port, function () {
    console.log(`${port} -> This port has been start`);
});