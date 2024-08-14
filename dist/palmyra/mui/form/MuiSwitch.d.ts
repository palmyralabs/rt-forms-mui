import { SwitchProps } from '@mui/material';
import { ISwitchDefinition } from './types';
import { ISwitchField } from '@palmyralabs/rt-forms';

declare const MuiSwitch: import('react').ForwardRefExoticComponent<Omit<ISwitchDefinition & SwitchProps, "ref"> & import('react').RefAttributes<ISwitchField>>;
export { MuiSwitch };
