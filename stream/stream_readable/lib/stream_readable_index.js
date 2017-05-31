'use strict';

var ToReadable = require('./stream_readable');

var iterator = function (limit) {
    return {
        next: function next() {
            if (limit--) {
                return { done: false, value: limit + Math.random() };
            }
            return { done: true };
        }
    };
}(1e10);

var readable = new ToReadable(iterator);

// 监听`data`事件，一次获取一个数据
readable.on('data', function (data) {
    return process.stdout.write(data);
});

// 所有数据均已读完
readable.on('end', function () {
    return process.stdout.write('DONE');
});