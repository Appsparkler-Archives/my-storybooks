"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useMarker2 = _interopRequireDefault(require("../useMarker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Marker = function Marker(_ref) {
  var children = _ref.children,
      mark = _ref.mark,
      options = _ref.options,
      unmarkOptions = _ref.unmarkOptions;

  var _useMarker = (0, _useMarker2["default"])({
    mark: mark,
    options: options,
    unmarkOptions: unmarkOptions,
    type: 'mark'
  }),
      markerRef = _useMarker.markerRef;

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: markerRef
  }, children);
};

Marker.propTypes = {
  /** mark options as documented [in the options section](https://markjs.io/#mark)*/
  options: _propTypes["default"].object,

  /** A string or an array of strings - for ex `world` or `["world", "foo"]` */
  mark: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]).isRequired,

  /** un-mark options as documented [in the options section](https://markjs.io/#unmark)*/
  unmarkOptions: _propTypes["default"].object,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node])
};
Marker.defaultProps = {
  /** For a full list of options; visit **[markregexp](https://markjs.io/#markregexp)** */
  options: {},
  unmarkOptions: {}
};

var _default = /*#__PURE__*/_react["default"].memo(Marker);

exports["default"] = _default;