const Writeable = require('stream').Writable


class toWriteable extends Writeable {

    constructor(){
        super()    
    }

    // 实现`_write`方法
    // 这是将数据写入底层的逻辑
    
    _write(data, enc, next){
        // 将流中的数据写入底层
        process.stdout.write(data.toString().toUpperCase())
        // 写入完成时，调用`next()`方法通知流传入下一个数据
        process.nextTick(next)
    }

}

module.exports = toWriteable;