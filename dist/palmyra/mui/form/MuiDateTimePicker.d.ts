import { DatePickerProps } from '@mui/x-date-pickers';
import { IDatePickerDefinition } from './types';
import { IDateField } from '@palmyralabs/rt-forms';

interface MuiDateTimePickerDefn extends IDatePickerDefinition {
    muiProps?: DatePickerProps<any>;
}
declare const MuiDateTimePicker: import('react').ForwardRefExoticComponent<MuiDateTimePickerDefn & import('react').RefAttributes<IDateField>>;
export { MuiDateTimePicker };
