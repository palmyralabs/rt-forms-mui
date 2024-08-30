import { format as formatDate, isValid, parse } from 'date-fns';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import './TextView.css';
import { FieldDecorator, IDateField, getFieldHandler, useFieldManager } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { IDatePickerDefinition, TextViewAttributeDefinition } from './types';

const MuiDateView = forwardRef(function MuiLabelDisplay(props: IDatePickerDefinition & TextViewAttributeDefinition, ref) {

    const fieldManager = useFieldManager(props.attribute, props);
    const { getValue, setValue, mutateOptions } = fieldManager;
    const currentRef: any = ref ? ref : useRef<IDateField>(null);
    const value = getValue();
    const textAlign: any = props.textAlign || 'left';
    const variant: string = props.variant || 'standard';
    const displayFormat: string = props.displayPattern || "dd-MM-yyyy";
    const inputRef: any = useRef(null);

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            }
        };
    }, [fieldManager]);

    const parseDateFromString = (value: any) => {
        const formats = ['yyyy-MM-dd', 'dd-MM-yyyy', 'MM-dd-yyyy', 'dd-yyyy-MM', 'yyyy/MM/dd', 'dd/MM/yyyy',
            "yyyy-MM-dd'T'HH:mm:ss", "dd-MM-yyyy HH:mm", "MM-dd-yyyy h:mm a", "yyyy/MM/dd HH:mm:ss", "dd/MM/yyyy HH:mm"
        ];
        for (const format of formats) {
            const date = parse(value, format, new Date());
            if (isValid(date)) {
                return date;
            }
        }
        return null;
    };

    const formatValue = (value: any) => {
        if (!value) {
            return "";
        }
        if (value) {
            const date = parseDateFromString(value);
            if (isValid(date)) {
                return formatDate(date, displayFormat);
            } else {
                console.error("Invalid date provided:", value);
                return "";
            }
        }
    };

    var options = fieldManager.getFieldProps();
    options.onChange = (d: any) => { if (!props.readOnly) setValue(d.target.value); }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            {(props.label) ?
                <div {...options} className='text-view-field-container'>
                    <div className="text-view-label">{props.label}</div>
                    <div className={(variant == 'standard') ? "text-view-value" : "text-view-value-outlined"}>{formatValue(value)}</div>
                </div> :
                <div {...options} style={{ textAlign: textAlign }}>
                    {formatValue(value)}
                </div>
            }
        </FieldDecorator>}
    </>);
});

export default MuiDateView;