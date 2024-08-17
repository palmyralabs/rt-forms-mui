import { MuiDatePicker } from "../../../src/palmyra";
import FormX from "../wire/FormX";


const BasicSetup = `<MuiDatePicker
    attribute="date"
    label="Date"
    serverPattern="YYYY-MM-DD"
    displayPattern="DD-MM-YYYY"
    defaultValue={"2024-06-20"}
    disableFuture={true}
/>
`;

const BasicDatePicker = () => {
    return (
        <FormX>
            <MuiDatePicker attribute="date"
                label="Date"
                serverPattern="YYYY-MM-DD"
                displayPattern="DD-MM-YYYY"
                defaultValue={"2024-06-20"}
                disableFuture={true}
            />
        </FormX>
    )
}

const ValidationSetup = `<MuiDatePicker
    attribute="date"
    label="Date"
    serverPattern="YYYY-MM-DD"
    displayPattern="DD-MM-YYYY"
    defaultValue={"2024-06-20"}
    range={{
        minDate: dayjs("2024-06-01")
        maxDate: dayjs("2024-06-22")
    }}
/>
`;

const ValidationDatePicker = () => {
    return (
        <FormX>
            <MuiDatePicker attribute="date"
                label="Date"
                serverPattern="YYYY-MM-DD"
                displayPattern="DD-MM-YYYY"
                defaultValue={"2024-06-20"}
            />
        </FormX>
    )
}

export {
    BasicSetup, BasicDatePicker, ValidationSetup, ValidationDatePicker
}