'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
  } return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

const _react = _interopRequireDefault(require('react'));

require('./styles.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (let i = 0; i < props.length; i++) {
    const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  } subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}}); if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p; return o;
  }; return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  const hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() {
    const Super = _getPrototypeOf(Derived); let result; if (hasNativeReflectConstruct) {
      const NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    } return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  } return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})); return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }; return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  } return obj;
}

const WaveClock = /* #__PURE__*/function(_React$Component) {
  _inherits(WaveClock, _React$Component);

  const _super = _createSuper(WaveClock);

  function WaveClock(man) {
    let _this;

    _classCallCheck(this, WaveClock);

    _this = _super.call(this, man);

    _defineProperty(_assertThisInitialized(_this), 'state', {
      date: {},
    });

    return _this;
  }

  _createClass(WaveClock, [{
    key: 'getInitialState',
    value: function getInitialState() {
      return this.getDate();
    },
  }, {
    key: 'getDate',
    value: function getDate() {
      const newdate = new Date();
      const date = {};
      date.hours = newdate.getHours();
      date.minutes = newdate.getMinutes();
      date.seconds = newdate.getSeconds();
      return date;
    },
  }, {
    key: 'updateDate',
    value: function updateDate() {
      this.setState(this.getDate());
    },
  }, {
    key: 'renderDate',
    value: function renderDate() {
      const secondOffset = date.seconds / 60 * 100 + '%';
      const minuteOffset = date.minutes / 60 * 100 + '%';
      const hourOffset = date.hours / 24 * 100 + '%';
      const secondopacity = date.seconds / 60 * 100 / 100;
      const minuteopacity = date.minutes / 60 * 100 / 100;
      const houropacity = date.hours / 24 * 100 / 100;
    },
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      const that = this;
      setInterval(function() {
        that.updateDate();
      }, 1000);
    },
  }, {
    key: 'render',
    value: function render() {
      return /* #__PURE__*/_react['default'].createElement('div', {
        className: 'App',
      }, /* #__PURE__*/_react['default'].createElement(Marker, {
        type: 'hours',
        time: this.state.hours,
      }), /* #__PURE__*/_react['default'].createElement(Marker, {
        type: 'minutes',
        time: this.state.minutes,
      }), /* #__PURE__*/_react['default'].createElement(Marker, {
        type: 'seconds',
        time: this.state.seconds,
      }), /* #__PURE__*/_react['default'].createElement('div', {
        className: 'text-overlay',
      }, /* #__PURE__*/_react['default'].createElement(Timer, {
        type: 'hours',
        time: this.state.hours,
      }), /* #__PURE__*/_react['default'].createElement(Timer, {
        type: 'minutes',
        time: this.state.minutes,
      }), /* #__PURE__*/_react['default'].createElement(Timer, {
        type: 'seconds',
        time: this.state.seconds,
      })));
    },
  }]);

  return WaveClock;
}(_react['default'].Component);

var Marker = /* #__PURE__*/function(_React$Component2) {
  _inherits(Marker, _React$Component2);

  const _super2 = _createSuper(Marker);

  function Marker(man) {
    _classCallCheck(this, Marker);

    return _super2.call(this, man);
  }

  _createClass(Marker, [{
    key: 'render',
    value: function render() {
      switch (this.props.type) {
        case 'hours':
          var measurement = 24;
          break;

        case 'minutes':
          var measurement = 60;
          break;

        case 'seconds':
          var measurement = 60;
          break;
      }

      const offset = this.props.time / measurement * 100 + '%';
      const opacity = this.props.time / measurement * 100 / 100;
      const columnClasses = 'Column Column--' + this.props.type;
      const typeClasses = 'Marker Marker--' + this.props.type;
      return /* #__PURE__*/_react['default'].createElement('div', {
        className: columnClasses,
      }, /* #__PURE__*/_react['default'].createElement('div', {
        className: typeClasses,
        style: {
          height: offset,
          opacity: opacity,
        },
      }));
    },
  }]);

  return Marker;
}(_react['default'].Component);

var Timer = /* #__PURE__*/function(_React$Component3) {
  _inherits(Timer, _React$Component3);

  const _super3 = _createSuper(Timer);

  function Timer(man) {
    _classCallCheck(this, Timer);

    return _super3.call(this, man);
  }

  _createClass(Timer, [{
    key: 'render',
    value: function render() {
      if (this.props.time < 10) {
        var time = '0' + this.props.time;
      } else {
        var time = this.props.time;
      }

      return /* #__PURE__*/_react['default'].createElement('div', {
        className: this.props.type,
      }, time);
    },
  }]);

  return Timer;
}(_react['default'].Component);

const _default = WaveClock;
exports['default'] = _default;
