import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { Checkbox, CheckboxProps, FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import FieldDecorator from './FieldDecorator';
import { ICheckBoxField, IFormFieldError, ISwitchField, getFieldHandler, useFieldManager } from '@palmyralabs/rt-forms';
import { generateOptions, getFieldLabel } from './util';
import { ICheckBoxGroupDefinition } from './types';
import { TbSquareRounded, TbSquareRoundedCheckFilled } from 'react-icons/tb';

interface MuiCheckBoxGroupDefn extends ICheckBoxGroupDefinition {
    muiProps?: CheckboxProps
}

const MuiCheckBoxGroup = forwardRef(function MuiCheckBoxGroup(props: MuiCheckBoxGroupDefn, ref: MutableRefObject<ICheckBoxField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ISwitchField>(null);
    // const autoFocus = props.muiProps.autoFocus || false;
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

    var options = generateOptions(props, mutateOptions, getValue());

    delete options.muiProps;

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
        // eventListeners.onValueChange(currentData.toString())
    }


    options.onChange = (d: any) => {
        if (!props.readOnly) { _updateData(d.target.value, d.target.checked), setValue(d.target.value) };
    }


    const isSelected = (key: string) => {
        return getValue().includes(key);
    }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControl fullWidth error={error.status} {...options} style={{ flexDirection: props.flexDirection }}>
                {props.options ?
                    Object.keys(props.options).map((key, i) => (
                        <FormControlLabel key={key} value={key}
                            control={<Checkbox icon={<TbSquareRounded style={{ fontSize: '20px' }} />} checkedIcon={<TbSquareRoundedCheckFilled style={{ fontSize: '20px' }} />}
                                checked={isSelected(key)} //autoFocus={autoFocus}
                                disabled={props.readOnly}
                                inputRef={(r) => { if (0 == i) inputRef.current = r }}
                            />}
                            label={props.options[key]} />
                    ))
                    : <div>No options provided</div>}
                <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
            </FormControl>
        </FieldDecorator>}
    </>
    )
});

export default MuiCheckBoxGroup;