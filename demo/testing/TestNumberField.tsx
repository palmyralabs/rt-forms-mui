
import { Button } from "@mui/material";
import { FieldGroupContainer } from "@palmyralabs/rt-forms";
import { useRef } from "react";
import FormX from "../components/wire/FormX";
import { MuiNumberField } from "../../src/palmyra";


const TestNumberField = () => {
    const formRef = useRef<any>(null);
    const popRef = useRef(null);
    const numRef = useRef(null);

    const handleClick = () => {
        popRef?.current?.focus();
        popRef?.current?.setValue(88);
    }

    const handleSaveClick = () => {
        numRef?.current?.setDisabled(true);
        numRef?.current?.setValue("67");
        numRef?.current?.setError("Number Only");
    }

    return (
        <>
            <FormX formRef={formRef}>
                <FieldGroupContainer columns={1}>

                    <h4>Number Field</h4>

                    <MuiNumberField attribute="number"
                        variant="outlined"
                        label="NumberField"
                        ref={numRef}
                        required
                        missingMessage="This field is Mandatory"
                        length={{ eq: 5, errorMessage: "Length is 5" }}
                        validRule={{ rule: "float", errorMessage: "Enter Float" }}
                    />

                    <MuiNumberField attribute="float"
                        placeholder="Enter Float"
                        variant="outlined"
                        label="Float"                        
                        validRule={{ rule: "float", errorMessage: "Enter Float" }}
                    />

                    <MuiNumberField attribute="pop"
                        placeholder="Enter Value"
                        variant="outlined"
                        label="Pop"
                        required
                        missingMessage="This field is Mandatory"
                        ref={popRef}
                        onChange={(e) => { console.log("onChange", e.target.value) }}
                        range={{ start: 10, end: 1440796, errorMessage: "Range 10-1440796" }}
                        validRule={{ rule: "number", errorMessage: "Number Only" }}
                    />

                    <MuiNumberField attribute="read"
                        variant="outlined"
                        label="NumberReadOnly"
                        readOnly
                        onChange={(e) => { console.log("onChange", e.target.value) }}
                    />

                    <MuiNumberField attribute="disabled"
                        variant="outlined"
                        label="NumberDisabled"
                        disabled
                        onChange={(e) => { console.log("onChange", e.target.value) }}
                    />

                    <Button onClick={handleClick}>Click Number</Button>
                    <Button onClick={handleSaveClick}>Save Number</Button>
                </FieldGroupContainer>
            </FormX>
        </>
    )
}

export { TestNumberField };