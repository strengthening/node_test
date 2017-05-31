var ToReadable = require('./stream_readable')

const iterator = function (limit) {
    return {
        next: function () {
            if (limit--) {
                return { done: false, value: limit + Math.random() }
            }
            return { done: true }
        }
    }
}(1e10)

const readable = new ToReadable(iterator)

// 监听`data`事件，一次获取一个数据
readable.on('data', data => process.stdout.write(data))

// 所有数据均已读完
readable.on('end', () => process.stdout.write('DONE'))