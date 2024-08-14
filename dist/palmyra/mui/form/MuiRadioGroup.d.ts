import { RadioProps } from '@mui/material';
import { IRadioGroupField } from '@palmyralabs/rt-forms';
import { IRadioGroupDefinition } from './types';

interface MuiRadioGroupDefn extends IRadioGroupDefinition {
    muiProps?: RadioProps;
}
declare const MuiRadioGroup: import('react').ForwardRefExoticComponent<MuiRadioGroupDefn & import('react').RefAttributes<IRadioGroupField>>;
export { MuiRadioGroup };
