'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkboard = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _checkboard = require('../../helpers/checkboard');

var checkboard = _interopRequireWildcard(_checkboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkboard = exports.Checkboard = function Checkboard(_ref) {
  var _ref$white = _ref.white,
      white = _ref$white === undefined ? 'transparent' : _ref$white,
      _ref$grey = _ref.grey,
      grey = _ref$grey === undefined ? 'rgba(0,0,0,.08)' : _ref$grey,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 8 : _ref$size,
      _ref$renderers = _ref.renderers,
      renderers = _ref$renderers === undefined ? {} : _ref$renderers,
      borderRadius = _ref.borderRadius,
      boxShadow = _ref.boxShadow,
      children = _ref.children;

  var styles = (0, _reactcss2.default)({
    'default': {
      grid: {
        borderRadius: borderRadius,
        boxShadow: boxShadow,
        absolute: '0px 0px 0px 0px',
        background: 'url(' + checkboard.get(white, grey, size, renderers.canvas) + ') center left'
      }
    }
  });
  return (0, _react.isValidElement)(children) ? _react2.default.cloneElement(children, _extends({}, children.props, { style: _extends({}, children.props.style, styles.grid) })) : _react2.default.createElement('div', { style: styles.grid });
};

exports.default = Checkboard;