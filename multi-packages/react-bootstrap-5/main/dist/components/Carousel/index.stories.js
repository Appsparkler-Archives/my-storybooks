"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;

var _index = _interopRequireDefault(require("./index"));

var _decorator = _interopRequireDefault(require("../../hoc/Carousel/decorator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Template = function Template() {
  return /*#__PURE__*/React.createElement(_index["default"], null);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {};
var Story = {
  title: "Components/Carousel",
  component: _index["default"],
  decorators: [_decorator["default"]]
};
var _default = Story;
exports["default"] = _default;