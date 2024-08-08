import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { DatePicker, DatePickerProps, LocalizationProvider } from '@mui/x-date-pickers';
;
import { generateOptions, getFieldLabel } from './util';
import FieldDecorator from './FieldDecorator';
import { IDatePickerDefinition } from './types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { IDateField, IFormFieldError, useFieldManager, getFieldHandler } from '@palmyralabs/rt-forms';


const MuiDatePicker = forwardRef(function MuiDatePicker(props: DatePickerProps<any> & IDatePickerDefinition,
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

    var options = generateOptions(props, mutateOptions, getValue());

    options.onChange = (d: any) => { if (!props.readOnly) setValue(d); }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker {...options}
                    readOnly={props.readOnly}
                    disableFuture={props.disableFuture}
                    format={displayFormat}
                    slotProps={{
                        textField: {
                            error: error.status,
                            helperText: error.message,
                            variant: variant,
                            fullWidth: false,
                            inputRef
                        },
                    }}
                />
            </LocalizationProvider>
        </FieldDecorator>}
    </>
    );
});

export default MuiDatePicker;