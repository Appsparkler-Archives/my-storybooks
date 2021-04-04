"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var outline = _ref.outline,
      type = _ref.type,
      size = _ref.size,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["outline", "type", "size", "children", "className"]);

  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: "btn btn-".concat(size, " btn").concat(outline ? "-outline" : "", "-").concat(type, " ").concat(className)
  }, props), children);
};

Button.propTypes = {
  children: _propTypes["default"].node,
  outline: _propTypes["default"].bool,
  type: _propTypes["default"].oneOf(["primary", "secondary", "success", "info", "warning", "danger", "dark", "light", "link"]),
  size: _propTypes["default"].oneOf(["sm", "md", "lg"]),
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool
};
Button.defaultProps = {
  outline: false,
  type: "primary",
  disabled: false,
  className: "",
  size: "md"
};
var _default = Button;
exports["default"] = _default;