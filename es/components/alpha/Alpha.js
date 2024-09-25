var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import reactCSS from 'reactcss';

import { ColorWrap, Alpha } from '../common';
import AlphaPointer from './AlphaPointer';

export var AlphaPicker = function AlphaPicker(_ref) {
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
      pointer = _ref$pointer === undefined ? AlphaPointer : _ref$pointer,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = reactCSS({
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

  return React.createElement(
    'div',
    { style: styles.picker, className: 'alpha-picker ' + className },
    React.createElement(Alpha, _extends({}, styles.alpha, {
      rgb: rgb,
      hsl: hsl,
      pointer: pointer,
      renderers: renderers,
      onChange: onChange,
      direction: direction
    }))
  );
};

export default ColorWrap(AlphaPicker);