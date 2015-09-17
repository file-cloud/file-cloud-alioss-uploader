'use strict';
var assert = require('assert');
var path = require('path');
var fileCloudAliossUploader = require('../');
var validator = require('validator');

describe('file-cloud-alioss-uploader node module', function () {
  it('must have at least one test', function (done) {
    var config = {
      accessKeyId: process.env.ALIYUN_OSS_ACCESS_KEY_ID,
      secretAccessKey: process.env.ALIYUN_OSS_ACCESS_KEY_SECRET,
      endpoint: process.env.ALIYUN_OSS_ENDPOINT,
      apiVersion: process.env.ALIYUN_OSS_APP_VERSION,
      Bucket: process.env.ALIYUN_OSS_BUCKET
    };
    fileCloudAliossUploader(function (error, data) {
      assert.equal(true, !error);
      assert.equal(true, validator.isHexadecimal(data.ETag.replace(/\"/g, "")));
      assert.equal(true, validator.isHexadecimal(data.RequestId));
      done();
    }, path.resolve(__dirname, 'assets/a.jpg'), config);
  });
});
