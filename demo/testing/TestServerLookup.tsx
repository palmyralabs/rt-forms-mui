
import { Button } from "@mui/material";
import { PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";
import { FieldGroupContainer, PalmyraForm } from "@palmyralabs/rt-forms";
import { useRef } from "react";
import { MuiServerLookup } from "../../src/palmyra";


const TestServerLookup = () => {
    const storeFactory: StoreFactory<any, any> = new PalmyraStoreFactory({ baseUrl: '/testdata/form' });
    // const formRef = useRef<any>(null);
    const lookupRef = useRef(null);

    const handleClick = () => {
        lookupRef?.current?.focus();
        lookupRef?.current?.setValue({ sid: 1, location: "Chennai" });
    }

    const handleSaveClick = () => {
        lookupRef?.current?.setDisabled(true);
        lookupRef?.current?.setValue({ id: 1 });
        lookupRef?.current?.setError("String Only");
    }

    return (
        <>
            <PalmyraForm storeFactory={storeFactory}>
                <FieldGroupContainer columns={1}>

                    <h4>ServerLookup Field</h4>

                    <MuiServerLookup attribute="names"
                        queryOptions={{ endPoint: '/lookupData.json', idAttribute: 'sid', labelAttribute: 'location' }}
                        lookupOptions={{ idAttribute: 'sid', labelAttribute: 'location' }}
                        variant="outlined"
                        label="Location"
                        ref={lookupRef}
                        required
                        missingMessage="This field is Mandatory"
                    />

                    <MuiServerLookup attribute="read"
                        lookupOptions={{ idAttribute: "id", labelAttribute: "name" }} queryOptions={{ endPoint: '/' }}
                        variant="outlined"
                        label="LookupReadOnly"
                        readOnly
                        onChange={(e) => { console.log("onChange", e.target.value) }}
                    />

                    <MuiServerLookup attribute="disabled"
                        lookupOptions={{ idAttribute: "id", labelAttribute: "name" }} queryOptions={{ endPoint: '/' }}
                        variant="outlined"
                        label="lookupDisabled"
                        disabled
                        onChange={(e) => { console.log("onChange", e.target.value) }}
                    />

                    <MuiServerLookup attribute="default"
                        queryOptions={{ endPoint: '/lookupData.json', idAttribute: 'sid', labelAttribute: 'location' }}
                        lookupOptions={{ idAttribute: 'sid', labelAttribute: 'location' }}
                        variant="outlined"
                        label="Default"
                        defaultValue={{ sid: 2, location: "Madurai" }}
                    />


                    <MuiServerLookup attribute="multiSelect"
                        variant="outlined"
                        fieldProps={{ size: 'small' }}
                        multiple
                        label="Multiple"
                        onChange={(e, v) => { console.log("onChange", v) }}
                        queryOptions={{ endPoint: '/lookupData.json', idAttribute: 'sid', labelAttribute: 'location' }}
                        lookupOptions={{ idAttribute: 'sid', labelAttribute: 'location' }}
                        required
                    />

                    <Button onClick={handleClick}>Click Serverlookup</Button>
                    <Button onClick={handleSaveClick}>Save Lookup</Button>
                </FieldGroupContainer>
            </PalmyraForm>
        </>
    )
}

export { TestServerLookup };
