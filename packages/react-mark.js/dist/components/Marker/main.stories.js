'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = exports.WithMarkOptions = exports.WithoutOtions = void 0;

const _ = _interopRequireDefault(require('./'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}

function ownKeys(object, enumerableOnly) {
  const keys = Object.keys(object); if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    } keys.push.apply(keys, symbols);
  } return keys;
}

function _objectSpread(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  } return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  } return obj;
}

const Story = {
  title: 'Mark.js/Marker',
  component: _['default'],
};

const Template = function Template(args) {
  return /* #__PURE__*/React.createElement(_['default'], args);
};

Template.args = {
  mark: 'oo',
  children: 'Foo Boo Koo',
};
const WithoutOtions = Template.bind({});
exports.WithoutOtions = WithoutOtions;
WithoutOtions.args = Template.args;
const WithMarkOptions = Template.bind({});
exports.WithMarkOptions = WithMarkOptions;
WithMarkOptions.args = _objectSpread(_objectSpread({}, Template.args), {}, {
  mark: 'orl',
  children: /* #__PURE__*/React.createElement('div', null, /* #__PURE__*/React.createElement('h3', null, 'Hello World'), /* #__PURE__*/React.createElement('p', null, 'Hello World')),
  options: {
    exclude: ['h3'],
    accuracy: 'complementary',
  },
});
const _default = Story;
exports['default'] = _default;
