import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { Rating, RatingProps } from '@mui/material';
import FieldDecorator from './FieldDecorator';
import { IRatingDefinition } from './types';
import { IFormFieldError, IRatingField, getFieldHandler, useFieldManager } from '@palmyralabs/rt-forms';
import { generateOptions, getFieldLabel } from './util';
import { Star, StarOutline } from '@mui/icons-material';

interface MuiRatingDefn extends IRatingDefinition {
    muiProps?: RatingProps
}

const MuiRating = forwardRef(function MuiRating(props: MuiRatingDefn, ref: MutableRefObject<IRatingField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<IRatingField>(null);
    const error: IFormFieldError = getError();
    const inputRef = useRef(null);
    const variant = props.variant || 'standard';
    const autoFocus = props?.muiProps?.autoFocus || false;
    const precision = props?.muiProps?.precision || 1;
    const max = props?.muiProps?.max || 5;
    const Icon: any = props?.muiProps?.icon || Star;
    const EmptyIcon: any = props?.muiProps?.emptyIcon || StarOutline;

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


    var options = generateOptions(props, mutateOptions, getValue());

    delete options.muiProps;

    options.onChange = (d: any) => { if (!props.readOnly) setValue(d.target.value); }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Rating {...options}
                variant={variant}
                precision={precision}
                readOnly={props.readOnly}
                disabled={props.disabled}
                inputRef={inputRef}
                size={props?.fieldProps?.size}
                icon={<Icon />}
                emptyIcon={<EmptyIcon />}
                max={max}
                {...props.muiProps}
                error={error.status}
                helperText={error.message}
                autoFocus={autoFocus}
            />
        </FieldDecorator>}
    </>
    );
});

export { MuiRating };