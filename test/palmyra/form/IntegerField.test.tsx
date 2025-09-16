import { describe, expect, test } from "vitest";
import { act, fireEvent, queryByAttribute, render, renderHook, screen } from '@testing-library/react';
import { MuiIntegerField } from "../../../src/palmyra";
import { IForm, IInputField, PalmyraForm } from "@palmyralabs/rt-forms";
import { useRef } from "react";
import { testMandatory2Optional, testOptional2Mandatory } from "./commons/util";


describe('IntegerField', () => {

    const initProps = () => {
        const getById = queryByAttribute.bind(null, 'id');
        const formRef = renderHook(() => useRef<IForm>(null)).result.current;
        const fieldRef = renderHook(() => useRef<IInputField>(null)).result.current;
        return { getById, formRef, fieldRef }
    }

    test('Validation', () => {
        const { getById, formRef, fieldRef } = initProps();
        const integerFieldDefn = <PalmyraForm formData={{ integerField: "10" }} ref={formRef} >
            <MuiIntegerField id="integerField" attribute="integerField" ref={fieldRef}
                validRule={{ rule: "number", errorMessage: "Integers Only" }} />
        </PalmyraForm>

        const dom = render(integerFieldDefn);

        const integerField = getById(dom.container, 'integerField');

        act(() => {
            fireEvent.change(integerField, { target: { value: "Ten" } });
        });

        var intValue = formRef.current.getData().integerField;
        expect(intValue).toEqual(10);

        act(() => {
            fireEvent.change(integerField, { target: { value: "Ten 35" } });
        });

        var intValue = formRef.current.getData().integerField;
        expect(intValue).toEqual(10);

        act(() => {
            fireEvent.change(integerField, { target: { value: 35 } });
        });

        var intValue = formRef.current.getData().integerField;
        expect(intValue).eql(35);

    });

    test('Validation - Equal length', () => {
        const { getById, formRef, fieldRef } = initProps();
        const integerFieldDefn = <PalmyraForm formData={{ integerField: 12345 }} ref={formRef} >
            <MuiIntegerField id="integerField" attribute="integerField" ref={fieldRef}
                length={{ eq: 5, errorMessage: "Provided length should be equal to 5" }} />
        </PalmyraForm>

        const dom = render(integerFieldDefn);
        const integerField = getById(dom.container, 'integerField');

        act(() => {
            fireEvent.change(integerField, { target: { value: 1234 } });
        });

        expect(() => screen.getByText("Provided length should be equal to 5")).toBeDefined();
    })

    test('Validation - Minimum and Maximum length', () => {
        const { getById, formRef } = initProps();
        const integerFieldDefn = <PalmyraForm formData={{ integerField: 12345678 }} ref={formRef} >
            <MuiIntegerField id="integerField" attribute="integerField"
                length={{ min: 3, max: 8, errorMessage: "Minimum 3 character and maximum 8 character" }} />
        </PalmyraForm>

        const dom = render(integerFieldDefn);
        const integerField = getById(dom.container, 'integerField');

        act(() => {
            fireEvent.change(integerField, { target: { value: 123456789 } });
        });

        expect(() => screen.getByText("Minimum 3 character and maximum 8 character")).toBeDefined();
    })

    test('Disabled -> Enabled', () => {
        const { getById, formRef, fieldRef } = initProps();
        const integerFieldDefn = <PalmyraForm formData={{ integerField: 12345 }} ref={formRef} >
            <MuiIntegerField id="integerField" attribute="integerField" ref={fieldRef} disabled />
        </PalmyraForm>

        const dom = render(integerFieldDefn);

        const integerField = getById(dom.container, 'integerField');
        expect(integerField).toHaveProperty('disabled', true);

        act(() => {
            fieldRef.current.setValue(12345);
            fieldRef.current.setDisabled(false);
        });

        expect(integerField).toHaveProperty('disabled', false);
    })

    test('Enabled -> Disabled', () => {
        const { getById, formRef, fieldRef } = initProps();
        const integerFieldDefn = <PalmyraForm formData={{ integerField: 12345 }} ref={formRef} >
            <MuiIntegerField id="integerField" attribute="integerField" ref={fieldRef} />
        </PalmyraForm>

        const dom = render(integerFieldDefn);

        const integerField = getById(dom.container, 'integerField');

        act(() => {
            fieldRef.current.setValue('One');
            fieldRef.current.setDisabled(true);
        });

        expect(integerField).toHaveProperty('disabled', true);
    })

    test('Optional -> Mandatory', () => {
        const { getById, formRef, fieldRef } = initProps();
        const integerFieldDefn = <PalmyraForm formData={{ integerField: "12345" }} ref={formRef} >
            <MuiIntegerField id="integerField" attribute="integerField" ref={fieldRef}
                missingMessage="This Field is mandatory" />
        </PalmyraForm>

        const dom = render(integerFieldDefn);

        const integerField = getById(dom.container, 'integerField');
        testOptional2Mandatory(integerField, fieldRef, "This Field is mandatory");
    })

    test('Mandatory -> Optional', () => {
        const { getById, formRef, fieldRef } = initProps();
        const integerFieldDefn = <PalmyraForm formData={{ integerField: "12345" }} ref={formRef} >
            <MuiIntegerField id="integerField" attribute="integerField" ref={fieldRef}
                required missingMessage="Blank not allowed" />
        </PalmyraForm>

        const dom = render(integerFieldDefn);

        const integerField = getById(dom.container, 'integerField');
        testMandatory2Optional(integerField, fieldRef, "Blank not allowed")
    })

    // test('ReadOnly -> Write', () => {
    //     const { getById, formRef, fieldRef } = initProps();
    //     const integerFieldDefn = <PalmyraForm formData={{ integerField: "12345" }} ref={formRef} >
    //         <MuiIntegerField id="integerField" attribute="integerField" ref={fieldRef} readOnly />
    //     </PalmyraForm>

    //     const dom = render(integerFieldDefn);

    //     const integerField = getById(dom.container, 'integerField');
    //     expect(integerField).toHaveProperty('readOnly', true)

    //     act(() => {
    //         fieldRef.current.setValue("12345");
    //         fieldRef.current.setReadOnly(false);
    //     });
    // })

    test('Write -> ReadOnly', () => {
        const { getById, formRef, fieldRef } = initProps();
        const integerFieldDefn = <PalmyraForm formData={{ integerField: 12345 }} ref={formRef} >
            <MuiIntegerField id="integerField" attribute="integerField" ref={fieldRef} />
        </PalmyraForm>

        const dom = render(integerFieldDefn);

        const integerField = getById(dom.container, 'integerField');
        expect(integerField).toHaveProperty('readOnly', false)

        act(() => {
            fieldRef.current.setValue(12345);
            fieldRef.current.setReadOnly(true);
        });
    })

});