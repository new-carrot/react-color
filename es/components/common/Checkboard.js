var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { isValidElement } from 'react';
import reactCSS from 'reactcss';
import * as checkboard from '../../helpers/checkboard';

export var Checkboard = function Checkboard(_ref) {
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

  var styles = reactCSS({
    'default': {
      grid: {
        borderRadius: borderRadius,
        boxShadow: boxShadow,
        absolute: '0px 0px 0px 0px',
        background: 'url(' + checkboard.get(white, grey, size, renderers.canvas) + ') center left'
      }
    }
  });
  return isValidElement(children) ? React.cloneElement(children, _extends({}, children.props, { style: _extends({}, children.props.style, styles.grid) })) : React.createElement('div', { style: styles.grid });
};

export default Checkboard;