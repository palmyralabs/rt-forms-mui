import { DatePicker, DatePickerProps, LocalizationProvider, PickerChangeHandlerContext } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FieldDecorator, getFieldHandler, IDateField, IFormFieldError, useFieldManager } from '@palmyralabs/rt-forms';
import dayjs from "dayjs";
import { forwardRef, RefObject, useImperativeHandle, useRef } from 'react';
import { IDatePickerDefinition } from './types';
import { getFieldLabel } from './util';

const MuiDatePicker = forwardRef(function MuiDatePicker(props: IDatePickerDefinition & DatePickerProps<any>,
    ref: RefObject<IDateField>) {
    const serverPattern = props.serverPattern || props.displayPattern || "YYYY-MM-DD";
    const displayFormat: string = props.displayPattern || props.serverPattern || "YYYY-MM-DD";

    const parse = (rawData: any) => {
        if (rawData)
            return dayjs(rawData, serverPattern)
        return undefined;
    };
    const format = (v: any) => {
        if (v && v.isValid && v.isValid())
            return v.format(serverPattern)
    };

    const fieldManager = useFieldManager(props.attribute, props, { format, parse });

    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
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

    options.onChange = (d: any, context: PickerChangeHandlerContext<any>) => {
        if (!props.readOnly) {
            setValue(d);
            if (props.onChange)
                props.onChange(d, context);
        }
    }
    options.onBlur = refreshError;
    
    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    format={displayFormat}
                    label={props.label}
                    slotProps={{
                        textField: {
                            error: error.status,
                            helperText: error.message,
                            variant: props.variant || 'standard',
                            fullWidth: props.fullWidth !== undefined ? props.fullWidth : true,
                            inputRef: inputRef,
                        },
                    }}
                    {...options}
                    value={getValue() || null}
                />
            </LocalizationProvider>
        </FieldDecorator>}
    </>
    );
});

export { MuiDatePicker };
