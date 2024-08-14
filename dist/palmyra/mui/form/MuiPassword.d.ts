import { TextFieldProps } from '@mui/material';
import { ITextField } from '@palmyralabs/rt-forms';
import { ITextFieldDefinition } from './types';

interface MuiPasswordDefn extends ITextFieldDefinition {
    muiProps?: TextFieldProps;
}
declare const MuiPassword: import('react').ForwardRefExoticComponent<MuiPasswordDefn & import('react').RefAttributes<ITextField>>;
export { MuiPassword };
