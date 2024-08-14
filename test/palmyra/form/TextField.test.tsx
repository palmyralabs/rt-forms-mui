import { describe, test } from "vitest";
import { act, fireEvent, queryByAttribute, render, renderHook, screen } from '@testing-library/react';
import { MuiTextField } from "../../../src/palmyra";
import { IForm, PalmyraForm } from "@palmyralabs/rt-forms";
import { useRef } from "react";


describe('Textfield', () => {
    test('Verify Email', () => {
        const getById = queryByAttribute.bind(null, 'id');
        const rdr = renderHook(() => useRef<IForm>());
        const formRef = rdr.result.current;
        const textFieldDefn = <PalmyraForm formData={{ emailAddress: "welcome" }} ref={formRef} mode="new">
            <MuiTextField id="emailAddress" attribute="emailAddress"
                validRule={{ rule: "email", errorMessage: "Invalid Email Address" }} />
        </PalmyraForm>

        const dom = render(textFieldDefn);
        expect(screen.getByText("Invalid Email Address")).toBeDefined()

        const textField = getById(dom.container, 'emailAddress');
        act(() => {
            fireEvent.change(textField, { target: { value: 'hello@gmail.com' } });
        });

        expect(() => screen.getByText("Invalid Email Address")).toThrow();
        console.log(formRef.current.getData(), formRef.current.isValid());
    })
});