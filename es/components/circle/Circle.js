import React from 'react';
import PropTypes from 'prop-types';
import reactCSS from 'reactcss';
import map from 'lodash-es/map';
import merge from 'lodash-es/merge';
import * as material from 'material-colors';

import { ColorWrap } from '../common';
import CircleSwatch from './CircleSwatch';

export var Circle = function Circle(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 252 : _ref$width,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      _ref$colors = _ref.colors,
      colors = _ref$colors === undefined ? [material.red['500'], material.pink['500'], material.purple['500'], material.deepPurple['500'], material.indigo['500'], material.blue['500'], material.lightBlue['500'], material.cyan['500'], material.teal['500'], material.green['500'], material.lightGreen['500'], material.lime['500'], material.yellow['500'], material.amber['500'], material.orange['500'], material.deepOrange['500'], material.brown['500'], material.blueGrey['500']] : _ref$colors,
      hex = _ref.hex,
      _ref$circleSize = _ref.circleSize,
      circleSize = _ref$circleSize === undefined ? 28 : _ref$circleSize,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$circleSpacing = _ref.circleSpacing,
      circleSpacing = _ref$circleSpacing === undefined ? 14 : _ref$circleSpacing,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = reactCSS(merge({
    'default': {
      card: {
        width: width,
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: -circleSpacing,
        marginBottom: -circleSpacing
      }
    }
  }, passedStyles));

  var handleChange = function handleChange(hexCode, e) {
    return onChange({ hex: hexCode, source: 'hex' }, e);
  };

  return React.createElement(
    'div',
    { style: styles.card, className: 'circle-picker ' + className },
    map(colors, function (c) {
      return React.createElement(CircleSwatch, {
        key: c,
        color: c,
        onClick: handleChange,
        onSwatchHover: onSwatchHover,
        active: hex === c.toLowerCase(),
        circleSize: circleSize,
        circleSpacing: circleSpacing
      });
    })
  );
};

Circle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  circleSize: PropTypes.number,
  circleSpacing: PropTypes.number,
  styles: PropTypes.object
};

export default ColorWrap(Circle);