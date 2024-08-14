import { TextFieldProps } from '@mui/material';
import { ITextField } from '@palmyralabs/rt-forms';
import { ITextFieldDefinition } from './types';

interface MuiTextFieldDefn extends ITextFieldDefinition {
    muiProps?: TextFieldProps;
}
declare const MuiTextArea: import('react').ForwardRefExoticComponent<MuiTextFieldDefn & import('react').RefAttributes<ITextField>>;
export { MuiTextArea };
