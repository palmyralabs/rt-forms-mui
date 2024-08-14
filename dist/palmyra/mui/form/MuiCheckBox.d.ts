import { CheckboxProps } from '@mui/material';
import { ICheckBoxField } from '@palmyralabs/rt-forms';
import { ICheckBoxDefinition } from './types';

interface MuiCheckBoxDefn extends ICheckBoxDefinition {
    muiProps?: CheckboxProps;
}
declare const MuiCheckBox: import('react').ForwardRefExoticComponent<MuiCheckBoxDefn & import('react').RefAttributes<ICheckBoxField>>;
export { MuiCheckBox };
