import { useRef, useImperativeHandle, forwardRef, useState, useMemo, useEffect, MutableRefObject } from 'react';
import { FormControl, FormControlLabel, FormHelperText, Switch, SwitchProps } from '@mui/material';
import FieldDecorator from './FieldDecorator';
import { ISwitchDefinition } from './types';
import { IFormFieldError, ISwitchField, getFieldHandler, useFieldManager } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import parseOptions from './options/OptionsParser';
import { Android12Switch, IOSSwitch, MaterialUISwitch } from './options/SwitchTypes';

const MuiSwitch = forwardRef(function MuiSwitch(props: ISwitchDefinition & SwitchProps, ref: MutableRefObject<ISwitchField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ISwitchField>(null);
    const error: IFormFieldError = getError();
    const switchType = props.switch;

    const parsedOptions = useMemo(() => parseOptions(props.options, props.label),
        [props.options, props.label]);

    const parseValue = (value, defaultValue): boolean => {
        var checkedValue = parsedOptions['checked'].value;
        if (value != undefined && value != null) {
            return checkedValue == value;
        } else
            return checkedValue == defaultValue;
    }

    const [isOn, setIsOn] = useState(parseValue(getValue(), props.defaultValue));

    const inputRef = useRef(null);

    useEffect(() => {
        setIsOn(parseValue(getValue(), props.defaultValue));
    }, [getValue()])

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.checked = true;
                inputRef.current.focus();
            },
            getOptions() {

            },
            setOptions(d) {

            }
        };
    }, [fieldManager]);

    const toggleStatus = () => {
        setIsOn(!isOn);
    };

    useEffect(() => {
        options.onChange = () => (getLabel());
    }, [isOn])

    const getLabel = () => {
        var key = isOn ? 'checked' : 'unchecked';
        return parsedOptions[key].title;
    }

    const getOptionValue = () => {
        var key = isOn ? 'checked' : 'unchecked';
        return parsedOptions[key].value;
    }

    let Muiswitch: any;

    if (switchType == "IOSSwitch") {
        Muiswitch = IOSSwitch;
    } else if (switchType == "Android12Switch") {
        Muiswitch = Android12Switch;
    } else if (switchType == "MaterialUISwitch") {
        Muiswitch = MaterialUISwitch;
    } else {
        Muiswitch = Switch;
    }

    var options = fieldManager.getFieldProps();

    options.onChange = (d: any) => { if (!props.readOnly) setValue(d.target.checked); }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControl error={error.status} {...options} value={getValue()}>
                <FormControlLabel value={getOptionValue()} inputRef={(i) => { inputRef.current = i; }}
                    control={<Muiswitch sx={{ m: 1 }} checked={isOn} onClick={toggleStatus}
                        disabled={props.readOnly}
                    />}
                    label={getLabel()}
                />
                <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
            </FormControl>
        </FieldDecorator>}
    </>
    );
});

export {MuiSwitch};