import { IEndPoint, PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";
import { PalmyraViewForm } from "@palmyralabs/rt-forms";
import { useEffect, useState } from "react";
import { MuiOptionsView, MuiTextView } from "../../src/palmyra";
import { MuiLookupView } from "../../src/palmyra/mui/form/MuiLookupView";
import { MuiDateView } from "../../src/palmyra/mui/form/MuiDateView";


const BasicView = () => {
    const storeFactory: StoreFactory<any, any> = new PalmyraStoreFactory({ baseUrl: '/testdata/form/' });

    const [data, setData] = useState({});

    useEffect(() => {
        setData({
            textView: "Hello",
            optionsView: 2,
            lookupView: { id: 1, name: 'Tamil Nadu' },
            date: '2024-06-24'
        })
    }, [])

    console.log(data)
    const endPoint: IEndPoint = {
        get: '1.json',
        query: '1.json', put: '1.json',
        post: '1.json'
    }


    return (
        <PalmyraViewForm storeFactory={storeFactory}
            endPoint={endPoint} id="1" >
            <MuiTextView
                attribute="name"
                textAlign='center'
                label="Text View"
                variant="outlined"
            />
            <MuiOptionsView
                attribute="select"
                textAlign='center'
                label="Options View"
                variant="outlined"
                options={{ 1: 'Male', 2: 'Female' }}
            />
            <MuiLookupView
                attribute="serverLookup"
                textAlign='center'
                label="Lookup View"
                variant="outlined"
                lookupOptions={{ idAttribute: "sid", labelAttribute: "location" }}
                displayAttribute="location"
            />
            <MuiDateView
                attribute="date"
                textAlign='center'
                label="Date View"
                variant="outlined"
                displayPattern="DD/MM/YYYY"
            />
        </PalmyraViewForm>
    )
}

export { BasicView }