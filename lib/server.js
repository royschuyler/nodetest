var http = require('http');
var https = require('https');
var request = require('request');
var $ = require('cheerio');


module.exports = function(port) {
  http.createServer(function (req, res) {
   if (req.method === 'GET' && req.url === '/hello') {
    res.end('Hello World');
   }


   else if (req.method === 'GET' && req.url === '/news') {
     request.get('http://reddit.com', function (err, xhr, body) {
      res.end(body);
     });
   }


  // if (req.method === 'GET' && req.url === '/starwarsmovies') {

  //   // URL_log = '$(' + '/startwarsmovies' + ')'
  //   // METHOD_log = '$(' + req.method + ')'
  //   // var userAgent = req.rawHeaders[11];
  //   // console.log(presentDate, chalk.blue(METHOD_log), chalk.blue(URL_log), userAgent)

  //   http.get('http://swapi.co/api/films/')
  //     .on('response', function (xhr) {
  //       var body = '';

  //       xhr
  //         .on('data', function (chunk) {
  //           body += chunk;
  //         })

  //         .on('end', function () {
  //           var data = JSON.parse(body);

  //           data.results.forEach(function (r) {
  //             res.write(r.title + '\n');
  //           });

  //           res.end();
  //         });
  //     });
  // } else if (req.method === 'GET' && req.url === '/weather') {

  //   URL_log = '$(' + '/weather' + ')'
  //   METHOD_log = '$(' + req.method + ')'
  //   var userAgent = req.rawHeaders[11];
  //   console.log(presentDate, chalk.blue(METHOD_log), chalk.blue(URL_log), userAgent)


  //   var API_KEY = '9c9ff8425680d9e5d3b202ecb5ff8114';
  //   var LOCATION = '36.1658,-86.7777';

  //   res.writeHeader(200, {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   https.get('https://api.forecast.io/forecast/' + API_KEY + '/' + LOCATION)
  //     .on('response', function (xhr) {
  //       xhr.pipe(res);
  //       // xhr
  //       //   .on('data', function (chunk) {
  //       //     res.write(chunk);
  //       //   })
  //       //   .on('end', function () {
  //       //     res.end();
  //       //   });
  //     });
  // }
  // else if (req.url === '/cal'){
  //   http.request
  //     res.write('heyyy')

  // }


  else {
    res.writeHead(403);
    res.end('Access Denied!');
  }

}).listen(port);
}

// var chalk = require('chalk');
// console.log(chalk.yellow('Starting up server, serving on: http://localhost:1337/'))
// var date = new Date().toString()
// var presentDate = '[' + date + ']'





