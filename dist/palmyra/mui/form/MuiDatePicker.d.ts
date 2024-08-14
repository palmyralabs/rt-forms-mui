import { DatePickerProps } from '@mui/x-date-pickers';
import { IDatePickerDefinition } from './types';
import { IDateField } from '@palmyralabs/rt-forms';

interface MuiDatePickerDefn extends IDatePickerDefinition {
    muiProps?: DatePickerProps<any>;
}
declare const MuiDatePicker: import('react').ForwardRefExoticComponent<MuiDatePickerDefn & import('react').RefAttributes<IDateField>>;
export { MuiDatePicker };
