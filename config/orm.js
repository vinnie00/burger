var connection = require("./connection");
const { query } = require("express");

var orm = {
    all: function (table, cb) {
        let grabAll = `select * from ${table};`
        connection.query(grabAll, function(err, result) {
            if (err) {
                throw err;
            } 
            cb(result)
        })
    },

    create: function(table, columns, values, cb) {
        console.log(values)
        let insertData = `insert into ${table} (${columns.toString()}) values (${printQuestionMarks(values.length)})`
        connection.query(insertData, values, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        })
    },

    update: function(table, objColVal, condition, cb) {
        let updateData = `Update ${table} set ${objToSql(objColVal)}  where ${condition} `
        connection.query(updateData, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        })
    }
}

function printQuestionMarks(num) {
    var arr = []
    for (let i = 0; i < num; i++) {
        arr.push("?")
    } return arr.toString();
}

function objToSql(ob) {
    let arr = []
    for (let key in ob) {
        arr.push(key + "=" + ob[key])
    } return arr.toString();
}

module.exports = orm