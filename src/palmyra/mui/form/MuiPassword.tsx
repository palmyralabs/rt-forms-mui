import { useRef, useImperativeHandle, forwardRef, MutableRefObject, useState } from 'react';
import { IconButton, TextField, TextFieldProps } from '@mui/material';

import { getFieldHandler, IFormFieldError, ITextField, useFieldManager } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util'
import FieldDecorator from './FieldDecorator';
import { ITextFieldDefinition } from './types';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface MuiPasswordDefn extends ITextFieldDefinition {
    muiProps?: TextFieldProps
}

const MuiPassword = forwardRef(function MuiPassword(props: MuiPasswordDefn, ref: MutableRefObject<ITextField>) {
    // const fieldGroupManager: IFieldGroupManager = useContext(FieldGroupManagerContext);

    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const error: IFormFieldError = getError();
    const [showPassword, setShowPassword] = useState(false);
    const inputRef: any = useRef(null);
    const variant = props?.muiProps?.variant || 'standard';

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

    options.onChange = (d: any) => { if (!props.readOnly) setValue(d.target.value); }

    const inputProps = {
        endAdornment: (
            <IconButton onClick={() => setShowPassword((f) => !f)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
        ),
    }


    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <TextField
                InputProps={inputProps}                
                type={showPassword ? 'text' : 'password'}
                label={props.label}
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

export { MuiPassword };