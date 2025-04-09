import { describe, expect, test } from "vitest";
import { act, fireEvent, queryByAttribute, render, renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    test('should change value when user types a new date', async () => {
        const { formRef, fieldRef } = initProps();
        const user = userEvent.setup();

        const datePickerDefn = (
            <PalmyraForm formData={{ dateField: "2003-01-21" }} ref={formRef}>
                <MuiDatePicker 
                    attribute="dateField" 
                    variant="standard" 
                    ref={fieldRef}
                    label="Date" />
            </PalmyraForm>
        );

        const { getByLabelText } = render(datePickerDefn);
        const inputBox = getByLabelText('Date') as HTMLInputElement;

        await user.clear(inputBox);
        await user.type(inputBox, "21-12-2025", { delay: 0 } as any);

        act(() => {
            // inputBox.dispatchEvent(new Event('change', { bubbles: true }));
            fireEvent.change(inputBox, { target: { value: "2025-12-21" } });
        });

        const updatedValue = formRef.current.getData().dateField;
        console.log('Updated value:', updatedValue);

        expect(updatedValue).toBe("2025-12-21");
    });

});