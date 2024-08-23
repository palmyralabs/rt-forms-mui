import { ISelectField } from '@palmyralabs/rt-forms';
import { ISelectDefinition } from './types';

declare const MuiSelect: import('react').ForwardRefExoticComponent<(Omit<import('@mui/material').FilledSelectProps & import('@mui/material').BaseSelectProps<unknown> & ISelectDefinition, "ref"> | Omit<import('@mui/material').StandardSelectProps & import('@mui/material').BaseSelectProps<unknown> & ISelectDefinition, "ref"> | Omit<import('@mui/material').OutlinedSelectProps & import('@mui/material').BaseSelectProps<unknown> & ISelectDefinition, "ref">) & import('react').RefAttributes<ISelectField>>;
export { MuiSelect };
