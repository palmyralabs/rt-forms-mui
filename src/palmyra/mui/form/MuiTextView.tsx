import { useRef, useImperativeHandle, forwardRef, RefObject } from 'react';
import { getFieldHandler, ITextField, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util'
import { ITextFieldDefinition } from './types';

interface TextViewAttributeDefinition {
    textAlign?: 'left' | 'right' | 'center',
    variant?: 'standard' | 'outlined'
}

const MuiTextView = forwardRef(function MuiTextView(props: ITextFieldDefinition & TextViewAttributeDefinition,
    ref: RefObject<ITextField>) {

    const fieldManager = useFieldManager(props.attribute, props);
    const { getValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const textAlign: any = props.textAlign || 'left';
    const inputRef: any = useRef(null);
    const variant = props.variant || 'standard';

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

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            {(props.label) ?
                <div {...options} className='text-view-field-container'>
                    <div className="text-view-label">{props.label}</div>
                    <div className={props.label ? (variant === 'outlined' ? "text-view-value-outlined" : "text-view-value") : ''}>{getValue()}</div>
                </div> :
                <div {...options} style={{ textAlign: textAlign }}>
                    {getValue()}
                </div>
            }
        </FieldDecorator>}
    </>
    );
});

export { MuiTextView };