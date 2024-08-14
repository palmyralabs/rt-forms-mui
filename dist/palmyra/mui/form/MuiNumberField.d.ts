import { TextFieldProps } from '@mui/material';
import { ITextField } from '@palmyralabs/rt-forms';
import { ITextFieldDefinition } from './types';

interface MuiNumberFieldDefn extends ITextFieldDefinition {
    muiProps?: TextFieldProps;
}
declare const MuiNumberField: import('react').ForwardRefExoticComponent<MuiNumberFieldDefn & import('react').RefAttributes<ITextField>>;
export { MuiNumberField };
