import { describe, expect, test } from "vitest";
import { fireEvent, queryByAttribute, render, renderHook } from '@testing-library/react';
import { MuiSelect } from "../../../src/palmyra";
import { IForm, ISelectField, PalmyraForm } from "@palmyralabs/rt-forms";
import { act, useRef } from "react";

describe('Mui Select', () => {

    const initProps = () => {
        const getById = queryByAttribute.bind(null, 'id');
        const formRef = renderHook(() => useRef<IForm>()).result.current;
        const fieldRef = renderHook(() => useRef<ISelectField>()).result.current;
        const getByRole = queryByAttribute.bind(null, 'role')
        // const getByText = queryByAttribute.bind(null, 'text')
        return { getById, formRef, fieldRef, getByRole }
    }

    test('Select Input', () => {
        const { getById, formRef } = initProps();
        const selectDefn = <PalmyraForm formData={{ selectInput: 1 }} ref={formRef} >
            <MuiSelect id="selectInput" attribute="selectInput"
                options={{ 1: "True", 2: "False" }} />
        </PalmyraForm>

        const dom = render(selectDefn);

        const selectField = getById(dom.container, 'selectInput');

        fireEvent.mouseDown(selectField);
        fireEvent.click(selectField);
    });

    test('Select Change', async () => {
        const { getById, formRef } = initProps();
        const selectDefn = (
            <PalmyraForm formData={{ select: 1 }} ref={formRef}>
                <MuiSelect id="select" attribute="select" options={{ 1: "True", 2: "False" }} />
            </PalmyraForm>
        );

        const { getByText } = render(selectDefn);

        const dom = render(selectDefn);

        const selectField = getById(dom.container, 'select');

        fireEvent.mouseDown(selectField);

        const option = getByText('False');
        fireEvent.click(option);

        expect(selectField.textContent).toBe('False');
    });

    // test('Disabled -> Enabled', () => {
    //     const { getById, formRef, fieldRef } = initProps();
    //     const selectFieldDefn = <PalmyraForm formData={{ selectField: 1 }} ref={formRef} >
    //         <MuiSelect id="selectField" attribute="selectField" options={{ 1: "True", 2: "False" }} disabled />
    //     </PalmyraForm>

    //     const dom = render(selectFieldDefn);

    //     const selectField = getById(dom.container, 'selectField');
    //     expect(selectField).toHaveProperty('disabled', true);

    //     act(() => {
    //         // fieldRef.current.setValue(1);
    //         fieldRef.current.setDisabled(false);
    //     });

    //     expect(selectField).toHaveProperty('disabled', false);
    // })

});