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

var BreadcrumbItem = function BreadcrumbItem(_ref) {
  var text = _ref.text,
      active = _ref.active,
      ariaLabel = _ref.ariaLabel,
      href = _ref.href;
  return /*#__PURE__*/React.createElement("li", {
    className: "breadcrumb-item ".concat(active ? "active" : ""),
    "aria-current": ariaLabel
  }, !active ? /*#__PURE__*/React.createElement("a", {
    href: href
  }, text) : text);
};

var BreadcrumbList = function BreadcrumbList(_ref2) {
  var items = _ref2.items;
  return items.map(function (_ref3) {
    var id = _ref3.id,
        item = _objectWithoutProperties(_ref3, ["id"]);

    return /*#__PURE__*/React.createElement(BreadcrumbItem, _extends({
      key: id
    }, item));
  });
};

var Breadcrumb = function Breadcrumb(_ref4) {
  var items = _ref4.items,
      ariaLabel = _ref4.ariaLabel;
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": ariaLabel
  }, /*#__PURE__*/React.createElement("ol", {
    className: "breadcrumb"
  }, /*#__PURE__*/React.createElement(BreadcrumbList, {
    items: items
  })));
};

Breadcrumb.propTypes = {
  ariaLabel: _propTypes["default"].string,
  items: _propTypes["default"].arrayOf({
    id: _propTypes["default"].string,
    text: _propTypes["default"].string,
    active: _propTypes["default"].bool,
    ariaLabel: _propTypes["default"].string
  })
};
var _default = Breadcrumb;
exports["default"] = _default;