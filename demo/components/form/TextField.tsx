
import { FieldGroupContainer } from "@palmyralabs/rt-forms";
import { MuiDatePicker, MuiDateTimePicker, MuiServerLookup } from "../../../src/palmyra";
import FormX from "../wire/FormX";
// import { useEffect, useRef } from "react";
// import { TextField } from "@mui/material";

// const fieldRef: any = useRef();

// useEffect(() => {
//     fieldRef?.current.setValue("1212a")
// }, [])

const TextField = () => {
    return (
        <FormX>
            <FieldGroupContainer columns={1}>

                {/* <MuiCheckBoxGroup attribute="radio" options={{ 1: 'Active', 0: 'De-Active' }} />
                <MuiCheckBox attribute="radio" /> */}

                <MuiDatePicker attribute="date"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                    defaultValue={"2003-01-21"}
                // displayPattern="DD-MM-YYYY"
                />
                <MuiDateTimePicker attribute="dateTime"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                    defaultValue={"2003-01-21 12:23:23"}
                    displayPattern="DD-MM-YYYY hh:mm:ss"
                />

                <MuiServerLookup attribute="serverLookup"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                    onChange={(e, v) => { console.log("onChange", v) }}
                    queryOptions={{ endPoint: '/lookupData.json', idAttribute: 'sid', labelAttribute: 'location' }}
                    lookupOptions={{ idAttribute: 'sid', labelAttribute: 'location' }}
                    required
                />

                {/* <MuiTextField attribute="names"
                    placeholder="Enter Name"
                    variant="outlined"
                    // autoFocus={true}
                    defaultValue={1111}
                    label="Name"
                    onChange={(e) => { console.log("onCHnage", e.target.value) }}
                    length={{ eq: 5, errorMessage: "Length is 5" }}
                    validRule={{ rule: "number", errorMessage: "Numbers Only" }}
                /> */}

                {/* <MuiServerLookup attribute="serverLookup"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                    onChange={(e) => { console.log("onCHnage", e.target.value) }}
                    queryOptions={{ endPoint: '/lookupData.json', idAttribute: 'sid', labelAttribute: 'location' }}
                    required
                />
                <MuiServerLookup attribute="sName"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                    queryOptions={{ endPoint: '/lookupData.json', idAttribute: 'sid', labelAttribute: 'location' }}
                    required
                /> */}

                {/* <TextField defaultValue={"Asd"}/> */}
                {/* <MuiDateView attribute="date" /> */}
                {/* <MuiTextField attribute="name"
                    placeholder="Enter Name"
                    variant="outlined"
                    autoFocus={true}
                    label="Name"
                    length={{ eq: 5, errorMessage: "Length is 5" }}
                    validRule={{ rule: "number", errorMessage: "Numbers Only" }}
                /> */}
                {/* <MuiNumberField id="numberField" attribute="numberField" //ref={fieldRef}
                    disabled invalidMessage="Invalid" validRule={"number"} /> */}
                {/* <MuiTextField attribute="name"
                    placeholder="Enter Name"
                    variant="filled"
                    label="Name"
                />
                <MuiTextField attribute="name"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                    required
                    validRule={"number"}
                /> */}

                {/* <MuiDatePicker attribute="date"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                // defaultValue={"2003-01-21"}
                // displayPattern="DD-MM-YYYY"
                />
                <MuiDateTimePicker attribute="dateTime"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                    // defaultValue={"2003-01-21 12:23:23"}
                    displayPattern="DD-MM-YYYY hh:mm:ss"
                />
                <MuiDateRangePicker attribute="dates"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                />

                <MuiPassword attribute="pass"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                    validRule={{ rule: 'alphabets' }}
                /> */}

                {/* <MuiServerLookup attribute="sname"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                    queryOptions={{ endPoint: '/lookupData.json', idAttribute: 'sid', labelAttribute: 'location' }}
                    required
                />
                <MuiDateRangePicker attribute="dates"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                    serverPattern="YYYY-MM-DD" displayPattern="DD-MM-YYYY"
                />
               */}

                {/* <MuiServerLookup attribute="serverLookup"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                    lookupOptions={{ idAttribute: 'sid', labelAttribute: 'location' }}
                    queryOptions={{ endPoint: '/lookupData.json', idAttribute: 'sid', labelAttribute: 'location' }}
                    required
                />

                <MuiServerLookup attribute="serverLookups"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                    lookupOptions={{ idAttribute: 'sid', labelAttribute: 'location' }}
                    queryOptions={{ endPoint: '/lookupData.json', idAttribute: 'sid', labelAttribute: 'location' }}
                    required
                /> 
                <MuiDatePicker attribute="dsate"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                // defaultValue={"2003-01-21"}
                // displayPattern="DD-MM-YYYY"
                />
                <MuiDateTimePicker attribute="dateTime"
                    placeholder="Enter Name"
                    variant="standard"
                    label="Name"
                    // defaultValue={"2003-01-21 12:23:23"}
                    serverPattern="YYYY-MM-DD hh:mm:ss" displayPattern="DD-MM-YYYY hh:mm:ss"
                />

                <MuiRadioGroup attribute="radio" options={{ 1: 'True', 0: 'False' }} />
                <MuiSelect attribute="select" options={{ 1: 'True', 0: 'False' }} />*/}
                {/* <MuiOptionsView attribute="radioView" options={{ 1: 'True', 0: 'False' }} />
                <MuiRadioGroup attribute="radio" options={{ 1: 'Active', 0: 'De-Active' }} />
                <MuiSwitch attribute="switch" options={{ 'True': 1, 'False': 0 }} /> */}
            </FieldGroupContainer>
        </FormX>
    )
}

export {
    TextField
}