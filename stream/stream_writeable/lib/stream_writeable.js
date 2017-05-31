'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Writeable = require('stream').Writable;

var toWriteable = function (_Writeable) {
    _inherits(toWriteable, _Writeable);

    function toWriteable() {
        _classCallCheck(this, toWriteable);

        return _possibleConstructorReturn(this, (toWriteable.__proto__ || Object.getPrototypeOf(toWriteable)).call(this));
    }

    // 实现`_write`方法
    // 这是将数据写入底层的逻辑

    _createClass(toWriteable, [{
        key: '_write',
        value: function _write(data, enc, next) {
            // 将流中的数据写入底层
            process.stdout.write(data.toString().toUpperCase());
            // 写入完成时，调用`next()`方法通知流传入下一个数据
            process.nextTick(next);
        }
    }]);

    return toWriteable;
}(Writeable);

module.exports = toWriteable;