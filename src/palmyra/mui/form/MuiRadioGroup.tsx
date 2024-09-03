import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup, RadioProps } from '@mui/material';
import { IFormFieldError, IRadioGroupField, ISwitchField, getFieldHandler, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { IoMdRadioButtonOff } from 'react-icons/io';
import { RiRadioButtonFill } from 'react-icons/ri';
import { IRadioGroupDefinition } from './types';


const MuiRadioGroup = forwardRef(function MuiRadioGroup(props: IRadioGroupDefinition & RadioProps, ref: MutableRefObject<IRadioGroupField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ISwitchField>(null);
    const error: IFormFieldError = getError();
    const row: boolean = props.flexDirection != 'column';
    // const autoFocus = props.autoFocus || false;
    const inputRef: any = useRef(null);

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            },
            setOptions(d: any) {
            },
            getOptions() {
            }
        };
    }, [fieldManager]);


    var fieldOptions = fieldManager.getFieldProps();

    // fieldOptions.onChange = (d: any) => { if (!props.readOnly) setValue(d.target.value); }

    fieldOptions.onChange = (event: any, v: boolean) => {
        if (!props.readOnly) {
            setValue(event.target.value);
            if (props.onChange)
                props.onChange(event, v);
        }
    }

    const getOptions = (options: any) => {
        if (options) {
            if (options instanceof Array) {
                const o: { value: any, label: string }[] = options;
                const result = o.map((v: { value: any, label: string }, index: number) => (
                    <FormControlLabel key={v.value} value={v.value}
                        control={<Radio
                            icon={<IoMdRadioButtonOff size={24} />} checkedIcon={<RiRadioButtonFill size={24} />}
                            inputRef={inputRef} />} label={v.label}
                    />
                ))
                return result;
            }

            if (typeof options == 'object') {
                return Object.keys(options).map((key, index) => (
                    <FormControlLabel key={index} value={key}
                        control={<Radio
                            icon={<IoMdRadioButtonOff size={24} />} checkedIcon={<RiRadioButtonFill size={24} />}
                            inputRef={inputRef} />} label={options[key]}
                    />
                ))
            }
        }

        return <div>No options provided</div>
    }


    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControl fullWidth error={error.status} >
                <div>{props.label}</div>
                <RadioGroup row={row} {...fieldOptions} value={getValue()}>
                    {getOptions(fieldOptions.options)}
                </RadioGroup>
                <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
            </FormControl>
        </FieldDecorator>}
    </>
    );
});

export { MuiRadioGroup };