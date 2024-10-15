
import { FieldGroupContainer } from "@palmyralabs/rt-forms";
import { MuiCheckBox, MuiCheckBoxGroup, MuiDatePicker, MuiDateRangePicker, MuiDateTimePicker, MuiNumberField, MuiPassword, MuiRadioGroup, MuiSelect, MuiServerLookup, MuiSwitch, MuiTextField } from "../../../src/palmyra";
import FormX from "../wire/FormX";


const EditForm = () => {
    return (
        <FormX>
            <FieldGroupContainer columns={1}>

                <h4>Input Field</h4>

                <MuiTextField attribute="name"
                    placeholder="Enter Name"
                    variant="outlined"
                    label="Name"
                    length={{ eq: 5, errorMessage: "Length is 5" }}
                    validRule={{ rule: "alphabets", errorMessage: "Alphabets Only" }}
                />
                <MuiTextField attribute="population"
                    placeholder="Enter Number"
                    variant="outlined"
                    label="Name"
                    onChange={(e) => { console.log("onChange", e.target.value) }}
                    range={{ start: 10, end: 1440796, errorMessage: "Range 10-1440796" }}
                    validRule={{ rule: "number", errorMessage: "Numbers Only" }}
                />

                <MuiNumberField id="numberField" attribute="numberField" //ref={fieldRef}
                    disabled invalidMessage="Invalid" validRule={"number"} />

                <MuiPassword attribute="pass"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                    validRule={{ rule: 'alphabets' }}
                />

                <h4>Option</h4>

                <MuiCheckBoxGroup attribute="radio" options={{ 1: 'Active', 0: 'De-Active' }} />
                <MuiCheckBox attribute="radio" />
                <MuiSelect attribute="select" options={{ 1: 'True', 0: 'False' }} />
                {/* <MuiOptionsView attribute="radioView" options={{ 1: 'True', 0: 'False' }} />*/}
                <MuiRadioGroup attribute="radio" options={{ 1: 'Active', 0: 'De-Active' }} />
                <MuiSwitch attribute="switch" options={{ 'True': 1, 'False': 0 }} />

                <h4>Lookup</h4>

                <MuiServerLookup attribute="multiSelect"
                    // placeholder="Enter Name"
                    variant="standard"
                    multiple
                    label="Name"
                    onChange={(e, v) => { console.log("onChange", v) }}
                    queryOptions={{ endPoint: '/lookupData.json', idAttribute: 'sid', labelAttribute: 'location' }}
                    lookupOptions={{ idAttribute: 'sid', labelAttribute: 'location' }}
                    required
                />
                <MuiServerLookup attribute="serverLookup"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Lookup"
                    lookupOptions={{ idAttribute: 'sid', labelAttribute: 'location' }}
                    onChange={(e) => { console.log("onChange", e.target.value) }}
                    queryOptions={{ endPoint: '/lookupData.json', idAttribute: 'sid', labelAttribute: 'location' }}
                    required
                />
                <MuiServerLookup attribute="sname"
                    variant="standard"
                    lookupOptions={{ displayAttribute: 'location' }}
                    label="Lookup"
                    queryOptions={{ endPoint: '/lookupData.json', idAttribute: 'sid', labelAttribute: 'location' }}
                    required
                />

                <h4>Date Field</h4>

                <MuiDatePicker attribute="date"
                    placeholder="Enter Date"
                    variant="standard"
                    title="Date"
                    // defaultValue={"2003-01-21"}
                    serverPattern="YYYY-MM-DD"
                    displayPattern="DD-MM-YYYY"
                />
                <MuiDateTimePicker attribute="dateTime"
                    variant="standard"
                    label="Date Time"
                    // defaultValue={"2003-01-17 12:23:23"}
                    serverPattern="YYYY-MM-DD hh:mm:ss"
                    displayPattern="DD-MM-YYYY hh:mm:ss"
                />
                <MuiDateRangePicker attribute="dates"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Date Range"
                    serverPattern="YYYY-MM-DD" displayPattern="DD-MM-YYYY"
                />

            </FieldGroupContainer>
        </FormX>
    )
}

export {
    EditForm
}