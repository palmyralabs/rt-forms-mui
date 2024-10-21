import { describe, expect, test } from "vitest";
import { act, fireEvent, queryByAttribute, render, renderHook, screen } from '@testing-library/react';
import { MuiNumberField } from "../../../src/palmyra";
import { IForm, IInputField, PalmyraForm } from "@palmyralabs/rt-forms";
import { useRef } from "react";
import { testMandatory2Optional, testOptional2Mandatory } from "./commons/util";


describe('NumberField', () => {

    const initProps = () => {
        const getById = queryByAttribute.bind(null, 'id');
        const formRef = renderHook(() => useRef<IForm>()).result.current;
        const fieldRef = renderHook(() => useRef<IInputField>()).result.current;
        return { getById, formRef, fieldRef }
    }

    test('Validation', () => {
        const { getById, formRef } = initProps();
        const NumberFieldDefn = <PalmyraForm formData={{ numberField: 12 }} ref={formRef} >
            <MuiNumberField id="numberField" attribute="numberField"
                validRule={{ rule: "number", errorMessage: "Numbers Only" }}
            />
        </PalmyraForm>

        const dom = render(NumberFieldDefn);
        expect(() => screen.getByText("Invalid")).toBeDefined()

        const NumberField = getById(dom.container, 'numberField');

        act(() => {
            fireEvent.change(NumberField, { target: { value: 12 } });
        });

        expect(() => screen.getByText("Numbers Only")).toThrow();
    });

    test('Validation - length', () => {
        const { getById, formRef } = initProps();
        const NumberFieldDefn = <PalmyraForm formData={{ numberField: 14542 }} ref={formRef} >
            <MuiNumberField id="numberField" attribute="numberField"
                length={{ eq: 5, errorMessage: "Length is 5" }}
            />
        </PalmyraForm>
        const dom = render(NumberFieldDefn);
        const NumberField = getById(dom.container, 'numberField');
        act(() => {
            fireEvent.change(NumberField, { target: { value: 1452 } });
        });

        expect(() => screen.getByText("Length is 5"));
    })

    test('Disabled -> Enabled', () => {
        const { getById, formRef, fieldRef } = initProps();
        const numberFieldDefn = <PalmyraForm formData={{ numberField: "12345" }} ref={formRef} >
            <MuiNumberField id="numberField" attribute="numberField" ref={fieldRef}
                disabled invalidMessage="Invalid" validRule={"number"} />
        </PalmyraForm>
        const dom = render(numberFieldDefn);
        expect(() => screen.getByText("Invalid"))

        const numberField = getById(dom.container, 'numberField');
        expect(numberField).toHaveProperty('disabled', true)

        act(() => {
            fieldRef.current.setValue("12345");
            fieldRef.current.setDisabled(false);
        });

        expect(numberField).toHaveProperty('disabled', false)
    })

    test('Enabled -> Disabled', () => {
        const { getById, formRef, fieldRef } = initProps();
        const numberFieldDefn = <PalmyraForm formData={{ numberField: "12345" }} ref={formRef} >
            <MuiNumberField id="numberField" attribute="numberField" ref={fieldRef}
                invalidMessage="Invalid" validRule={"number"} />
        </PalmyraForm>

        const dom = render(numberFieldDefn);
        expect(() => screen.getByText("Invalid")).toBeDefined()

        const numberField = getById(dom.container, 'numberField');
        expect(numberField).toHaveProperty('disabled', false)

        act(() => {
            fieldRef.current.setValue('hello');
            fieldRef.current.setDisabled(true);
        });

        expect(numberField).toHaveProperty('disabled', true)
    })

    test('Optional -> Mandatory', () => {
        const { getById, formRef, fieldRef } = initProps();
        const numberFieldDefn = <PalmyraForm formData={{ numberField: "12345" }} ref={formRef} >
            <MuiNumberField id="numberField" attribute="numberField" ref={fieldRef}
                missingMessage="This Field is mandatory" />
        </PalmyraForm>

        const dom = render(numberFieldDefn);

        const numberField = getById(dom.container, 'numberField');
        testOptional2Mandatory(numberField, fieldRef, "This Field is mandatory");
    })

    test('Mandatory -> Optional', () => {
        const { getById, formRef, fieldRef } = initProps();
        const numberFieldDefn = <PalmyraForm formData={{ numberField: "12345" }} ref={formRef} >
            <MuiNumberField id="numberField" attribute="numberField" ref={fieldRef}
                required missingMessage="Blank not allowed" />
        </PalmyraForm>

        const dom = render(numberFieldDefn);

        const numberField = getById(dom.container, 'numberField');
        testMandatory2Optional(numberField, fieldRef, "Blank not allowed")
    })

    test('ReadOnly -> Write', () => {
        const { getById, formRef, fieldRef } = initProps();
        const numberFieldDefn = <PalmyraForm formData={{ numberField: "12345" }} ref={formRef} >
            <MuiNumberField id="numberField" attribute="numberField" ref={fieldRef}
                readOnly invalidMessage="Invalid" validRule={"number"} />
        </PalmyraForm>
        const dom = render(numberFieldDefn);
        expect(() => screen.getByText("Invalid"))

        const numberField = getById(dom.container, 'numberField');
        expect(numberField).toHaveProperty('readOnly', true)

        act(() => {
            fieldRef.current.setValue("12345");
            fieldRef.current.setReadOnly(false);
        });

        // expect(numberField).toHaveProperty('readOnly', false)
    })

    test('Write -> ReadOnly', () => {
        const { getById, formRef, fieldRef } = initProps();
        const numberFieldDefn = <PalmyraForm formData={{ numberField: "12345" }} ref={formRef} >
            <MuiNumberField id="numberField" attribute="numberField" ref={fieldRef}
                invalidMessage="Invalid" validRule={"number"} />
        </PalmyraForm>

        const dom = render(numberFieldDefn);
        expect(() => screen.getByText("Invalid")).toBeDefined()

        const numberField = getById(dom.container, 'numberField');
        expect(numberField).toHaveProperty('readOnly', false)

        act(() => {
            fieldRef.current.setValue('12345');
            fieldRef.current.setReadOnly(true);
        });

        // expect(numberField).toHaveProperty('readOnly', true)
    })
});