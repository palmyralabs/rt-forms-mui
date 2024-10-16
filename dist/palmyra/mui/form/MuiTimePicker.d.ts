import { TimePickerProps } from '@mui/x-date-pickers';
import { IDatePickerDefinition } from './types';
import { IDateField } from '@palmyralabs/rt-forms';

declare const MuiTimePicker: import('react').ForwardRefExoticComponent<IDatePickerDefinition & TimePickerProps<any, false> & import('react').RefAttributes<IDateField>>;
export { MuiTimePicker };
