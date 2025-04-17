import { useRef } from "react";
import { describe, expect, test } from "vitest";
import { act, fireEvent, queryByAttribute, render, renderHook } from '@testing-library/react';
import { MuiDateTimePicker } from "../../../src/palmyra";
import { IForm, PalmyraForm } from "@palmyralabs/rt-forms";
import '@testing-library/jest-dom';

describe('MuiDateTimePicker', () => {

    const initProps = () => {
        const getById = queryByAttribute.bind(null, 'id');
        const formRef = renderHook(() => useRef<IForm>()).result.current;
        const fieldRef = renderHook(() => useRef<any>()).result.current;
        const getByRole = queryByAttribute.bind(null, 'role')
        return { getById, formRef, fieldRef, getByRole }
    }

    test('Change the New Date and Time', async () => {
        const { formRef } = initProps();

        const dateTimePickerDefn = <PalmyraForm formData={{ dateTimePicker: "2003-01-17 12:23:23" }} ref={formRef}>
            <MuiDateTimePicker attribute="dateTimePicker" variant="standard" label="DateTime"
                serverPattern="YYYY-MM-DD hh:mm:ss" />
        </PalmyraForm>

        const renderer = render(dateTimePickerDefn);
        const dateTimePicker = renderer.getByLabelText('DateTime') as HTMLInputElement;

        act(() => {
            fireEvent.change(dateTimePicker, { target: { value: "2025-01-01 01:23:23" } });
        });

        const updatedValue = formRef.current.getData().dateTimePicker;
        expect(updatedValue).toBe("2025-01-01 01:23:23");
    });

    test('ReadOnly -> Write', () => {
        const { formRef, fieldRef } = initProps();
        const dateTimePickerDefn = <PalmyraForm formData={{ dateTimePicker: "2003-01-17 12:23:23" }} ref={formRef} >
            <MuiDateTimePicker attribute="dateTimePicker" variant="standard" label="DateTime" ref={fieldRef}
                serverPattern="YYYY-MM-DD hh:mm:ss" readOnly />
        </PalmyraForm>

        const renderer = render(dateTimePickerDefn);
        const dateTimePicker = renderer.getByLabelText('DateTime') as HTMLInputElement;

        expect(dateTimePicker).toHaveProperty('readOnly', true);

        act(() => {
            fieldRef.current.setReadOnly(false);
        });

        expect(dateTimePicker).toHaveProperty('readOnly', false);
    })

    test('Write -> ReadOnly', () => {
        const { formRef, fieldRef } = initProps();
        const dateTimePickerDefn = <PalmyraForm formData={{ dateTimePicker: "2003-01-17 12:23:23" }} ref={formRef} >
            <MuiDateTimePicker attribute="dateTimePicker" variant="standard" label="DateTime" ref={fieldRef}
                serverPattern="YYYY-MM-DD hh:mm:ss" />
        </PalmyraForm>

        const renderer = render(dateTimePickerDefn);
        const dateTimePicker = renderer.getByLabelText('DateTime') as HTMLInputElement;

        expect(dateTimePicker).toHaveProperty('readOnly', false);

        act(() => {
            fieldRef.current.setReadOnly(true);
        });

        expect(dateTimePicker).toHaveProperty('readOnly', true);
    })

    test('Disabled -> Enabled', () => {
        const { formRef, fieldRef } = initProps();
        const dateTimePickerDefn = <PalmyraForm formData={{ datePicker: "2003-01-17 12:23:23" }} ref={formRef} >
            <MuiDateTimePicker attribute="dateTimePicker" variant="standard" label="DateTime" ref={fieldRef}
                serverPattern="YYYY-MM-DD hh:mm:ss" disabled />
        </PalmyraForm>

        const renderer = render(dateTimePickerDefn);
        const dateTimePicker = renderer.getByLabelText('DateTime') as HTMLInputElement;

        expect(dateTimePicker).toHaveProperty('disabled', true);

        act(() => {
            fieldRef?.current?.setDisabled(false);
        });

        expect(dateTimePicker).toHaveProperty('disabled', false);
    })

    test('Enabled -> Disabled', () => {
        const { formRef, fieldRef } = initProps();
        const dateTimePickerDefn = <PalmyraForm formData={{ dateTimePicker: "2003-01-17 12:23:23" }} ref={formRef} >
            <MuiDateTimePicker attribute="dateTimePicker" variant="standard" label="DateTime" ref={fieldRef}
                serverPattern="YYYY-MM-DD hh:mm:ss" />
        </PalmyraForm>

        const renderer = render(dateTimePickerDefn);
        const dateTimePicker = renderer.getByLabelText('DateTime') as HTMLInputElement;
        expect(dateTimePicker).toHaveProperty('disabled', false);

        act(() => {
            fieldRef.current.setDisabled(true);
        });

        expect(dateTimePicker).toHaveProperty('disabled', true);
    })

});