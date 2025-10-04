import { useRef, useImperativeHandle, forwardRef, RefObject } from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent, SelectProps } from '@mui/material';
import { getFieldHandler, IFormFieldError, ISelectField, ITextField, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { ISelectDefinition } from './types';

const MuiSelect = forwardRef(function MuiSelect(props: ISelectDefinition & SelectProps, ref: RefObject<ISelectField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const error: IFormFieldError = getError();

    const inputRef: any = useRef(null);
    const variant = props.variant || 'standard';

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager);
        return {
            ...handler,
            focus() {
                if (inputRef)
                    inputRef.current.focus();
            },
            setOptions(d: any) {
            },
            getOptions() {
            }
        };
    }, [fieldManager]);

    var options = fieldManager.getFieldProps();

    if (props.readOnly) {
        options.inputProps = { readOnly: true };
    }

    options.onChange = (event: SelectChangeEvent<any>, child: React.ReactNode) => {
        if (!props.readOnly) {
            setValue(event.target.value);
            if (props.onChange)
                props.onChange(event, child);
        }
    }
    options.onBlur = refreshError;

    const fieldMargin: any = 0; //props?.fieldProps?.size == 'small' ? 1 : 0;

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControl variant={variant} fullWidth error={error.status}>
                {props.label ?
                    <InputLabel required={options.required}>{props.label}</InputLabel> : <></>}
                <Select sx={{
                    m: fieldMargin
                }} {...options} value={getValue()} inputRef={(i) => { inputRef.current = i; }} >
                    {options.options
                        ? Object.keys(options.options).map((key, index) => (
                            <MenuItem key={index} value={key}>{options.options[key]}</MenuItem>
                        )
                        )
                        : props.children
                            ? props.children : <div>No options provided</div>}

                </Select>
                <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
            </FormControl>
        </FieldDecorator>}
    </>
    );
});

export { MuiSelect };