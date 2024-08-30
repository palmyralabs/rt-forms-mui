import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import { FieldDecorator, ICheckBoxField, ISwitchField, getFieldHandler, useFieldManager } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { ICheckBoxDefinition } from './types';

const MuiCheckBox = forwardRef(function MuiCheckBox(props: CheckboxProps & ICheckBoxDefinition, ref: MutableRefObject<ICheckBoxField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ISwitchField>(null);
    const value: boolean = getValue() == true;
    const inputRef: any = useRef(null);

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.checked = true;
                inputRef.current.focus();
            },
            setOptions(d: any) {
            },
            getOptions() {
            }
        };
    }, [fieldManager]);

    var options = fieldManager.getFieldProps();

    options.onChange = (d: any, checked: boolean) => {
        if (!props.readOnly) {
            setValue(d.target.checked);
            if (props.onChange) {
                props.onChange(d, checked)
            }
        }
    }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControlLabel
                control={<Checkbox
                    {...options}
                    checked={value}
                    disabled={props.disabled} readOnly={props.readOnly}
                    inputRef={(r) => { inputRef.current = r }}
                />}
                label={props.label} />
        </FieldDecorator>}
    </>
    )
});

export { MuiCheckBox };