import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps } from '@mui/material';
import FieldDecorator from './FieldDecorator';
import { getFieldHandler, IFormFieldError, ISelectField, ITextField, useFieldManager } from '@palmyralabs/rt-forms';
import { generateOptions, getFieldLabel } from './util';
import { ISelectDefinition } from './types';

interface MuiSelectDefn extends ISelectDefinition {
    muiProps?: SelectProps
}

const MuiSelect = forwardRef(function MuiSelect(props: MuiSelectDefn, ref: MutableRefObject<ISelectField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const error: IFormFieldError = getError();

    const inputRef: any = useRef(null);
    const variant = props.muiProps.variant || 'standard';

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

    const options = props.options;

    var inputProps = generateOptions(props, mutateOptions, getValue());

    if (props.readOnly) {
        inputProps.inputProps = { readOnly: true };
    }

    inputProps.onChange = (d: any) => { if (!props.readOnly) setValue(d.target.value); }

    const fieldMargin: any = 0; //props?.fieldProps?.size == 'small' ? 1 : 0;
    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControl variant={variant} fullWidth error={error.status}>
                {props.label ?
                    <InputLabel required={inputProps.required}>{props.label}</InputLabel> : <></>}
                <Select sx={{
                    m: fieldMargin
                }} {...inputProps} inputRef={(i) => { inputRef.current = i; }} >
                    {options
                        ? Object.keys(options).map((key, index) => (
                            <MenuItem key={index} value={key}>{options[key]}</MenuItem>
                        )
                        )
                        : props.muiProps.children
                            ? props.muiProps.children : <div>No options provided</div>}

                </Select>
                <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
            </FormControl>
        </FieldDecorator>}
    </>
    );
});

export { MuiSelect };