"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useMarker2 = _interopRequireDefault(require("../useMarker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RangesMarker = function RangesMarker(_ref) {
  var children = _ref.children,
      mark = _ref.mark,
      options = _ref.options,
      unmarkOptions = _ref.unmarkOptions;

  var _useMarker = (0, _useMarker2["default"])({
    mark: mark,
    options: options,
    unmarkOptions: unmarkOptions,
    type: "markRanges"
  }),
      markerRef = _useMarker.markerRef;

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: markerRef
  }, children);
};

RangesMarker.propTypes = {
  /** mark options as documented [in the options section](https://markjs.io/#markregexp)*/
  options: _propTypes["default"].object,

  /** An array */
  mark: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    start: _propTypes["default"].number,
    length: _propTypes["default"].number
  })).isRequired,

  /** un-mark options as documented [in the options section](https://markjs.io/#unmark)*/
  unmarkOptions: _propTypes["default"].object,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node])
};
RangesMarker.defaultProps = {
  /** For a full list of options; visit **[markregexp](https://markjs.io/#markregexp)** */
  options: {},
  unmarkOptions: {}
};

var _default = /*#__PURE__*/_react["default"].memo(RangesMarker);

exports["default"] = _default;