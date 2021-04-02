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

const transformHourHand = function transformHourHand(_ref) {
  const _ref$hoursDegree = _ref.hoursDegree;
  const hoursDegree = _ref$hoursDegree === void 0 ? -90 : _ref$hoursDegree;
  return 'rotate('.concat(hoursDegree, 'deg)');
};

const transformMinuteHand = function transformMinuteHand(_ref2) {
  const _ref2$minutesDegree = _ref2.minutesDegree;
  const minutesDegree = _ref2$minutesDegree === void 0 ? -90 : _ref2$minutesDegree;
  return 'rotate('.concat(minutesDegree, 'deg)');
};

const transformSecondsHand = function transformSecondsHand(_ref3) {
  const _ref3$secondsDegree = _ref3.secondsDegree;
  const secondsDegree = _ref3$secondsDegree === void 0 ? -90 : _ref3$secondsDegree;
  return 'rotate('.concat(secondsDegree, 'deg)');
};

const StyledClock = (0, _styledComponents['default'])(_component['default'])(_templateObject || (_templateObject = _taggedTemplateLiteral(['\n  padding: 30px 0;\n  background: url("https://www.photohdx.com/images/2014/11/blue-wall-texture-background.jpg");\n  section {\n    width: 80vmin;\n    height: 80vmin;\n    margin: auto;\n    background: #fff\n      url("https://tritownregistries.com/wp-content/uploads/2016/04/white-linen-paper-texture-whiter-1024x683.jpg")\n      center center;\n    border: 3vmin solid #000;\n    border-radius: 50%;\n    margin-top: 3vmin;\n    box-shadow: inset 40px 40px 90px rgba(0, 0, 0, 0.2),\n      inset 10px 10px 30px rgba(0, 0, 0, 0.5), 20px 20px 30px rgba(0, 0, 0, 0.4),\n      40px 40px 60px rgba(0, 0, 0, 0.4);\n    position: relative;\n    z-index: 1;\n  }\n\n  section:before {\n    content: "";\n    width: 95%;\n    height: 95%;\n    border-radius: 50%;\n    display: block;\n    background: transparent;\n    border: 2vmin solid white;\n  }\n\n  /* highlight at top left of black outline */\n  section:after {\n    content: "";\n    width: 105%;\n    height: 105%;\n    border-radius: 50%;\n    display: block;\n    background: transparent;\n    position: absolute;\n    top: -2.5%;\n    left: -2.5%;\n    box-shadow: -3px -3px 9px rgba(255, 255, 255, 0.8);\n  }\n\n  .label {\n    position: absolute;\n    top: 19vmin;\n    left: 46%;\n    font-size: 2.5vmin;\n  }\n\n  .hourhand,\n  .secondhand,\n  .minutehand {\n    width: 25vmin;\n    height: 2vmin;\n    background: #000;\n    position: absolute;\n    top: 40vmin;\n    left: calc(50% - 3.5vmin);\n    z-index: 2;\n    transform: rotate(-159deg);\n    transform-origin: 16%;\n  }\n\n  .hourhand:after,\n  .secondhand:after,\n  .minutehand:after {\n    content: "";\n    background: #000;\n    width: 5vmin;\n    height: 5vmin;\n    border-radius: 50%;\n    z-index: 3;\n    position: absolute;\n    top: -1.5vmin;\n    left: 1.5vmin;\n  }\n\n  .hourhand {\n    border-top-right-radius: 20%;\n    border-bottom-right-radius: 20%;\n    box-shadow: -10px 0px 10px rgba(0, 0, 0, 0.4);\n    transform: ', ';\n  }\n\n  .minutehand {\n    width: 40vmin;\n    height: 1vmin;\n    top: 40.5vmin;\n    transform: ', ';\n    transform-origin: 10%;\n    border-top-right-radius: 30%;\n    border-bottom-right-radius: 30%;\n    box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.4);\n  }\n\n  .minutehand:before {\n    content: "";\n    width: 4.5vmin;\n    height: 4.5vmin;\n    border-radius: 50%;\n    z-index: 99;\n    position: absolute;\n    top: -1.7vmin;\n    left: 1.7vmin;\n    box-shadow: -2px -2px 7px rgba(255, 255, 255, 0.6);\n  }\n\n  .minutehand:after {\n    top: -2vmin;\n  }\n\n  .secondhand {\n    width: 35vmin;\n    height: 0.5vmin;\n    top: 40.75vmin;\n    transform: ', ';\n    transform-origin: 11.5%;\n    box-shadow: -10px -10px 10px rgba(0, 0, 0, 0.4);\n  }\n  .secondhand:after {\n    top: -2.25vmin;\n  }\n\n  .hour12,\n  .hour1,\n  .hour2,\n  .hour3,\n  .hour4,\n  .hour5 {\n    height: 1vmin;\n    width: 55vmin;\n    background: transparent;\n    border-left: 7vmin solid #000;\n    border-right: 7vmin solid #000;\n    transform: translate(-50%, -50%);\n    /*     transform-origin: right bottom; */\n    top: 50%;\n    left: 50%;\n    position: absolute;\n  }\n\n  .hour3 {\n    transform: rotate(90deg) translate(0, 34vmin);\n  }\n\n  .hour1 {\n    transform: rotate(120deg) translate(17vmin, 30vmin);\n  }\n\n  .hour2 {\n    transform: rotate(150deg) translate(29vmin, 18vmin);\n  }\n\n  .hour4 {\n    transform: rotate(210deg) translate(30vmin, -17vmin);\n  }\n\n  .hour5 {\n    transform: rotate(240deg) translate(17vmin, -30vmin);\n  }\n'])), transformHourHand, transformMinuteHand, transformSecondsHand);
const _default = StyledClock;
exports['default'] = _default;
