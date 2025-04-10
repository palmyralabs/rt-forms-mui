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

    test('should change value when user types a new date', async () => {
        const { formRef, fieldRef } = initProps();

        const datePickerDefn = (
            <PalmyraForm formData={{ dateField: "2003-01-21" }} ref={formRef}>
                <MuiDatePicker 
                    attribute="dateField" 
                    variant="standard" 
                    ref={fieldRef}
                    label="Date" />
            </PalmyraForm>
        );

        const renderer = render(datePickerDefn);

        const inputBox = renderer.getByLabelText('Date') as HTMLInputElement;
        
        act(() => {            
            fireEvent.change(inputBox, { target: { value: "2025-12-21" } });
        });
        
        const updatedValue = formRef.current.getData().dateField;
        
        expect(updatedValue).toBe("2025-12-21");
    });

});