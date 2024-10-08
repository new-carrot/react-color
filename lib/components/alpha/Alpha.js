'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlphaPicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = require('../common');

var _AlphaPointer = require('./AlphaPointer');

var _AlphaPointer2 = _interopRequireDefault(_AlphaPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlphaPicker = exports.AlphaPicker = function AlphaPicker(_ref) {
  var rgb = _ref.rgb,
      hsl = _ref.hsl,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? '316px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? '16px' : _ref$height,
      onChange = _ref.onChange,
      _ref$direction = _ref.direction,
      direction = _ref$direction === undefined ? 'horizontal' : _ref$direction,
      style = _ref.style,
      renderers = _ref.renderers,
      _ref$pointer = _ref.pointer,
      pointer = _ref$pointer === undefined ? _AlphaPointer2.default : _ref$pointer,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      alpha: {
        radius: '2px',
        style: style
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'alpha-picker ' + className },
    _react2.default.createElement(_common.Alpha, _extends({}, styles.alpha, {
      rgb: rgb,
      hsl: hsl,
      pointer: pointer,
      renderers: renderers,
      onChange: onChange,
      direction: direction
    }))
  );
};

exports.default = (0, _common.ColorWrap)(AlphaPicker);