
import { Button } from "@mui/material";
import { FieldGroupContainer } from "@palmyralabs/rt-forms";
import { useRef } from "react";
import FormX from "../components/wire/FormX";
import { MuiTextField } from "../../src/palmyra";


const TestTextField = () => {
    const formRef = useRef<any>(null);
    const popRef = useRef(null);
    const nameRef = useRef(null);

    const handleClick = () => {
        popRef?.current?.focus();
        popRef?.current?.setValue(88);
    }

    const handleSaveClick = () => {
        nameRef?.current?.setDisabled(true);
        nameRef?.current?.setValue("Karur");
        nameRef?.current?.setError("String Only");
    }

    return (
        <>
            <FormX formRef={formRef}>
                <FieldGroupContainer columns={1}>

                    <h4>Text Field</h4>

                    <MuiTextField attribute="names"
                        placeholder="Enter Name"
                        variant="outlined"
                        label="Name"
                        ref={nameRef}
                        required
                        missingMessage="This field is Mandatory"
                        length={{ eq: 5, errorMessage: "Length is 5" }}
                        validRule={{ rule: "alphabets", errorMessage: "Alphabets Only" }}
                    />

                    <MuiTextField attribute="email"
                        placeholder="Enter Email"
                        variant="outlined"
                        label="Email"
                        required
                        missingMessage="This field is Mandatory"
                        validRule={{ rule: "email", errorMessage: "Enter Valid Email" }}
                    />

                    <MuiTextField attribute="population"
                        placeholder="Enter Number"
                        variant="outlined"
                        label="Population"
                        ref={popRef}
                        onChange={(e) => { console.log("onChange", e.target.value) }}
                        range={{ start: 10, end: 1440796, errorMessage: "Range 10-1440796" }}
                        validRule={{ rule: "number", errorMessage: "Numbers Only" }}
                    />

                    <MuiTextField attribute="read"
                        variant="outlined"
                        label="ReadOnly"
                        readOnly
                        onChange={(e) => { console.log("onChange", e.target.value) }}
                    />

                    <MuiTextField attribute="disabled"
                        variant="outlined"
                        label="Disabled"
                        disabled
                        onChange={(e) => { console.log("onChange", e.target.value) }}
                    />

                    <Button onClick={handleClick}>Click Me</Button>
                    <Button onClick={handleSaveClick}>Save</Button>
                </FieldGroupContainer>
            </FormX>
        </>
    )
}

export { TestTextField };