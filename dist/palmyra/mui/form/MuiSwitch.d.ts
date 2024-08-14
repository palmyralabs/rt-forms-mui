import { SwitchProps } from '@mui/material';
import { ISwitchDefinition } from './types';
import { ISwitchField } from '@palmyralabs/rt-forms';

interface MuiSwitchDefn extends ISwitchDefinition {
    muiProps?: SwitchProps;
}
declare const MuiSwitch: import('react').ForwardRefExoticComponent<MuiSwitchDefn & import('react').RefAttributes<ISwitchField>>;
export { MuiSwitch };
