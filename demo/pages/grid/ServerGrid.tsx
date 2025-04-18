import { ColumnDefinition, StoreFactoryContext } from "@palmyralabs/rt-forms";
import { DataGridDefaultControls, GridX, IDataGridDefaultControlConfig } from "../../../src/palmyra"
import { PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";

import './ServerGrid.css'

const columns: ColumnDefinition[] = [
    {
        attribute: 'code',
        label: 'Identifier',
        type: 'string',
        // searchable: true
    },
    {
        attribute: 'thumbnail',
        label: 'Thumbnail',
        type: 'string',
        // searchable: true
    },
    {
        attribute: 'endDate',
        label: 'Date',
        type: 'date',
        // displayPattern: 'DD-MM-YYYY',
        searchable: true
    },
    {
        attribute: 'count',
        label: 'Count',
        type: 'number',
        searchable: true
    }
]

const storeFactory: StoreFactory<any, any> = new PalmyraStoreFactory({ baseUrl: '/api/palmyra/' });

const ServerGrid = () => {
    const endPoint = 'dataRead/assetAllocationHistory'; //'grid/simpleGridData.json'

    const getOptions = (): IDataGridDefaultControlConfig => {
        return { export: { disabled: true } }
    }

    return <>
        <StoreFactoryContext.Provider value={storeFactory}>
            <GridX columns={columns} endPoint={endPoint}
                quickSearch="key"
                getPluginOptions={getOptions}
                DataGridControls={DataGridDefaultControls}
                pageSize={[10, 20]} />
        </StoreFactoryContext.Provider>
    </>
}

export { ServerGrid }