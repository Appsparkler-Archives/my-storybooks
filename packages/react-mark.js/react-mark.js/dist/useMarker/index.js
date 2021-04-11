"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _setupMarker2 = _interopRequireDefault(require("../setupMarker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import MarkJS from "mark.js/dist/mark.es6.min";
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

  var _setupMarker = (0, _setupMarker2["default"])(),
      marker = _setupMarker.marker,
      markerRef = _setupMarker.markerRef;

  _react["default"].useEffect(function () {
    if (marker) {
      unmark(marker, unmarkOptions).then(function () {
        marker[type](mark, options);
      });
    }
  }, [mark, options, marker, type, unmarkOptions]);

  return {
    markerRef: markerRef,
    marker: marker
  };
};

var _default = useMarker;
exports["default"] = _default;