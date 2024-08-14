import { SelectProps } from '@mui/material';
import { ISelectField } from '@palmyralabs/rt-forms';
import { ISelectDefinition } from './types';

interface MuiSelectDefn extends ISelectDefinition {
    muiProps?: SelectProps;
}
declare const MuiSelect: import('react').ForwardRefExoticComponent<MuiSelectDefn & import('react').RefAttributes<ISelectField>>;
export { MuiSelect };
