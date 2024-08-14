import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { DatePickerProps, DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { getFieldLabel } from './util';
import FieldDecorator from './FieldDecorator';
import { IDatePickerDefinition } from './types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { IDateField, IFormFieldError, useFieldManager, getFieldHandler } from '@palmyralabs/rt-forms';

const MuiDateTimePicker = forwardRef(function MuiDateTimePicker(props: IDatePickerDefinition & DatePickerProps<any>,
    ref: MutableRefObject<IDateField>) {
    const serverPattern = props.serverPattern || props.displayPattern || "YYYY-MM-DD";
    const displayFormat: string = props.displayPattern || props.serverPattern || "YYYY-MM-DD";

    const parse = (rawData: any) => {
        if (rawData)
            return dayjs(rawData, serverPattern)
        return dayjs(undefined);
    };
    const format = (v: any) => {
        if (v && v.isValid && v.isValid())
            return v.format(serverPattern)
    };

    const fieldManager = useFieldManager(props.attribute, props, { format, parse });

    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<IDateField>(null);
    const error: IFormFieldError = getError();

    const inputRef: any = useRef(null);
    const variant = props.variant || 'standard';

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            },
            setCurrent() {

            },
        };
    }, [fieldManager]);

    var options = fieldManager.getFieldProps();

    options.onChange = (d: any) => { if (!props.readOnly) setValue(d); }

    const label = props.labelMode != 'title' ? props.label : ''

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    readOnly={props.readOnly}
                    format={displayFormat}
                    label={label}
                    views={['year', 'day', 'hours', 'minutes', 'seconds']}
                    slotProps={{
                        textField: {
                            error: error.status,
                            helperText: error.message,
                            variant: variant,
                            fullWidth: true,
                            inputRef
                        },
                    }}
                    {...options}
                    value={getValue()}
                />
            </LocalizationProvider>
        </FieldDecorator>}
    </>
    );
});

export { MuiDateTimePicker };