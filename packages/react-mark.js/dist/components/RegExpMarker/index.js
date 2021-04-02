'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _useMarker2 = _interopRequireDefault(require('../useMarker'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}

const RegExpMarker = function RegExpMarker(_ref) {
  const children = _ref.children;
  const mark = _ref.mark;
  const options = _ref.options;
  const unmarkOptions = _ref.unmarkOptions;

  const _useMarker = (0, _useMarker2['default'])({
    mark: mark,
    options: options,
    unmarkOptions: unmarkOptions,
    type: 'markRegExp',
  });
  const markerRef = _useMarker.markerRef;

  return /* #__PURE__*/_react['default'].createElement('div', {
    ref: markerRef,
  }, children);
};

RegExpMarker.propTypes = {
  /** mark options as documented [in the options section](https://markjs.io/#markregexp)*/
  options: _propTypes['default'].object,

  /** A Regular Expression - for ex `/\.js/g` */
  mark: _propTypes['default'].instanceOf(RegExp).isRequired,

  /** un-mark options as documented [in the options section](https://markjs.io/#unmark)*/
  unmarkOptions: _propTypes['default'].object,
  children: _propTypes['default'].oneOfType([_propTypes['default'].arrayOf(_propTypes['default'].node), _propTypes['default'].node]),
};
RegExpMarker.defaultProps = {
  /** For a full list of options; visit **[markregexp](https://markjs.io/#markregexp)** */
  options: {},
  unmarkOptions: {},
};

const _default = /* #__PURE__*/_react['default'].memo(RegExpMarker);

exports['default'] = _default;
