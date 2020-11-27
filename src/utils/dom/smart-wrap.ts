import { uniGetTheme } from './get-theme';
import { uniGetRotation } from './get-rotation';
import {
  uniAppendStyle,
  UniColorCSS,
  UniFilterCSS,
  UniFontSizeCSS,
  uniGetDegree,
  uniModifyAsync,
  uniModifyClass,
  uniModifyContent,
  uniModifyStyle,
  UniRotateCSS,
  UniSizeCSS,
} from '..';

export function uniSmartWrap(props) {
  const { el, color, filter, size, fontSize, selector, all } = props;
  let { classes, styles } = color || filter || size || fontSize
    ? uniGetTheme({ color, filter, size, fontSize })
    : { classes: [], styles: {} };

  classes = [
    ...classes,
    ...(props.classes ? props.classes.split(' ') : []),
  ];

  if (!!color) {
    uniAppendStyle(UniColorCSS);
  }

  if (filter) {
    uniAppendStyle(UniFilterCSS);
  }

  if (size) {
    uniAppendStyle(UniSizeCSS);
  }

  if (fontSize) {
    uniAppendStyle(UniFontSizeCSS);
  }

  if (props.degree) {
    styles = {
      ...styles,
      ...uniGetDegree(props.degree).styles,
    };
  }

  if (props.rotate) {
    uniAppendStyle(UniRotateCSS);

    styles = {
      ...styles,
      ...uniGetRotation(props).styles,
    };
  }

  uniModifyAsync({ el, selector, all }, classes, uniModifyClass);
  uniModifyAsync({ el, selector, all }, styles, uniModifyStyle);
  uniModifyAsync({ el, selector, all }, props.content, uniModifyContent);
}
