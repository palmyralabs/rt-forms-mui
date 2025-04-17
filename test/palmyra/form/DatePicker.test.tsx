import { useRef } from "react";
import { describe, expect, test } from "vitest";
import { act, fireEvent, queryByAttribute, render, renderHook, screen } from '@testing-library/react';
import { MuiDatePicker } from "../../../src/palmyra";
import { IForm, PalmyraForm } from "@palmyralabs/rt-forms";
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';
import '@testing-library/jest-dom';

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

    test('ReadOnly -> Write', () => {
        const { formRef, fieldRef } = initProps();
        const datePickerDefn = <PalmyraForm formData={{ datePicker: "2003-01-21" }} ref={formRef} >
            <MuiDatePicker attribute="datePicker" variant="standard" label="Date" ref={fieldRef} readOnly />
        </PalmyraForm>

        const renderer = render(datePickerDefn);
        const datePicker = renderer.getByLabelText('Date') as HTMLInputElement;

        expect(datePicker).toHaveProperty('readOnly', true);

        act(() => {
            fieldRef.current.setReadOnly(false);
        });

        expect(datePicker).toHaveProperty('readOnly', false);
    })

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
        expect(datePicker).toHaveProperty('disabled', false);

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
                <MuiDatePicker attribute="datePicker" variant="standard" ref={fieldRef} label="Date" minDate={minDate} />
            </PalmyraForm>
        );

        render(datePickerDefn);

        act(() => {
            if (newDate.isAfter(minDate))
                fieldRef.current.setValue(newDate);
        });

        const updatedValue = formRef.current.getData().datePicker;
        expect(updatedValue).toBe('2003-01-21');
    });

    test('Minimum Date Validation - when user typing', async () => {
        const { formRef, fieldRef } = initProps();
        const user = userEvent.setup();

        const minDate = dayjs('2003-01-01');
        const newDate = dayjs('2002-01-01');

        const datePickerDefn = (
            <PalmyraForm formData={{ datePicker: '2003-01-21' }} ref={formRef}>
                <MuiDatePicker attribute="datePicker" variant="standard" ref={fieldRef} label="Date"
                    slotProps={{
                        textField: { inputProps: { 'data-testid': 'date-input' } }
                    }} minDate={minDate} />
            </PalmyraForm>
        );

        render(datePickerDefn);

        const input = screen.getByTestId('date-input');
        await user.clear(input);
        await user.type(input, '2002-01-01');

        act(() => {
            fieldRef.current.setValue(newDate);
        });

        expect((input as HTMLInputElement).value).toBe('2002-01-01');
        await user.tab();
        expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    test('Maximum Date Validation', async () => {
        const { formRef, fieldRef } = initProps();

        const maxDate = dayjs('2003-01-01');
        const newDate = dayjs('2002-01-21');

        const datePickerDefn = (
            <PalmyraForm formData={{ datePicker: '2002-11-25' }} ref={formRef}>
                <MuiDatePicker attribute="datePicker" variant="standard" ref={fieldRef} label="Date" maxDate={maxDate} />
            </PalmyraForm>
        );

        render(datePickerDefn);

        act(() => {
            if (newDate.isBefore(maxDate))
                fieldRef.current.setValue(newDate);
        });

        const updatedValue = formRef.current.getData().datePicker;
        expect(updatedValue).toBe('2002-01-21');
    });

    test('Maximum Date Validation - when user typing', async () => {
        const { formRef, fieldRef } = initProps();
        const user = userEvent.setup();

        const maxDate = dayjs('2003-01-01');
        const newDate = dayjs('2002-01-21');

        const datePickerDefn = (
            <PalmyraForm formData={{ datePicker: '2002-11-25' }} ref={formRef}>
                <MuiDatePicker attribute="datePicker" variant="standard" ref={fieldRef} label="Date"
                    slotProps={{
                        textField: { inputProps: { 'data-testid': 'date-input' } }
                    }} maxDate={maxDate} />
            </PalmyraForm>
        );

        render(datePickerDefn);

        const input = screen.getByTestId('date-input');
        await user.clear(input);
        await user.type(input, '2002-01-21');

        act(() => {
            fieldRef.current.setValue(newDate);
        });

        expect((input as HTMLInputElement).value).toBe('2002-01-21');
        await user.tab();
        expect(input).toHaveAttribute('aria-invalid', 'false');
    });

    test('Minimum and Maximum Date Validation', async () => {
        const { formRef, fieldRef } = initProps();

        const minDate = dayjs('2003-01-01');
        const maxDate = dayjs('2003-12-31');
        const newDate = dayjs('2004-03-28');

        const datePickerDefn = <PalmyraForm formData={{ datePicker: '2003-10-08' }} ref={formRef}>
            <MuiDatePicker
                attribute="datePicker" variant="standard" ref={fieldRef} label="Date" minDate={minDate} maxDate={maxDate} />
        </PalmyraForm>

        render(datePickerDefn);

        act(() => {
            if (!newDate.isBefore(minDate) && !newDate.isAfter(maxDate))
                fieldRef.current.setValue(newDate);
        });

        const updatedValue = formRef.current.getData().datePicker;
        expect(updatedValue).toBe('2003-10-08');
    });

    test('Minimum and Maximum Date Validation - when user typing', async () => {
        const { formRef, fieldRef } = initProps();
        const user = userEvent.setup();

        const minDate = dayjs('2003-01-01');
        const maxDate = dayjs('2003-12-31');
        const newDate = dayjs('2004-03-28');

        const datePickerDefn = (
            <PalmyraForm formData={{ datePicker: '2003-10-08' }} ref={formRef}>
                <MuiDatePicker
                    attribute="datePicker" variant="standard" ref={fieldRef} label="Date"
                    slotProps={{
                        textField: { inputProps: { 'data-testid': 'date-input' } }
                    }} minDate={minDate} maxDate={maxDate} />
            </PalmyraForm>
        );

        render(datePickerDefn);

        const input = screen.getByTestId('date-input');
        await user.clear(input);
        await user.type(input, '2004-03-28');

        act(() => {
            fieldRef.current.setValue(newDate);
        });

        expect((input as HTMLInputElement).value).toBe('2004-03-28');
        await user.tab();
        expect(input).toHaveAttribute('aria-invalid', 'true');
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