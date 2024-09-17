import { forwardRef, useRef, useImperativeHandle } from 'react';
import './TextView.css';
import { IServerLookupDefinition, TextViewAttributeDefinition } from './types';
import { getValueByKey, hasDot } from '@palmyralabs/ts-utils';
import { getFieldLabel } from './util';
import { getFieldHandler, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';

const MuiLookupView = forwardRef(function MuiLabelDisplay(props: IServerLookupDefinition & TextViewAttributeDefinition, ref) {

    const fieldManager = useFieldManager(props.attribute, props);
    const { getValue, mutateOptions } = fieldManager;
    const currentRef: any = ref ? ref : useRef(null);
    const data = getValue();
    const lookupOptions = props.lookupOptions;
    const labelKey = lookupOptions?.labelAttribute || 'name';
    const textAlign: any = props.textAlign || 'left';
    const variant: string = props.variant || 'standard';
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

    const labelAccessor = hasDot(labelKey) ?
        (d: any) => (getValueByKey(labelKey, d)) :
        (d: any) => (d?.[labelKey]);

    var options = fieldManager.getFieldProps();

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            {(props.label) ?
                <div {...options} className='text-view-field-container'>
                    <div className="text-view-label">{props.label}</div>
                    <div className={(variant == 'standard') ? "text-view-value" : "text-view-value-outlined"}>{labelAccessor(data) || 'N/A'}</div>
                </div> :
                <div {...options} style={{ textAlign: textAlign }}>
                    {labelAccessor(data) || 'N/A'}
                </div>
            }
        </FieldDecorator>}
    </>);
});

export default MuiLookupView;
