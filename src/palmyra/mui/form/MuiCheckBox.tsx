import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { Checkbox, CheckboxProps, FormControl, FormControlLabel } from '@mui/material';
import FieldDecorator from './FieldDecorator';
import { ICheckBoxField, ISwitchField, getFieldHandler, useFieldManager } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { ICheckBoxDefinition } from './types';
import { TbSquareRounded, TbSquareRoundedCheckFilled } from 'react-icons/tb';

interface MuiCheckBoxDefn extends ICheckBoxDefinition {
    muiProps?: CheckboxProps
}

const MuiCheckBox = forwardRef(function MuiCheckBox(props: MuiCheckBoxDefn, ref: MutableRefObject<ICheckBoxField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ISwitchField>(null);
    // const autoFocus = props.muiProps.autoFocus || false;
    const Icon = props.icon || TbSquareRounded;
    const CheckedIcon = props.checkedIcon || TbSquareRoundedCheckFilled;
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

    options.onChange = (d: any) => {
        if (!props.readOnly){
            setValue(d.target.checked);
        }        
    }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControl {...options} value={getValue()} >
                <FormControlLabel
                    control={<Checkbox className="customCheckbox" icon={<Icon />} checkedIcon={<CheckedIcon />}
                        checked={value} // autoFocus={autoFocus}
                        disabled={props.disabled} readOnly={props.readOnly}
                        inputRef={(r) => { inputRef.current = r }}
                    />}
                    label={props.label} />
            </FormControl>
        </FieldDecorator>}
    </>
    )
});

export { MuiCheckBox };