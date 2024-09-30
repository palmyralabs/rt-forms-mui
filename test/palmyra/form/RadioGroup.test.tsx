import { describe, test } from "vitest";
import { fireEvent, queryByAttribute, render, renderHook } from '@testing-library/react';
import { MuiRadioGroup } from "../../../src/palmyra";
import { IForm, IRadioGroupField, PalmyraForm } from "@palmyralabs/rt-forms";
import { useRef } from "react";
import '@testing-library/jest-dom';


describe('RadioGroup', () => {
    const radioGroupOptions: any = [
        { value: '1', label: 'Active' },
        { value: '0', label: 'De-Active' }
    ];

    const initProps = () => {
        const getById = queryByAttribute.bind(null, 'id');
        const formRef = renderHook(() => useRef<IForm>()).result.current;
        const fieldRef = renderHook(() => useRef<IRadioGroupField>()).result.current;
        return { getById, formRef, fieldRef }
    }

    test('Input', () => {
        const { formRef } = initProps();

        const radioGroupDefn = <PalmyraForm formData={{ radioInput: "welcome" }} ref={formRef} >
            <MuiRadioGroup id="radioInput" attribute="radioInput" options={radioGroupOptions} />
        </PalmyraForm>

        const dom = render(radioGroupDefn);
        const radioButton = dom.getAllByRole("radio")

        fireEvent.click(radioButton[0]);
        const updatedFormState = formRef.current?.getData();

        expect(updatedFormState?.radioInput).toBe('1');
    });

    test('Disabled', () => {
        const { formRef, fieldRef } = initProps();

        const radioGroupDefn = <PalmyraForm formData={{ radioInput: "welcome" }} ref={formRef} >
            <MuiRadioGroup id="radioInput" attribute="radioInput" options={radioGroupOptions}
                disabled ref={fieldRef} />
        </PalmyraForm>
        const dom = render(radioGroupDefn);

        const radioInput = dom.getAllByRole('radio');
        radioInput.forEach((radio) => {
            expect(radio).toBeDisabled();
        })
    })


    test('Not Required', () => {
        const { formRef, fieldRef } = initProps();
        const radioGroupDefn = <PalmyraForm formData={{ radioInput: "welcome" }} ref={formRef} >
            <MuiRadioGroup id="radioInput" attribute="radioInput" options={radioGroupOptions}
                missingMessage="Blank not allowed" ref={fieldRef} />
        </PalmyraForm>

        const dom = render(radioGroupDefn);
        const radioInput = dom.getAllByRole('radiogroup');
        radioInput.forEach((radio) => {
            expect(radio).not.toBeRequired();
        });
    })

    test('Required', () => {
        const { formRef } = initProps();
        const radioGroupDefn = <PalmyraForm formData={{ radioInput: "welcome" }} ref={formRef} >
            <MuiRadioGroup id="radioInput" attribute="radioInput" options={radioGroupOptions}
                missingMessage="Blank not allowed" required />
        </PalmyraForm>

        const dom = render(radioGroupDefn);
        const radioGroup = dom.container.querySelectorAll("input[type='radio']");

        radioGroup.forEach((radio) => {
            expect(radio).toBeRequired();
        });
    })

});