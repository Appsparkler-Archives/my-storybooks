"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithMarkOptions = exports.MarkingAnArrayOfStrings = exports.MarkingASingleString = exports.Example1 = void 0;

var _ = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Story = {
  title: "Components/Marker",
  component: _["default"]
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(_["default"], args);
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
  children: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Hello World"), /*#__PURE__*/React.createElement("p", null, "Hello World")),
  options: {
    exclude: ["h3"],
    accuracy: "complementary"
  }
});
var _default = Story;
exports["default"] = _default;