import createPropType from './createPropType';
import isColor from './validators/isColor';
import { Requireable } from 'types';

const colorValidator = createPropType({ validationName: 'color', predicate: (propValue) => isColor(propValue) });

export const color: Requireable<string> = colorValidator;
