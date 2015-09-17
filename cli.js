#!/usr/bin/env node
'use strict';
var meow = require('meow');
var fileCloudAliossUploader = require('./');
var path = require('path');
var fs = require('fs');


var cli = meow({
  help: [
    'Usage',
    '  foss filename config [--type sha1] [--case upper]',
    '',
    'Example',
    '  foss a.jpg alioss.conf'
  ].join('\n')
});


if (cli.input[0] && cli.input[1]) {
  var filename = path.resolve(process.env.PWD, cli.input[1]);
  if (!fs.existsSync(filename)) {
    throw Error(filename + " not exists!");
  }
  var conf = JSON.parse(String(fs.readFileSync(filename)));
  fileCloudAliossUploader(function (error, data) {
      if (error) {
        console.log('Errors Occur:' + error);
      } else {
        console.log('ETag: ' + data.ETag);
        console.log('RequestId: ' + data.RequestId);
      }
    },
    path.resolve(process.env.PWD, cli.input[0]),
    conf,
    cli.flags.type,
    cli.flags.case === 'upper'
  );
} else {
  if (!cli.input[0]) {
    console.log("specify a file to be copied!");
    return;
  }
  if (!cli.input[1]) {
    console.log("specify a configure file!");
  }
}
