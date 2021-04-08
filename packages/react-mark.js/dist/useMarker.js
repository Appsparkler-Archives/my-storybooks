"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _markEs = _interopRequireDefault(require("mark.js/dist/mark.es6.min"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var unmark = function unmark(marker) {
  return new Promise(function (done) {
    marker.unmark({
      done: done
    });
  });
};

var useMarker = function useMarker() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$mark = _ref.mark,
      mark = _ref$mark === void 0 ? "" : _ref$mark,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      _ref$unmarkOptions = _ref.unmarkOptions,
      unmarkOptions = _ref$unmarkOptions === void 0 ? {} : _ref$unmarkOptions,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "mark" : _ref$type;

  var markerRef = _react["default"].useRef();

  var _React$useState = _react["default"].useState({
    marker: null
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      markerState = _React$useState2[0],
      setMarkerState = _React$useState2[1];

  _react["default"].useEffect(function () {
    if (markerRef.current) {
      setMarkerState(function (currentState) {
        return _objectSpread(_objectSpread({}, currentState), {}, {
          marker: new _markEs["default"](markerRef.current)
        });
      });
    }
  }, []);

  _react["default"].useEffect(function () {
    if (markerState.marker) {
      unmark(markerState.marker, unmarkOptions).then(function () {
        markerState.marker[type](mark, options);
      });
    }
  }, [mark, options, markerState.marker, type, unmarkOptions]);

  return _objectSpread({
    markerRef: markerRef
  }, markerState);
};

var _default = useMarker;
exports["default"] = _default;