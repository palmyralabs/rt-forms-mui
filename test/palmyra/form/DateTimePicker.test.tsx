import { useRef } from "react";
import { describe, expect, test } from "vitest";
import { act, fireEvent, queryByAttribute, render, renderHook, screen } from '@testing-library/react';
import { MuiDateTimePicker } from "../../../src/palmyra";
import { IForm, PalmyraForm } from "@palmyralabs/rt-forms";
import dayjs from "dayjs";
import userEvent from "@testing-library/user-event";
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

    test('Minimum Date Validation', async () => {
        const { formRef, fieldRef } = initProps();

        const minDate = dayjs('2003-01-01');
        const newDate = dayjs('2002-02-01 12:23:23');

        const dateTimePickerDefn = <PalmyraForm formData={{ dateTimePicker: '2003-01-17 12:23:23' }} ref={formRef}>
            <MuiDateTimePicker attribute="dateTimePicker" variant="standard" label="DateTime" ref={fieldRef}
                serverPattern="YYYY-MM-DD hh:mm:ss" minDate={minDate} />
        </PalmyraForm>

        render(dateTimePickerDefn);

        act(() => {
            if (newDate.isAfter(minDate))
                fieldRef.current.setValue(newDate);
        });

        const updatedValue = formRef.current.getData().dateTimePicker;
        expect(updatedValue).toBe('2003-01-17 12:23:23');
    });

    test('Minimum Date Validation - when user typing', async () => {
        const { formRef, fieldRef } = initProps();
        const user = userEvent.setup();

        const minDate = dayjs('2003-01-01');
        const newDate = dayjs('2002-01-01 12:23:23');

        const dateTimePickerDefn = <PalmyraForm formData={{ dateTimePicker: '2003-01-17 12:23:23' }} ref={formRef}>
            <MuiDateTimePicker attribute="dateTimePicker" variant="standard" label="DateTime" ref={fieldRef} minDate={minDate}
                slotProps={{
                    textField: { inputProps: { 'data-testid': 'date-input' } }
                }} serverPattern="YYYY-MM-DD hh:mm:ss" />
        </PalmyraForm>

        render(dateTimePickerDefn);

        const input = screen.getByTestId('date-input');
        await user.clear(input);
        await user.type(input, '2002-01-01 12:23:23');

        act(() => {
            fieldRef.current.setValue(newDate);
        });

        expect((input as HTMLInputElement).value).toBe('2002-01-01 12:23:23');
        await user.tab();
        expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    test('Maximum Date Validation', async () => {
        const { formRef, fieldRef } = initProps();

        const maxDate = dayjs('2003-01-01');
        const newDate = dayjs('2002-01-21 12:23:23');

        const datePickerDefn = <PalmyraForm formData={{ dateTimePicker: '2002-11-25 12:23:23' }} ref={formRef}>
            <MuiDateTimePicker attribute="dateTimePicker" variant="standard" label="DateTime" ref={fieldRef}
                serverPattern="YYYY-MM-DD hh:mm:ss" maxDate={maxDate} />
        </PalmyraForm>

        render(datePickerDefn);

        act(() => {
            if (newDate.isBefore(maxDate))
                fieldRef.current.setValue(newDate);
        });

        const updatedValue = formRef.current.getData().dateTimePicker;
        expect(updatedValue).toBe('2002-01-21 12:23:23');
    });

    test('Maximum Date Validation - when user typing', async () => {
        const { formRef, fieldRef } = initProps();
        const user = userEvent.setup();

        const maxDate = dayjs('2003-01-01');
        const newDate = dayjs('2002-01-21 12:23:23');

        const dateTimePickerDefn = <PalmyraForm formData={{ dateTimePicker: '2002-11-25 12:23:23' }} ref={formRef}>
            <MuiDateTimePicker attribute="dateTimePicker" variant="standard" label="DateTime" ref={fieldRef} maxDate={maxDate}
                slotProps={{
                    textField: { inputProps: { 'data-testid': 'date-input' } }
                }} serverPattern="YYYY-MM-DD hh:mm:ss" />
        </PalmyraForm>

        render(dateTimePickerDefn);

        const input = screen.getByTestId('date-input');
        await user.clear(input);
        await user.type(input, '2002-01-21 12:23:23');

        act(() => {
            fieldRef.current.setValue(newDate);
        });

        expect((input as HTMLInputElement).value).toBe('2002-01-21 12:23:23');
        await user.tab();
        expect(input).toHaveAttribute('aria-invalid', 'false');
    });

    test('Minimum and Maximum Date Validation', async () => {
        const { formRef, fieldRef } = initProps();

        const minDate = dayjs('2003-01-01');
        const maxDate = dayjs('2003-12-31');
        const newDate = dayjs('2004-03-28 12:23:23');

        const dateTimePickerDefn = <PalmyraForm formData={{ dateTimePicker: '2003-10-08 12:23:23' }} ref={formRef}>
            <MuiDateTimePicker attribute="dateTimePicker" variant="standard" label="DateTime" ref={fieldRef}
                serverPattern="YYYY-MM-DD hh:mm:ss" minDate={minDate} maxDate={maxDate} />
        </PalmyraForm>

        render(dateTimePickerDefn);

        act(() => {
            if (!newDate.isBefore(minDate) && !newDate.isAfter(maxDate))
                fieldRef.current.setValue(newDate);
        });

        const updatedValue = formRef.current.getData().dateTimePicker;
        expect(updatedValue).toBe('2003-10-08 12:23:23');
    });

    test('Minimum and Maximum Date Validation - when user typing', async () => {
        const { formRef, fieldRef } = initProps();
        const user = userEvent.setup();

        const minDate = dayjs('2003-01-01');
        const maxDate = dayjs('2003-12-31');
        const newDate = dayjs('2004-03-28 12:23:23');

        const dateTimePickerDefn = <PalmyraForm formData={{ dateTimePicker: '2003-10-08 12:23:23' }} ref={formRef}>
            <MuiDateTimePicker attribute="dateTimePicker" variant="standard" label="DateTime" ref={fieldRef}
                serverPattern="YYYY-MM-DD hh:mm:ss"
                slotProps={{
                    textField: { inputProps: { 'data-testid': 'date-input' } }
                }} minDate={minDate} maxDate={maxDate} />
        </PalmyraForm>

        render(dateTimePickerDefn);

        const input = screen.getByTestId('date-input');
        await user.clear(input);
        await user.type(input, '2004-03-28 12:23:23');

        act(() => {
            fieldRef.current.setValue(newDate);
        });

        expect((input as HTMLInputElement).value).toBe('2004-03-28 12:23:23');
        await user.tab();
        expect(input).toHaveAttribute('aria-invalid', 'true');
    });

});