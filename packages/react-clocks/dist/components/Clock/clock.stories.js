"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.abcd = exports.clock = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Template = function Template(args) {
  var _React$useState = _react["default"].useState({
    timestamp: Date.now(),
    intervalId: null,
    intervalIds: []
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var startClock = _react["default"].useCallback(function () {
    var intervalId = setInterval(function () {
      console.log('tick');
      setState(function (currentState) {
        return _objectSpread(_objectSpread({}, currentState), {}, {
          timestamp: Date.now()
        });
      });
    }, 1000);
    setState(function (currentState) {
      return _objectSpread(_objectSpread({}, currentState), {}, {
        intervalId: intervalId,
        intervalIds: [].concat(_toConsumableArray(currentState.intervalIds), [intervalId])
      });
    });
  }, []);

  var stopClock = _react["default"].useCallback(function () {
    if (state.intervalId) {
      setState(function (currentState) {
        clearInterval(currentState.intervalId);
        return _objectSpread(_objectSpread({}, currentState), {}, {
          intervalId: null
        });
      });
    }
  }, [state.intervalId]);

  _react["default"].useEffect(function () {
    if (!state.intervalId) {
      startClock();
    }

    return function () {
      return stopClock();
    };
  }, [state.intervalId]);

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("pre", null, JSON.stringify(state, null, 2)), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    timestamp: state.timestamp
  }));
};

Template.args = {};
var clock = Template.bind({});
exports.clock = clock;
clock.args = Template.args;
var abcd = Template.bind({});
exports.abcd = abcd;
abcd.args = Template.args;
var Story = {
  title: 'Clocks/Sieko Analog 123 ',
  component: _index["default"]
};
var _default = Story;
exports["default"] = _default;