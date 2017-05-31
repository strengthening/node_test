'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Readable = require('stream').Readable;

var ToReadable = function (_Readable) {
    _inherits(ToReadable, _Readable);

    function ToReadable(iterator) {
        _classCallCheck(this, ToReadable);

        var _this = _possibleConstructorReturn(this, (ToReadable.__proto__ || Object.getPrototypeOf(ToReadable)).call(this));

        _this.iterator = iterator;
        return _this;
    }

    // 子类需要实现该方法
    // 这是生产数据的逻辑


    _createClass(ToReadable, [{
        key: '_read',
        value: function _read() {
            var _this2 = this;

            var res = this.iterator.next();
            if (res.done) {
                // 数据源已枯竭，调用`push(null)`通知流
                return this.push(null);
            }

            setTimeout(function () {
                // 通过`push`方法将数据添加到流中
                _this2.push(res.value + '\n');
            }, 0);
        }
    }]);

    return ToReadable;
}(Readable);

module.exports = ToReadable;