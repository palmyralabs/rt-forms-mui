import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { Checkbox, CheckboxProps, FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import { FieldDecorator, ICheckBoxField, IFormFieldError, getFieldHandler, useFieldManager } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { ICheckBoxGroupDefinition } from './types';
import { TbSquareRounded, TbSquareRoundedCheckFilled } from 'react-icons/tb';

const MuiCheckBoxGroup = forwardRef(function MuiCheckBoxGroup(props: CheckboxProps & ICheckBoxGroupDefinition, ref: MutableRefObject<ICheckBoxField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ICheckBoxField>(null);
    const autoFocus = props.autoFocus || false;
    const error: IFormFieldError = getError();

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

    function _updateData(value: any, checked: any) {
        const currentData = fieldManager.getValue() ? fieldManager.getValue().split(',') : [];
        var index = currentData.indexOf(value);

        if (checked) {
            if (index < 0)
                currentData.push(value);
        } else {
            if (index >= 0) {
                currentData.splice(index, 1);
            }
        }
    }

    options.onChange = (d: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if (!props.readOnly) {
            _updateData(d.target.value, d.target.checked);
            setValue(d.target.value)
            if (props.onChange)
                props.onChange(d, checked);
        };
    }

    const isSelected = (key: string) => {
        return getValue().includes(key);
    }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControl fullWidth style={{ flexDirection: props.flexDirection }} error={error.status} {...options}>
                {options.options ?
                    Object.keys(options.options).map((key, i) => (
                        <FormControlLabel key={i} value={key}
                            control={<Checkbox icon={<TbSquareRounded style={{ fontSize: '20px' }} />} checkedIcon={<TbSquareRoundedCheckFilled style={{ fontSize: '20px' }} />}
                                checked={isSelected(key)} autoFocus={autoFocus}
                                disabled={props.readOnly} {...options}
                                inputRef={(r) => { if (0 == i) inputRef.current = r }}
                            />}
                            label={options.options[key]} />
                    ))
                    : <div>No options provided</div>}
                <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
            </FormControl>
        </FieldDecorator>}
    </>
    )
});

export { MuiCheckBoxGroup };