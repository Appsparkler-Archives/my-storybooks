"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var WaveClock = /*#__PURE__*/function (_React$Component) {
  _inherits(WaveClock, _React$Component);

  var _super = _createSuper(WaveClock);

  function WaveClock(man) {
    var _this;

    _classCallCheck(this, WaveClock);

    _this = _super.call(this, man);
    _this.state = {
      date: {}
    };
    return _this;
  }

  _createClass(WaveClock, [{
    key: "getInitialState",
    value: function getInitialState() {
      return this.getDate();
    }
  }, {
    key: "getDate",
    value: function getDate() {
      var newdate = new Date();
      var date = {};
      date.hours = newdate.getHours();
      date.minutes = newdate.getMinutes();
      date.seconds = newdate.getSeconds();
      return date;
    }
  }, {
    key: "updateDate",
    value: function updateDate() {
      this.setState(this.getDate());
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var that = this;
      setInterval(function () {
        that.updateDate();
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "App"
      }, /*#__PURE__*/_react["default"].createElement(Marker, {
        type: "hours",
        time: this.state.hours
      }), /*#__PURE__*/_react["default"].createElement(Marker, {
        type: "minutes",
        time: this.state.minutes
      }), /*#__PURE__*/_react["default"].createElement(Marker, {
        type: "seconds",
        time: this.state.seconds
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "text-overlay"
      }, /*#__PURE__*/_react["default"].createElement(Timer, {
        type: "hours",
        time: this.state.hours
      }), /*#__PURE__*/_react["default"].createElement(Timer, {
        type: "minutes",
        time: this.state.minutes
      }), /*#__PURE__*/_react["default"].createElement(Timer, {
        type: "seconds",
        time: this.state.seconds
      })));
    }
  }]);

  return WaveClock;
}(_react["default"].Component);

var Marker = /*#__PURE__*/function (_React$Component2) {
  _inherits(Marker, _React$Component2);

  var _super2 = _createSuper(Marker);

  function Marker(man) {
    _classCallCheck(this, Marker);

    return _super2.call(this, man);
  }

  _createClass(Marker, [{
    key: "render",
    value: function render() {
      var measurement = 24;

      switch (this.props.type) {
        case "hours":
          measurement = 24;
          break;

        case "minutes":
          measurement = 60;
          break;

        case "seconds":
          measurement = 60;
          break;
      }

      var offset = this.props.time / measurement * 100 + "%";
      var opacity = this.props.time / measurement * 100 / 100;
      var columnClasses = "Column Column--" + this.props.type;
      var typeClasses = "Marker Marker--" + this.props.type;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: columnClasses
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: typeClasses,
        style: {
          height: offset,
          opacity: opacity
        }
      }));
    }
  }]);

  return Marker;
}(_react["default"].Component);

var Timer = /*#__PURE__*/function (_React$Component3) {
  _inherits(Timer, _React$Component3);

  var _super3 = _createSuper(Timer);

  function Timer(man) {
    _classCallCheck(this, Timer);

    return _super3.call(this, man);
  }

  _createClass(Timer, [{
    key: "render",
    value: function render() {
      var time;

      if (this.props.time < 10) {
        time = "0" + this.props.time;
      } else {
        time = this.props.time;
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.type
      }, time);
    }
  }]);

  return Timer;
}(_react["default"].Component);

Marker.propTypes = {
  time: _propTypes["default"].number,
  type: _propTypes["default"].string
};
Timer.propTypes = {
  time: _propTypes["default"].number,
  type: _propTypes["default"].string
};
var _default = WaveClock;
exports["default"] = _default;