import { describe, expect, test } from "vitest";
import { act, fireEvent, queryByAttribute, render, renderHook } from '@testing-library/react';
import { MuiDatePicker } from "../../../src/palmyra";
import { IForm, PalmyraForm } from "@palmyralabs/rt-forms";
import { useRef } from "react";

describe('MuiDatePicker', () => {

    const initProps = () => {
        const getById = queryByAttribute.bind(null, 'id');
        const formRef = renderHook(() => useRef<IForm>()).result.current;
        const fieldRef = renderHook(() => useRef<any>()).result.current;
        const getByRole = queryByAttribute.bind(null, 'role')
        return { getById, formRef, fieldRef, getByRole }
    }

    test('Change the New Date', async () => {
        const { formRef, fieldRef } = initProps();

        const datePickerDefn = (
            <PalmyraForm formData={{ datePicker: "2003-01-21" }} ref={formRef}>
                <MuiDatePicker attribute="datePicker" variant="standard" ref={fieldRef} label="Date" />
            </PalmyraForm>
        );

        const renderer = render(datePickerDefn);
        const datePicker = renderer.getByLabelText('Date') as HTMLInputElement;

        const updatedValue = formRef?.current?.getData().dateField;
        console.log(updatedValue);

        act(() => {
            fireEvent.change(datePicker, { target: { value: "2025-12-21" } });
        });

        expect(updatedValue).toBe("2025-12-21");
    });

    test('Write -> ReadOnly', () => {
        const { formRef, fieldRef } = initProps();
        const datePickerDefn = <PalmyraForm formData={{ datePicker: "2003-01-21" }} ref={formRef} >
            <MuiDatePicker attribute="datePicker" variant="standard" ref={fieldRef} label="Date" />
        </PalmyraForm>

        const renderer = render(datePickerDefn);
        const datePicker = renderer.getByLabelText('Date') as HTMLInputElement;

        expect(datePicker).toHaveProperty('readOnly', false)

        act(() => {
            fieldRef.current.setValue("2003-01-21");
            fieldRef.current.setReadOnly(true);
        });
    })

    test('Disabled -> Enabled', () => {
        const { formRef, fieldRef } = initProps();
        const datePickerDefn = <PalmyraForm formData={{ datePicker: "2003-01-21" }} ref={formRef} >
            <MuiDatePicker attribute="datePicker" variant="standard" ref={fieldRef} label="Date" disabled />
        </PalmyraForm>

        const renderer = render(datePickerDefn);
        const inputBox = renderer.getByLabelText('Date') as HTMLInputElement;

        expect(inputBox).toHaveProperty('disabled', true);

        act(() => {
            fieldRef.current.setValue("2003-01-21");
            fieldRef.current.setDisabled(false);
        });

        expect(inputBox).toHaveProperty('disabled', false);
    })

});