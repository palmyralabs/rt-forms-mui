import { CheckboxProps } from '@mui/material';
import { ICheckBoxField } from '@palmyralabs/rt-forms';
import { ICheckBoxGroupDefinition } from './types';

interface MuiCheckBoxGroupDefn extends ICheckBoxGroupDefinition {
    muiProps?: CheckboxProps;
}
declare const MuiCheckBoxGroup: import('react').ForwardRefExoticComponent<MuiCheckBoxGroupDefn & import('react').RefAttributes<ICheckBoxField>>;
export default MuiCheckBoxGroup;
