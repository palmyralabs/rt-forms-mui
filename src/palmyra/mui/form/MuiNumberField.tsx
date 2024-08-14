import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

import { getFieldHandler, IFormFieldError, ITextField, useFieldManager } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util'
import FieldDecorator from './FieldDecorator';
import { ITextFieldDefinition } from './types';

const MuiNumberField = forwardRef(function MuiNumberField(props: ITextFieldDefinition & TextFieldProps, ref: MutableRefObject<ITextField>) {
    // const fieldGroupManager: IFieldGroupManager = useContext(FieldGroupManagerContext);

    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const error: IFormFieldError = getError();

    const inputRef: any = useRef(null);
    const variant = props?.variant || 'standard';

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            }
        };
    }, [fieldManager]);

    var options = fieldManager.getFieldProps();

    delete options.muiProps;

    options.onChange = (d: any) => { if (!props.readOnly) setValue(d.target.value.replace(/[^\d\.\+\-]/g, '')); }

    const label = props.labelMode != 'title' ? props.label : ''
    
    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <TextField 
                label={label}
                variant={variant}
                fullWidth={true}
                inputRef={inputRef}
                {...options}
                value={getValue()}
                error={error.status}
                helperText={error.message}
            />
        </FieldDecorator>}
    </>
    );
});

export { MuiNumberField };