import { useRef, useImperativeHandle, forwardRef, RefObject } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { getFieldHandler, IFormFieldError, ITextField, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util'
import { ITextFieldDefinition } from './types';

const MuiNumberField = forwardRef(function MuiNumberField(props: ITextFieldDefinition & TextFieldProps, ref: RefObject<ITextField>) {
    // const fieldGroupManager: IFieldGroupManager = useContext(FieldGroupManagerContext);

    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
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

    options.onChange = (event: any) => {
        if (!props.readOnly) {
            const value = event.target.value;
            const v = event.target.value.replace(/[^\d\.\+\-]/g, '');
            if (value == v) {
                setValue(v);
                if (props.onChange)
                    props.onChange(event);
            }
        }
    }
    options.onBlur = refreshError;

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <TextField
                label={props.label}
                variant={variant}
                fullWidth={true}
                inputProps={{ readOnly: options.readOnly }}
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