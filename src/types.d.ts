export const nominalTypeHack: unique symbol;

export interface Validator<T> {
    (props: { [key: string]: any }, propName: string, componentName: string): Error | null;
    [nominalTypeHack]?: {
        type: T;
    };
}

export interface Requireable<T> extends Validator<T | undefined | null> {
    isRequired: Validator<NonNullable<T>>;
}
