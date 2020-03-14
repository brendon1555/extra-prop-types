import createPropType from './createPropType';
import isColor from './validators/isColor';

const colorValidator = createPropType({ validationName: 'color', predicate: propValue => isColor(propValue) });

const all = {
  color: colorValidator,
};

export { all as default, colorValidator as color };
