import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { DatePicker, DatePickerProps, LocalizationProvider, PickerChangeHandlerContext } from '@mui/x-date-pickers';
import { getFieldLabel } from './util';
import { IDatePickerDefinition } from './types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { IDateField, IFormFieldError, useFieldManager, getFieldHandler, FieldDecorator } from '@palmyralabs/rt-forms';

interface DateRange {
    from: dayjs.Dayjs,
    to: dayjs.Dayjs
}

const formatDayJs = (v: dayjs.Dayjs, serverPattern: string): string => {
    if (v && v.isValid && v.isValid())
        return v.format(serverPattern)
};

const parseToDaysJs = (v: string, serverPattern: string): dayjs.Dayjs => {
    if (v)
        return dayjs(v, serverPattern);
    return dayjs(undefined);
}

const MuiDateRangePicker = forwardRef(function MuiDatePicker(props: IDatePickerDefinition & DatePickerProps<any>,
    ref: MutableRefObject<IDateField>) {
    const serverPattern = props.serverPattern || props.displayPattern || "YYYY-MM-DD";
    const displayFormat: string = props.displayPattern || props.serverPattern || "YYYY-MM-DD";

    const parse = (rawData: string): DateRange => {
        if (rawData && typeof rawData == 'string') {
            var from: dayjs.Dayjs, to: dayjs.Dayjs;
            const fc = rawData.charAt(0);
            if (fc == '>')
                from = parseToDaysJs(rawData.slice(1), serverPattern);
            else if (fc == '<')
                to = parseToDaysJs(rawData.slice(1), serverPattern);
            else {
                const dts = rawData.split('...');
                from = parseToDaysJs(dts[0], serverPattern);
                if (dts[1])
                    to = parseToDaysJs(dts[1], serverPattern);
            }
        }
        return { from, to };
    }

    const format = (v: DateRange): string => {
        if (v) {
            const from = formatDayJs(v.from, serverPattern);
            const to = formatDayJs(v.to, serverPattern);

            if (from) {
                if (to) {
                    return from + '...' + to;
                } else {
                    return '>' + from;
                }
            } else {
                if (to) {
                    return '<' + to;
                }
            }
        }
        return undefined;
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
    var from: dayjs.Dayjs, to: dayjs.Dayjs;
    const value: DateRange = getValue();

    if (value) {
        from = value.from;
        to = value.to;
    }

    if (options.defaultValue) {
        const defValue = parse(options.defaultValue);
        from = defValue.from;
        to = defValue.to;
    }

    options.fullwidth = false;

    const _onChange = (key: string, d: dayjs.Dayjs, context: PickerChangeHandlerContext<any>) => {
        if (!props.readOnly) {
            const v = { ...value, [key]: d }
            setValue(v);
            if (props.onChange)
                props.onChange(v, context);
        }
    }

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
                            variant: options.variant || 'standard',
                            fullWidth: true,
                            inputRef
                        },
                    }}
                    {...options}
                    onChange={(d, c) => _onChange('from', d, c)}
                    defaultValue={from}
                />
                <span style={{ textAlign: 'center', whiteSpace: 'nowrap', padding: '1vw' }}>to</span>
                <DatePicker
                    format={displayFormat}
                    label={props.label}
                    slotProps={{
                        textField: {
                            error: error.status,
                            helperText: error.message,
                            variant: props.variant || 'standard',
                            fullWidth: props.fullWidth,
                            inputRef
                        },
                    }}
                    {...options}
                    onChange={(d, c) => _onChange('to', d, c)}
                    defaultValue={to}
                />
            </LocalizationProvider>
        </FieldDecorator>}
    </>
    );
});

export { MuiDateRangePicker };