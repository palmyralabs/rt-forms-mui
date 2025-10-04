import { useRef, useImperativeHandle, forwardRef, RefObject } from 'react';
import { LocalizationProvider, PickerChangeHandlerContext, TimePicker, TimePickerProps } from '@mui/x-date-pickers';
import { getFieldLabel } from './util';
import { IDatePickerDefinition } from './types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { IDateField, IFormFieldError, useFieldManager, getFieldHandler, FieldDecorator } from '@palmyralabs/rt-forms';

const MuiTimePicker = forwardRef(function MuiTimePicker(props: IDatePickerDefinition & TimePickerProps<any>,
    ref: RefObject<IDateField>) {
    const serverPattern = props.serverPattern || props.displayPattern || "hh:mm aa";
    const displayFormat: string = props.displayPattern || props.serverPattern || "hh:mm aa";

    const parse = (rawData: any) => {
        if (rawData) {
            return dayjs(rawData, serverPattern)
        }
        else { return undefined }
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
                <TimePicker
                    readOnly={props.readOnly}
                    format={displayFormat}
                    label={props.label}
                    views={['hours', 'minutes', 'seconds']}
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
                    value={getValue() || null}
                />
            </LocalizationProvider>
        </FieldDecorator>}
    </>
    );
});

export { MuiTimePicker };