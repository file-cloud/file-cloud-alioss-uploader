#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Aliyun oss uploader


## Install

```sh
$ npm install --save file-cloud-alioss-uploader
```


## Usage

```js
var fileCloudAliossUploader = require('file-cloud-alioss-uploader');

    var config = {
      accessKeyId: process.env.ALIYUN_OSS_ACCESS_KEY_ID,
      secretAccessKey: process.env.ALIYUN_OSS_ACCESS_KEY_SECRET,
      endpoint: process.env.ALIYUN_OSS_ENDPOINT,
      apiVersion: process.env.ALIYUN_OSS_APP_VERSION,
      Bucket: process.env.ALIYUN_OSS_BUCKET
    };
    fileCloudAliossUploader(function (error, data) {
      //error: false
      //data.ETag
      //data.RequestId
    }, path.resolve(__dirname, 'assets/a.jpg'), config);
```


```sh
$ npm install --global foss
$ foss --help

$ foss  a.txt aliyun.json

$ foss a.jpg aliyun.json --type md5

$ foss a.jpg aliyun.json --type md5 --case upper

```


## License

MIT © [calidion](blog.3gcnbeta.com)


[npm-image]: https://badge.fury.io/js/file-cloud-alioss-uploader.svg
[npm-url]: https://npmjs.org/package/file-cloud-alioss-uploader
[travis-image]: https://travis-ci.org/file-cloud/file-cloud-alioss-uploader.svg?branch=master
[travis-url]: https://travis-ci.org/file-cloud/file-cloud-alioss-uploader
[daviddm-image]: https://david-dm.org/file-cloud/file-cloud-alioss-uploader.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/file-cloud/file-cloud-alioss-uploader
