import { useRef, useImperativeHandle, forwardRef, RefObject } from 'react';
import { Rating, RatingProps } from '@mui/material';
import { IRatingDefinition } from './types';
import { IFormFieldError, IRatingField, getFieldHandler, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { Star, StarOutline } from '@mui/icons-material';


const MuiRating = forwardRef(function MuiRating(props: IRatingDefinition & RatingProps, ref: RefObject<IRatingField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const currentRef = ref ? ref : useRef<IRatingField>(null);
    const error: IFormFieldError = getError();
    const inputRef = useRef(null);
    const variant = props.variant || 'standard';
    const autoFocus = props?.autoFocus || false;
    const precision = props?.precision || 1;
    const max = props?.max || 5;
    const Icon: any = props?.icon || Star;
    const EmptyIcon: any = props?.emptyIcon || StarOutline;

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

    var options = fieldManager.getFieldProps();

    options.onChange = (event: any, v: any) => {
        if (!props.readOnly) {
            setValue(event.target.value);
            if (props.onChange)
                props.onChange(event, v);
        }
    }
    options.onBlur = refreshError;

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Rating
                variant={variant}
                precision={precision}
                readOnly={props.readOnly}
                disabled={props.disabled}
                inputRef={inputRef}
                size={props?.fieldProps?.size}
                icon={<Icon />}
                emptyIcon={<EmptyIcon />}
                max={max}
                {...options}
                value={getValue()}
                error={error.status}
                helperText={error.message}
                autoFocus={autoFocus}
            />
        </FieldDecorator>}
    </>
    );
});

export { MuiRating };