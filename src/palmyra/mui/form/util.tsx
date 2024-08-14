import { MuiInputFieldOptions } from "./types";


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

export { getFieldLabel }