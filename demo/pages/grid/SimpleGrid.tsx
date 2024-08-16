import { ColumnDefinition } from "../../../src/palmyra"
import BaseGrid from "../../../src/palmyra/mui/grid/base/BaseTable";

import { generateColumns } from "../../../src/palmyra/mui/grid/utils/ColumnConverter"

const rowData = [
    { name: "Sundar" },
    {
        name: 'murugan'
    },
    {
        name: 'valli'
    },
    {
        name: 'surya'
    }
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