import { DatePickerProps } from '@mui/x-date-pickers';
import { IDatePickerDefinition } from './types';
import { IDateField } from '@palmyralabs/rt-forms';

declare const MuiDatePicker: import('react').ForwardRefExoticComponent<IDatePickerDefinition & DatePickerProps<any, false> & import('react').RefAttributes<IDateField>>;
export { MuiDatePicker };
