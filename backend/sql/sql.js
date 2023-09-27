const mysql = require('mysql');

const connection = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password': '',
    "database": 'memolist_2.0',
});  

function sqlQuery(query, callback){
    connection.connect(connError => {
        if(connError){
            console.log(connError)
            throw new Error("Connection error " + connError);
        }
        connection.query(query, (error, result) => {
            if(error){
                console.log(error)
                throw new Error("Query error " + error);
            }
            
            callback(result);
            connection.end();
        });
    });
    }
module.exports = sqlQuery;