import { MuiCheckBox, MuiDatePicker, MuiIntegerField, MuiNumberField, 
    MuiPassword, MuiRadioGroup, MuiRating, MuiSelect, 
    MuiServerLookup, MuiSwitch, MuiTextArea, MuiTextField } from "../../../form";

import { ColumnFieldOptions } from "../../../";


const getInvalidField = (props: FieldRequest) => {
    const { fieldDef } = props;
    return <div>{"invalid type " + fieldDef.type} </div>
}

const getReactField = (props: FieldRequest, Input: React.FC) => {
    const fieldDef: any = props.fieldDef;

    return <Input key={fieldDef.title + fieldDef.attribute}
        {...fieldDef}
        label={props.title}
    />;
}

const getField = (fieldDef: ColumnFieldOptions, title?: any) => {
    const { type } = fieldDef;
    const props: FieldRequest = { fieldDef, title };

    switch (type) {
        case 'string':
            return getReactField(props, MuiTextField);
        case 'radio':
            return getReactField(props, MuiRadioGroup);
        case 'select':
            return getReactField(props, MuiSelect);
        case 'date':
            return getReactField(props, MuiDatePicker);
        case 'multiSelect':
            return getReactField(props, MuiSelect);
        case 'checkbox':
            return getReactField(props, MuiCheckBox);
        case 'serverlookup':
            return getReactField(props, MuiServerLookup);
        case 'textarea':
            return getReactField(props, MuiTextArea);
        case 'switch':
            return getReactField(props, MuiSwitch);
        // case 'iosswitch':
        //     return getReactField(props, MuiIOSSwitch);
        case 'password':
            return getReactField(props, MuiPassword);
        case 'rating':
            return getReactField(props, MuiRating);
        case 'float':
        case 'number':
        case 'numbersOnly':
            return getReactField(props, MuiNumberField);
        case 'integer':
            return getReactField(props, MuiIntegerField);
        
        // case 'dateRange':
        //     return getReactField(props, MuiDateRangePicker);
        case 'autoComplete':
            // return getReactField(props, MuiAutoComplete);
        default:
            return getInvalidField(props);
    }
};

export default getField;

interface FieldRequest {
    fieldDef: ColumnFieldOptions,
    title?: string
}
