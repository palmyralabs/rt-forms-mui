import { forwardRef, MutableRefObject, useEffect, useImperativeHandle, useRef, useState } from "react";
import { IServerLookupDefinition } from "./types";
import { getFieldLabel } from "./util";
import { Autocomplete, CircularProgress, FormControl, FormHelperText, TextField } from "@mui/material";
import { delayGenerator } from "@palmyralabs/ts-utils";
import { FieldDecorator, getFieldHandler, IFormFieldError, IServerLookupField, useServerLookupFieldManager } from "@palmyralabs/rt-forms";

const delay100 = delayGenerator(100);

interface IServerLookupInput extends IServerLookupDefinition {
    onChange?: any;
}

const MuiServerLookup = forwardRef(function MuiServerLookup(props: IServerLookupInput,
    ref: MutableRefObject<IServerLookupField>) {

    const [open, setOpen] = useState(false);

    const inputRef: any = useRef(null);

    const fieldManager = useServerLookupFieldManager(props.attribute, props);
    const { getError, getValue, setValue, hasValueInOptions, getOptionValue,
        setSearchText, refreshOptions, options, getFieldProps } = fieldManager;

    const loading = open && options.length < 1;

    const value = getValue();
    const error: IFormFieldError = getError();
    const currentRef = ref ? ref : useRef<IServerLookupField>(null);

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            }
        };
    }, [fieldManager]);

    useEffect(() => {
        if (open)
            delay100(refreshOptions);
    }, [open]);

    const callbacks = {
        onChange: (d: any, value: any, r: any) => {
            setValue(value);
            if (props.onChange)
                props.onChange(d, value, r)
        },
        onInputChange: (d: any, inputValue: any) => {
            if (open) {
                delay100(setSearchText, inputValue);
            }
            return true;
        }
    }

    return <><FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
        customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
        <FormControl fullWidth error={error.status}>
            <Autocomplete
                includeInputInList
                autoHighlight
                multiple={props.multiple}
                readOnly={props.readOnly}
                renderOption={props.renderOption}
                isOptionEqualToValue={hasValueInOptions}
                filterOptions={(x) => x}
                renderInput={(params) => <TextField {...params} inputRef={(i) => { inputRef.current = i; }}
                    variant={props.variant || 'standard'} label={props.label} placeholder={props.placeholder}
                    fullWidth={props.fullWidth || true}
                    // autoFocus={props.autoFocus}
                    required={props.required}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={18} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />}
                getOptionLabel={(o) => getOptionValue(o) + ''}
                {...getFieldProps()}
                value={value}
                options={options}
                open={open}
                onClose={() => { setOpen(false) }}
                onOpen={(e) => { setOpen(true); }}
                {...callbacks}>
            </Autocomplete>
            <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
        </FormControl>
    </FieldDecorator></>
});

export { MuiServerLookup };