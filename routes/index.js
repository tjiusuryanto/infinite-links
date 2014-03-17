var path = require('path');
var faker = require(path.join(__dirname, "../libs/faker"));

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Demo', faker: faker });
};