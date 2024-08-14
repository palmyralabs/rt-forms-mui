import { IMutateOptions } from '@palmyralabs/rt-forms';
import { MuiInputFieldOptions } from './types';

declare const generateOptions: (p: any, o: IMutateOptions, v?: any) => any;
declare const getFieldLabel: (props: MuiInputFieldOptions) => string | import("react/jsx-runtime").JSX.Element;
export { generateOptions, getFieldLabel };
