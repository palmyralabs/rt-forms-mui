import { ColumnDefinition } from "../../../src/palmyra"
import BaseGrid from "../../../src/palmyra/mui/grid/base/BaseGrid";

import { generateColumns } from "../../../src/palmyra/mui/grid/utils/ColumnConverter"

const rowData = [
    {name : "Sundar"}
]

const columns: ColumnDefinition[] = [{
    attribute: 'name',
    label: 'Name',
    type: 'string'
}]

const columnDefs = generateColumns(columns);

const SimplGrid = () => {
    return <>
        <BaseGrid rowData={rowData} columnDefs={columnDefs} />
    </>
}

export { SimplGrid }