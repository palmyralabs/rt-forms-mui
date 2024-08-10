import { IMutateOptions } from "@palmyralabs/rt-forms";
import { MuiInputFieldOptions } from "./types";


const generateOptions = (p: any, o: IMutateOptions, v?: any) => {
    var result: any = { ...p, ...o };
    result.value = v;
    return result;
}

const getFieldLabel = (props: MuiInputFieldOptions) => {
    const label = props.labelMode == 'title' ? props.label : ''
    if (props.required && label)
        return (
            <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    {label}
                    <span style={{ color: 'red' }}>*</span>
                </div>
            </>
        );
    else
        return label;
}

export { generateOptions, getFieldLabel }