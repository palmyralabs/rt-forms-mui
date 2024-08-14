import { ISelectField } from '@palmyralabs/rt-forms';
import { ISelectDefinition } from './types';

declare const MuiSelect: import('react').ForwardRefExoticComponent<(Omit<ISelectDefinition & import('@mui/material').FilledSelectProps & import('@mui/material').BaseSelectProps<unknown>, "ref"> | Omit<ISelectDefinition & import('@mui/material').StandardSelectProps & import('@mui/material').BaseSelectProps<unknown>, "ref"> | Omit<ISelectDefinition & import('@mui/material').OutlinedSelectProps & import('@mui/material').BaseSelectProps<unknown>, "ref">) & import('react').RefAttributes<ISelectField>>;
export { MuiSelect };
