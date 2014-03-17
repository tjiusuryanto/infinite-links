var faker = require('../libs/faker');

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Demo', faker: faker });
};