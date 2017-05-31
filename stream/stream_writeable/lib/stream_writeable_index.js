'use strict';

// const Writable = require('stream').Writable

var Writable = require('./stream_writeable');

var writable = new Writable();

// 所有数据均已写入底层
writable.on('finish', function () {
  return process.stdout.write('DONE' + '\n');
});

// 将一个数据写入流中
writable.write('a' + '\n');
writable.write('b' + '\n');
writable.write('c' + '\n');

// 再无数据写入流时，需要调用`end`方法
writable.end();