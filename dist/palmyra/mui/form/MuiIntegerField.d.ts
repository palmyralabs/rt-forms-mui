import { TextFieldProps } from '@mui/material';
import { ITextField } from '@palmyralabs/rt-forms';
import { ITextFieldDefinition } from './types';

interface MuiIntegerFieldDefn extends ITextFieldDefinition {
    muiProps?: TextFieldProps;
}
declare const MuiIntegerField: import('react').ForwardRefExoticComponent<MuiIntegerFieldDefn & import('react').RefAttributes<ITextField>>;
export { MuiIntegerField };
