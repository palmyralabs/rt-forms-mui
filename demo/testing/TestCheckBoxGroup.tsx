
import { Button } from "@mui/material";
import { FieldGroupContainer } from "@palmyralabs/rt-forms";
import { useRef } from "react";
import FormX from "../components/wire/FormX";
import { MuiCheckBoxGroup } from "../../src/palmyra";


const TestCheckBoxGroup = () => {
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
        numRef?.current?.setError("CheckBoxGroup Only");
    }

    return (
        <>
            <FormX formRef={formRef}>
                <FieldGroupContainer columns={1}>

                    <h4>CheckBoxGroup Field</h4>

                    <MuiCheckBoxGroup attribute="CheckBoxGroup" options={{ 1: "true", 0: "false" }}
                        label="CheckBoxGroupField"
                        ref={numRef}
                        required
                        missingMessage="This field is Mandatory"
                    />

                    <MuiCheckBoxGroup attribute="read" options={{ 1: "true", 0: "false" }}
                        label="CheckBoxGroupReadOnly"
                        readOnly
                        onChange={(e) => { console.log("onChange", e.target.value) }}
                    />

                    <MuiCheckBoxGroup attribute="disabled" options={{ 1: "true", 0: "false" }}
                        label="CheckBoxGroupDisabled"
                        disabled
                        onChange={(e) => { console.log("onChange", e.target.value) }}
                    />

                    <Button onClick={handleClick}>Click CheckBoxGroup</Button>
                    <Button onClick={handleSaveClick}>Save CheckBoxGroup</Button>
                </FieldGroupContainer>
            </FormX>
        </>
    )
}

export { TestCheckBoxGroup };