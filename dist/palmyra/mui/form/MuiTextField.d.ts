import { TextFieldProps } from '@mui/material';
import { ITextField } from '@palmyralabs/rt-forms';
import { ITextFieldDefinition } from './types';

interface MuiTextFieldDefn extends ITextFieldDefinition {
    muiProps?: TextFieldProps;
}
declare const MuiTextField: import('react').ForwardRefExoticComponent<MuiTextFieldDefn & import('react').RefAttributes<ITextField>>;
export { MuiTextField };
