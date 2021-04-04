"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useMarker = _interopRequireDefault(require("../useMarker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RegExpMarker = function RegExpMarker(_ref) {
  var As = _ref.as,
      children = _ref.children,
      mark = _ref.mark,
      options = _ref.options,
      unmarkOptions = _ref.unmarkOptions,
      props = _objectWithoutProperties(_ref, ["as", "children", "mark", "options", "unmarkOptions"]);

  var markerRef = (0, _useMarker["default"])({
    mark: mark,
    options: options,
    unmarkOptions: unmarkOptions,
    type: "markRegExp"
  });
  return /*#__PURE__*/_react["default"].createElement(As, _extends({
    ref: markerRef
  }, props), children);
};

RegExpMarker.propTypes = {
  /** mark options as documented [in the options section](https://markjs.io/#markregexp)*/
  options: _propTypes["default"].object,

  /** A Regular Expression - for ex `/\.js/g` */
  mark: _propTypes["default"].instanceOf(RegExp).isRequired,

  /** un-mark options as documented [in the options section](https://markjs.io/#unmark)*/
  unmarkOptions: _propTypes["default"].object,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node])
};
RegExpMarker.defaultProps = {
  /** For a full list of options; visit **[markregexp](https://markjs.io/#markregexp)** */
  options: {},
  unmarkOptions: {},
  as: "div"
};
var _default = RegExpMarker;
exports["default"] = _default;