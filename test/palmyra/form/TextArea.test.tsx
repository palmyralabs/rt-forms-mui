import { describe, test } from "vitest";
import { act, fireEvent, queryByAttribute, render, renderHook, screen } from '@testing-library/react';
import { MuiTextArea } from "../../../src/palmyra";
import { IForm, IInputField, PalmyraForm } from "@palmyralabs/rt-forms";
import { useRef } from "react";
import { testMandatory2Optional, testOptional2Mandatory } from "./commons/util";


describe('Textarea', () => {

    const initProps = () => {
        const getById = queryByAttribute.bind(null, 'id');
        const formRef = renderHook(() => useRef<IForm>()).result.current;
        const fieldRef = renderHook(() => useRef<IInputField>()).result.current;
        return { getById, formRef, fieldRef }
    }

    test('Input', () => {
        const getById = queryByAttribute.bind(null, 'id');
        const rdr = renderHook(() => useRef<IForm>());
        const formRef = rdr.result.current;
        const textAreaDefn = <PalmyraForm formData={{ textInput: "welcome" }} ref={formRef} >
        <MuiTextArea id="textInput" attribute="textInput" />
    </PalmyraForm>

        const dom = render(textAreaDefn);

        const textArea = getById(dom.container, 'textInput');

        fireEvent.change(textArea, { target: { value: '42' } });
        expect(textArea.value).toBe('42');
    });


    test('Verify Email', () => {
        const getById = queryByAttribute.bind(null, 'id');
        const rdr = renderHook(() => useRef<IForm>());
        const formRef = rdr.result.current;
        const textAreaDefn = <PalmyraForm formData={{ emailAddress: "welcome" }} ref={formRef} >
            <MuiTextArea id="emailAddress" attribute="emailAddress"
                validRule={{ rule: "email", errorMessage: "Invalid Email Address" }} />
        </PalmyraForm>

        const dom = render(textAreaDefn);
        expect(screen.getByText("Invalid Email Address")).toBeDefined()

        const textArea = getById(dom.container, 'emailAddress');
        act(() => {
            fireEvent.change(textArea, { target: { value: 'hello@gmail.com' } });
        });

        expect(() => screen.getByText("Invalid Email Address")).toThrow();
    });

    test('Disabled -> Enabled', () => {
        const { getById, formRef, fieldRef } = initProps();
        const textAreaDefn = <PalmyraForm formData={{ emailAddress: "welcome" }} ref={formRef} >
            <MuiTextArea id="emailAddress" attribute="emailAddress" ref={fieldRef}
                disabled validRule={{ rule: "email", errorMessage: "Invalid Email Address" }} />
        </PalmyraForm>

        const dom = render(textAreaDefn);
        expect(screen.getByText("Invalid Email Address")).toBeDefined()

        const textArea = getById(dom.container, 'emailAddress');
        expect(textArea).toHaveProperty('disabled', true)

        act(() => {
            fieldRef.current.setValue('hello');
            fieldRef.current.setDisabled(false);
        });

        expect(textArea).toHaveProperty('disabled', false)
    })

    test('Enabled -> Disabled', () => {
        const { getById, formRef, fieldRef } = initProps();
        const textAreaDefn = <PalmyraForm formData={{ emailAddress: "welcome" }} ref={formRef} >
            <MuiTextArea id="emailAddress" attribute="emailAddress" ref={fieldRef}
                validRule={{ rule: "email", errorMessage: "Invalid Email Address" }} />
        </PalmyraForm>

        const dom = render(textAreaDefn);
        expect(screen.getByText("Invalid Email Address")).toBeDefined()

        const textArea = getById(dom.container, 'emailAddress');
        expect(textArea).toHaveProperty('disabled', false)

        act(() => {
            fieldRef.current.setValue('hello');
            fieldRef.current.setDisabled(true);
        });

        expect(textArea).toHaveProperty('disabled', true)
    })


    test('Optional -> Mandatory', () => {
        const { getById, formRef, fieldRef } = initProps();
        const textAreaDefn = <PalmyraForm formData={{ emailAddress: "welcome" }} ref={formRef} >
            <MuiTextArea id="emailAddress" attribute="emailAddress" ref={fieldRef}
                missingMessage="Blank not allowed" />
        </PalmyraForm>

        const dom = render(textAreaDefn);

        const textArea = getById(dom.container, 'emailAddress');
        testOptional2Mandatory(textArea, fieldRef, "Blank not allowed");
    })

    test('Mandatory -> Optional', () => {
        const { getById, formRef, fieldRef } = initProps();
        const textAreaDefn = <PalmyraForm formData={{ emailAddress: "welcome" }} ref={formRef} >
            <MuiTextArea id="emailAddress" attribute="emailAddress" ref={fieldRef}
                missingMessage="Blank not allowed" required />
        </PalmyraForm>

        const dom = render(textAreaDefn);

        const textArea = getById(dom.container, 'emailAddress');
        testMandatory2Optional(textArea, fieldRef, "Blank not allowed")
    })

});