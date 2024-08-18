import { StoreFactoryContext } from "@palmyralabs/rt-forms";
import { ColumnDefinition, ExportDataButton, GridX } from "../../../src/palmyra"
import { PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";

import './ServerGrid.css'

const columns: ColumnDefinition[] = [
    {
        attribute: 'code',
        label: 'Identifier',
        type: 'string',
        searchable: true
    }, {
        attribute: 'thumbnail',
        label: 'Thumbnail',
        type: 'string',
        searchable: true
    }, {
        attribute: 'count',
        label: 'Count',
        type: 'number',
        searchable: true
    }
]

const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/api/palmyra/' });

const ServerGrid = () => {
    const endPoint = 'masterdata/category'; //'grid/simpleGridData.json'

    return <>
        <StoreFactoryContext.Provider value={storeFactory}>
            <GridX columns={columns} endPoint={endPoint}
                DataGridControls={(o) => <ExportDataButton exportOption={{ csv: 'CSV' }} queryRef={o.queryRef} />}
                pageSize={[10, 20]} />
        </StoreFactoryContext.Provider>
    </>
}

export { ServerGrid }