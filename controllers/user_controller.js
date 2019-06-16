var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var con = 'mongodb+srv://priyanka:ginni0207@cluster0-gbjzd.mongodb.net/mydb?retryWrites=true&w=majority';
let jsonData = require('./convertcsv.json');
var invoice = [];
var result = [];

exports.largestInvoice = function(req, res){
  // mongoose.connect(con, (err, db) => {
  //     db.collection('sales').find().toArray(function(err, data) {
  //       if (err) throw err;
  //       console.log(data);
  //       var lookup = {};
  //       var items = data;
  //       var totalPrice = ''
  //
  //       for (var item, i = 0; item = items[i++];) {
  //         var name = item.order_for;
  //
  //         if (!this[item.order_for]) {
  //           this[item.order_for] = { name: item.order_for, total_price: 0 };
  //           result.push(this[item.order_for]);
  //          }
  //          this[item.order_for].total_price += item.total_price;
  //       }
  //
  //       result = sort_by_key(result, 'total_price');
  //       res.status(200).send(result);
  //       db.close();
  //     });
  //
  // });

          var lookup = {};
          var items = jsonData;

          for (var item, i = 0; item = items[i++];) {
            var name = item.order_for;

            if (!this[item.order_for]) {
              this[item.order_for] = { name: item.order_for, total_price: 0 };
              invoice.push(this[item.order_for]);
             }
             this[item.order_for].total_price += item.total_price;
          }

          invoice = sort_by_key(invoice, 'total_price');
          res.status(200).send(invoice);

}

function sort_by_key(array, key)
{
   return array.sort(function(a, b)
   {
    var x = a[key]; var y = b[key];
    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
   });
}

exports.largestUnits = function(req, res){
  // mongoose.connect(con, (err, db) => {
  //     db.collection('sales').find().toArray(function(err, data) {
  //       if (err) throw err;
  //       console.log(data);
  //     var lookup = {};
  //     var items = jsonData;
  //
  //     for (var item, i = 0; item = items[i++];) {
  //       var name = item.order_for;
  //
  //       if (!this[item.order_for]) {
  //         this[item.order_for] = { name: item.order_for, total_units: 0 };
  //         units.push(this[item.order_for]);
  //        }
  //        this[item.order_for].total_units += Math.ceil(item.total_units);
  //     }
  //
  //     units = sort_by_key(units, 'total_units');
  //     res.status(200).send(units);
  //     db.close();
  //   });
  // })
  var lookup = {};
  var items = jsonData;

  for (var item, i = 0; item = items[i++];) {
    var name = item.order_for;

    if (!this[item.order_for]) {
      this[item.order_for] = { name: item.order_for, total_units: 0 };
      result.push(this[item.order_for]);
     }
     this[item.order_for].total_units += Math.ceil(item.total_units);
  }

  result = sort_by_key(result, 'total_units');
  res.status(200).send(result);
}
