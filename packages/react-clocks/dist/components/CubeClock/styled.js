'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

const _styledComponents = _interopRequireDefault(require('styled-components'));

const _component = _interopRequireDefault(require('./component'));

let _templateObject;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  } return Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
}

const StyledCubeClock = (0, _styledComponents['default'])(_component['default'])(_templateObject || (_templateObject = _taggedTemplateLiteral([''])));
const _default = StyledCubeClock;
exports['default'] = _default;
