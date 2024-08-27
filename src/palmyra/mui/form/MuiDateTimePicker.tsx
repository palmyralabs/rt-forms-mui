import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { DatePickerProps, DateTimePicker, LocalizationProvider, PickerChangeHandlerContext } from '@mui/x-date-pickers';
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
    if (options.defaultValue) {
        options.defaultValue = parse(options.defaultValue);
    }
    // options.onChange = (d: any) => { if (!props.readOnly) setValue(d); }

    options.onChange = (d: any, context: PickerChangeHandlerContext<any>) => {
        if (!props.readOnly) {
            setValue(d);
            if (props.onChange)
                props.onChange(d, context);
        }
    }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    defaultValue={dayjs(props.defaultValue)}
                    readOnly={props.readOnly}
                    format={displayFormat}
                    label={props.label}
                    views={['year', 'day', 'hours', 'minutes', 'seconds']}
                    slotProps={{
                        textField: {
                            error: error.status,
                            helperText: error.message,
                            variant: props.variant || 'standard',
                            fullWidth: props.fullWidth || true,
                            inputRef
                        },
                    }}
                    {...options}
                    value={props.defaultValue ? dayjs(props.defaultValue) : getValue()}
                />
            </LocalizationProvider>
        </FieldDecorator>}
    </>
    );
});

export { MuiDateTimePicker };