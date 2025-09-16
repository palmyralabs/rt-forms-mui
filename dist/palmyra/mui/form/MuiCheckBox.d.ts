import { CheckboxProps } from '@mui/material';
import { ICheckBoxField } from '@palmyralabs/rt-forms';
import { ICheckBoxDefinition } from './types';
declare const MuiCheckBox: import('react').ForwardRefExoticComponent<Omit<CheckboxProps & ICheckBoxDefinition, "ref"> & import('react').RefAttributes<ICheckBoxField>>;
export { MuiCheckBox };
