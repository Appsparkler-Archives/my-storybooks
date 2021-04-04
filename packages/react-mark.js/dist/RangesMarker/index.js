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

var RangesMarker = function RangesMarker(_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? As : _ref$as,
      children = _ref.children,
      mark = _ref.mark,
      options = _ref.options,
      unmarkOptions = _ref.unmarkOptions;
  var markerRef = (0, _useMarker["default"])({
    mark: mark,
    options: options,
    unmarkOptions: unmarkOptions,
    type: "markRanges"
  });
  return /*#__PURE__*/_react["default"].createElement(As, _extends({
    ref: markerRef
  }, props), children);
};

RangesMarker.propTypes = {
  /** mark options as documented [in the options section](https://markjs.io/#markregexp)*/
  options: _propTypes["default"].object,

  /** An array */
  mark: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    start: _propTypes["default"].number,
    length: _propTypes["default"].number
  })).isRequired,
  as: _propTypes["default"].oneOf([_propTypes["default"].element, _propTypes["default"].string]),

  /** un-mark options as documented [in the options section](https://markjs.io/#unmark)*/
  unmarkOptions: _propTypes["default"].object,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node])
};
RangesMarker.defaultProps = {
  /** For a full list of options; visit **[markregexp](https://markjs.io/#markregexp)** */
  options: {},
  as: "div",
  unmarkOptions: {}
};

var _default = /*#__PURE__*/_react["default"].memo(RangesMarker);

exports["default"] = _default;