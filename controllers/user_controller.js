var express = require('express');
var router = express.Router();
let jsonData = require('./convertcsv.json');

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
     var result = [];
     setTimeout(function () {
       var lookup = {};
       var items = jsonData;

       for (var item, i = 0; item = items[i++];) {
         var name = item.order_for;

         if (!this[item.order_for]) {
           this[item.order_for] = { name: item.order_for, total_price: 0 };
           result.push(this[item.order_for]);
          }
          this[item.order_for].total_price += item.total_price;
       }

       result = sort_by_key(result, 'total_price');
       res.status(200).send(result);
     }, 100)

}

function sort_by_key(array, key)
{
   return array.sort(function(a, b)
   {
    var x = a[key]; var y = b[key];
    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
   });
}
