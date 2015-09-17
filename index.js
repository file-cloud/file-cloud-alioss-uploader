'use strict';
var fs = require('fs');
var path = require('path');
var fash = require('file-hash');

module.exports = function (next, filename, aliossConf, type, upper) {
  if (!fs.existsSync(filename)) {
    throw Error(filename + " not exists");
  }
  fash(function (hash) {
      var hashNamedFile = hash + path.extname(filename);
      var body = fs.readFileSync(filename);
      var ALI = require('aliyun-sdk');
      var oss = new ALI.OSS({
        accessKeyId: aliossConf.accessKeyId,
        secretAccessKey: aliossConf.secretAccessKey,
        endpoint: aliossConf.endpoint,
        apiVersion: aliossConf.apiVersion
      });

      oss.putObject({
          Bucket: aliossConf.Bucket,
          Key: hashNamedFile,                 // 注意, Key 的值不能以 / 开头, 否则会返回错误.
          Body: body
        }, next);
    },
    filename,
    type,
    upper
  );

};
