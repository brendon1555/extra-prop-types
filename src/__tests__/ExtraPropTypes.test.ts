import { color } from '../index';

describe('ExtraPropTypes color type', () => {
  it('should be ignored if props undefined and not required', () => {
    const props = {};

    expect(color(props, 'color', 'TestComponent')).toBeUndefined();
  });

  it('should be ignored if props null and not required', () => {
    const props = {
      color: null,
    };

    expect(color(props, 'color', 'TestComponent')).toBeUndefined();
  });

  it('should error if props undefined and isRequired', () => {
    const props = {};

    expect(() => color.isRequired(props, 'color', 'TestComponent')).toThrow();
  });
  it('should error if props null and isRequired', () => {
    const props = {
      color: null,
    };

    expect(() => color.isRequired(props, 'color', 'TestComponent')).toThrow();
  });

  it('should accept various color strings', () => {
    expect(color({ color: 'rgba(0, 0, 0, 0.1)' }, 'color', 'TestComponent')).toBeUndefined();
    expect(color({ color: 'RGB(25, 36, 8)' }, 'color', 'TestComponent')).toBeUndefined();
    expect(color({ color: 'hsl(25, 100%, 50%)' }, 'color', 'TestComponent')).toBeUndefined();
    expect(color({ color: 'HSLA(40, 70%, 2%, 1)' }, 'color', 'TestComponent')).toBeUndefined();
    expect(color({ color: '#fefefe' }, 'color', 'TestComponent')).toBeUndefined();
    expect(color({ color: '#323' }, 'color', 'TestComponent')).toBeUndefined();
    expect(color({ color: '#eeaacc' }, 'color', 'TestComponent')).toBeUndefined();
  });

  it('should not accept various invalid color strings', () => {
    expect(() => color({ color: 'rgba(-1,0, 0, 0.1)' }, 'color', 'TestComponent')).toThrow();
    expect(() => color({ color: 'rgb(255)' }, 'color', 'TestComponent')).toThrow();
    expect(() => color({ color: 'hsl(180, 100, 50)' }, 'color', 'TestComponent')).toThrow();
    expect(() => color({ color: 'hsla(40, 20%, 2%)' }, 'color', 'TestComponent')).toThrow();
    expect(() => color({ color: '#ffff' }, 'color', 'TestComponent')).toThrow();
    expect(() => color({ color: 'rgb(400, 0, 0)' }, 'color', 'TestComponent')).toThrow();
    expect(() => color({ color: '#jjeexx' }, 'color', 'TestComponent')).toThrow();
    expect(() => color({ color: 'hsl(10, 150%, 50%)' }, 'color', 'TestComponent')).toThrow();
  });
});
