import { RadioProps } from '@mui/material';
import { IRadioGroupField } from '@palmyralabs/rt-forms';
import { IRadioGroupDefinition } from './types';
declare const MuiRadioGroup: import('react').ForwardRefExoticComponent<Omit<IRadioGroupDefinition & RadioProps, "ref"> & import('react').RefAttributes<IRadioGroupField>>;
export { MuiRadioGroup };
