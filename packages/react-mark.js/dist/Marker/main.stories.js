"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithMarkOptions = exports.MarkingAnArrayOfStrings = exports.MarkingASingleString = exports.Example1 = exports.hookStory = void 0;

var _react = _interopRequireDefault(require("react"));

var _markEs = _interopRequireDefault(require("mark.js/dist/mark.es6.min"));

var _ = _interopRequireDefault(require("./"));

var _useMarker = _interopRequireDefault(require("../useMarker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import Mark from "mark.js";
var Story = {
  title: "Components/Marker-2",
  component: _["default"]
};

var hookStory = function hookStory() {
  // const { markerRef, markJsInstance } = useMarker();
  var ref = _react["default"].useRef();

  var _React$useState = _react["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      marker = _React$useState2[0],
      setMarker = _React$useState2[1];

  _react["default"].useEffect(function () {
    setMarker(function () {
      return new _markEs["default"](ref.current);
    });
  }, []);

  var handleClick = _react["default"].useCallback(function () {
    marker.unmark();
  }, [marker]);

  var markIt = _react["default"].useCallback(function () {
    marker.mark("ea aute");
  }, [marker]);

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref
  }, "Laboris voluptate nostrud sunt consequat est exercitation labore occaecat incididunt velit duis. Laborum duis eiusmod dolore qui duis ad Lorem nisi velit qui. Nostrud esse proident ullamco ad elit aliqua reprehenderit ea aute. Anim aute sint occaecat sint.", /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleClick
  }, "Unmark ", typeof markJsInstance === "undefined" ? "undefined" : _typeof(markJsInstance)), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: markIt
  }, "Mark"));
};

exports.hookStory = hookStory;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_["default"], args);
};

Template.args = {
  mark: "eu",
  children: "Cillum proident eu eiusmod incididunt pariatur. Ullamco qui deserunt ut reprehenderit cupidatat cupidatat nisi non occaecat non commodo. Magna incididunt eu laboris laboris labore. Sit duis ullamco qui nostrud aliqua do consectetur do incididunt eiusmod nulla consectetur."
};
var Example1 = Template.bind({});
exports.Example1 = Example1;
Example1.args = Template.args;
Example1.storyName = "String";
var MarkingASingleString = Template.bind({});
exports.MarkingASingleString = MarkingASingleString;
MarkingASingleString.args = _objectSpread(_objectSpread({}, Template.args), {}, {
  mark: "Sit"
});
var MarkingAnArrayOfStrings = Template.bind({});
exports.MarkingAnArrayOfStrings = MarkingAnArrayOfStrings;
MarkingAnArrayOfStrings.args = _objectSpread(_objectSpread({}, Template.args), {}, {
  mark: ["Sit", "etur", "nostrud"]
});
var WithMarkOptions = Template.bind({});
exports.WithMarkOptions = WithMarkOptions;
WithMarkOptions.args = _objectSpread(_objectSpread({}, Template.args), {}, {
  mark: "orl",
  children: /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", null, "Hello World"), /*#__PURE__*/_react["default"].createElement("p", null, "Hello World")),
  options: {
    exclude: ["h3"],
    accuracy: "complementary"
  }
});
var _default = Story;
exports["default"] = _default;