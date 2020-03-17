import createPropType from './createPropType';
import isColor from './validators/isColor';

const colorValidator = createPropType({ validationName: 'color', predicate: propValue => isColor(propValue) });

export const color = colorValidator;
