import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

import { getFieldHandler, IFormFieldError, ITextField, useFieldManager } from '@palmyralabs/rt-forms';
import { generateOptions, getFieldLabel } from './util'
import FieldDecorator from './FieldDecorator';
import { ITextFieldDefinition } from './types';

interface MuiTextFieldDefn extends ITextFieldDefinition {
    muiProps?: TextFieldProps
}

const MuiTextArea = forwardRef(function MuiTextArea(props: MuiTextFieldDefn, ref: MutableRefObject<ITextField>) {
    // const fieldGroupManager: IFieldGroupManager = useContext(FieldGroupManagerContext);

    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const error: IFormFieldError = getError();

    const inputRef: any = useRef(null);
    const variant = props.muiProps.variant || 'standard';

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            }
        };
    }, [fieldManager]);

    var options = generateOptions(props, mutateOptions, getValue());

    delete options.muiProps;

    options.onChange = (d: any) => { if (!props.readOnly) setValue(d.target.value); }

    const label = props.labelMode != 'title' ? props.label : ''

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <TextField {...options}
                {...props.muiProps}
                variant={variant}
                label={label}
                minRows={2}
                maxRows={5}
                fullWidth={true}
                multiline
                inputRef={inputRef}
                error={error.status}
                helperText={error.message}
            />
        </FieldDecorator>}
    </>
    );
});

export { MuiTextArea };