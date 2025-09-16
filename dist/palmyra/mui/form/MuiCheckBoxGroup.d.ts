import { CheckboxProps } from '@mui/material';
import { ICheckBoxField } from '@palmyralabs/rt-forms';
import { ICheckBoxGroupDefinition } from './types';
declare const MuiCheckBoxGroup: import('react').ForwardRefExoticComponent<Omit<CheckboxProps & ICheckBoxGroupDefinition, "ref"> & import('react').RefAttributes<ICheckBoxField>>;
export { MuiCheckBoxGroup };
