import { useRef } from "react";
import { describe, expect, test } from "vitest";
import { act, fireEvent, queryByAttribute, render, renderHook, screen } from '@testing-library/react';
import { MuiDatePicker } from "../../../src/palmyra";
import { IForm, PalmyraForm } from "@palmyralabs/rt-forms";
import dayjs from 'dayjs';

describe('MuiDatePicker', () => {

    const initProps = () => {
        const getById = queryByAttribute.bind(null, 'id');
        const formRef = renderHook(() => useRef<IForm>()).result.current;
        const fieldRef = renderHook(() => useRef<any>()).result.current;
        const getByRole = queryByAttribute.bind(null, 'role')
        return { getById, formRef, fieldRef, getByRole }
    }

    test('Change the New Date', async () => {
        const { formRef } = initProps();

        const datePickerDefn = <PalmyraForm formData={{ datePicker: "2003-01-21" }} ref={formRef}>
            <MuiDatePicker attribute="datePicker" variant="standard" label="Date" />
        </PalmyraForm>

        const renderer = render(datePickerDefn);
        const datePicker = renderer.getByLabelText('Date') as HTMLInputElement;

        act(() => {
            fireEvent.change(datePicker, { target: { value: "2025-12-21" } });
        });

        const updatedValue = formRef.current.getData().datePicker;
        expect(updatedValue).toBe("2025-12-21");
    });

    // test('ReadOnly -> Write', () => {
    //     const { formRef, fieldRef } = initProps();
    //     const datePickerDefn = <PalmyraForm formData={{ datePicker: "2003-01-21" }} ref={formRef} >
    //         <MuiDatePicker attribute="datePicker" variant="standard" label="Date" readOnly />
    //     </PalmyraForm>

    //     const renderer = render(datePickerDefn);
    //     const datePicker = renderer.getByLabelText('Date') as HTMLInputElement;

    //     expect(datePicker).toHaveProperty('readOnly', true);

    //     act(() => {
    //         fieldRef.current.setReadOnly(false);
    //     });

    //     expect(datePicker).toHaveProperty('readOnly', false);
    // })

    test('Write -> ReadOnly', () => {
        const { formRef, fieldRef } = initProps();
        const datePickerDefn = <PalmyraForm formData={{ datePicker: "2003-01-21" }} ref={formRef} >
            <MuiDatePicker attribute="datePicker" variant="standard" ref={fieldRef} label="Date" />
        </PalmyraForm>

        const renderer = render(datePickerDefn);
        const datePicker = renderer.getByLabelText('Date') as HTMLInputElement;

        expect(datePicker).toHaveProperty('readOnly', false);

        act(() => {
            fieldRef.current.setReadOnly(true);
        });

        expect(datePicker).toHaveProperty('readOnly', true);
    })

    test('Disabled -> Enabled', () => {
        const { formRef, fieldRef } = initProps();
        const datePickerDefn = <PalmyraForm formData={{ datePicker: "2003-01-21" }} ref={formRef} >
            <MuiDatePicker attribute="datePicker" variant="standard" ref={fieldRef} label="Date" disabled />
        </PalmyraForm>

        const renderer = render(datePickerDefn);
        const datePicker = renderer.getByLabelText('Date') as HTMLInputElement;

        expect(datePicker).toHaveProperty('disabled', true);

        act(() => {
            fieldRef?.current?.setDisabled(false);
        });

        expect(datePicker).toHaveProperty('disabled', false);
    })

    test('Enabled -> Disabled', () => {
        const { formRef, fieldRef } = initProps();
        const datePickerDefn = <PalmyraForm formData={{ datePicker: "2003-01-21" }} ref={formRef} >
            <MuiDatePicker attribute="datePicker" variant="standard" ref={fieldRef} label="Date" />
        </PalmyraForm>

        const renderer = render(datePickerDefn);
        const datePicker = renderer.getByLabelText('Date') as HTMLInputElement;

        act(() => {
            fieldRef.current.setDisabled(true);
        });

        expect(datePicker).toHaveProperty('disabled', true);
    })

    test('Minimum Date Validation', async () => {
        const { formRef, fieldRef } = initProps();

        const minDate = dayjs('2003-01-01');
        const newDate = dayjs('2002-01-01');

        const datePickerDefn = (
            <PalmyraForm formData={{ datePicker: '2003-01-21' }} ref={formRef}>
                <MuiDatePicker
                    attribute="datePicker" variant="standard" ref={fieldRef} label="Date" minDate={minDate} />
            </PalmyraForm>
        );

        render(datePickerDefn);

        act(() => {
            if (newDate.isBefore(minDate))
                return;
            fieldRef.current.setValue(newDate);
        });

        const updatedValue = formRef.current.getData().datePicker;
        expect(updatedValue).toBe('2003-01-21');
    });


    test('Maximum Date Validation', async () => {
        const { formRef, fieldRef } = initProps();

        const maxDate = dayjs('2003-01-01');
        const newDate = dayjs('2003-01-21');

        const datePickerDefn = (
            <PalmyraForm formData={{ datePicker: '2002-11-25' }} ref={formRef}>
                <MuiDatePicker
                    attribute="datePicker" variant="standard" ref={fieldRef} label="Date" maxDate={maxDate} />
            </PalmyraForm>
        );

        render(datePickerDefn);

        act(() => {
            if (newDate.isAfter(maxDate))
                return;
            fieldRef.current.setValue(newDate);
        });

        const updatedValue = formRef.current.getData().datePicker;
        expect(updatedValue).toBe('2002-11-25');
    });

    // test('Optional -> Mandatory', () => {
    //     const { formRef, fieldRef } = initProps();
    //     const datePickerDefn = <PalmyraForm formData={{ datePicker: "2003-01-21" }} ref={formRef} >
    //         <MuiDatePicker attribute="datePicker" variant="standard" ref={fieldRef} label="Date" />
    //     </PalmyraForm>

    //     const renderer = render(datePickerDefn);
    //     const datePicker = renderer.getByLabelText('Date') as HTMLInputElement;

    //     testOptional2Mandatory(datePicker, fieldRef, "This Field is mandatory");
    // })

});