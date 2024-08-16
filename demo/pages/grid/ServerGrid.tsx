import { IPageQueryable, StoreFactoryContext } from "@palmyralabs/rt-forms";
import { ColumnDefinition, DataGrid, FilterForm, GridX, SelectablePagination } from "../../../src/palmyra"
import { PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";

import { useRef } from "react";
import { DropdownButton } from "../../../src/palmyra/mui/widget/DropdownButton";
import { TbFilterShare } from "react-icons/tb";

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
    const endPoint = 'masterdata/category' ; //'grid/simpleGridData.json'

    return <>
        <StoreFactoryContext.Provider value={storeFactory}>
            <GridX columns={columns} endPoint={endPoint}
                pageSize={[10, 20]}/>
        </StoreFactoryContext.Provider>
    </>
}

export { ServerGrid }