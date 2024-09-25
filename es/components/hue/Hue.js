var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import reactCSS from 'reactcss';
import merge from 'lodash-es/merge';

import { ColorWrap, Hue } from '../common';
import HuePointer from './HuePointer';

export var HuePicker = function HuePicker(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? '316px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? '16px' : _ref$height,
      onChange = _ref.onChange,
      hsl = _ref.hsl,
      _ref$direction = _ref.direction,
      direction = _ref$direction === undefined ? 'horizontal' : _ref$direction,
      _ref$pointer = _ref.pointer,
      pointer = _ref$pointer === undefined ? HuePointer : _ref$pointer,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = reactCSS(merge({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      hue: {
        radius: '2px'
      }
    }
  }, passedStyles));

  // Overwrite to provide pure hue color
  var handleChange = function handleChange(data) {
    return onChange({ a: 1, h: data.h, l: 0.5, s: 1 });
  };

  return React.createElement(
    'div',
    { style: styles.picker, className: 'hue-picker ' + className },
    React.createElement(Hue, _extends({}, styles.hue, {
      hsl: hsl,
      pointer: pointer,
      onChange: handleChange,
      direction: direction
    }))
  );
};

HuePicker.propTypes = {
  styles: PropTypes.object
};

export default ColorWrap(HuePicker);