
import { ColumnDefinition, generateColumns } from "@palmyralabs/rt-forms";
import BaseGrid from "../../../src/palmyra/mui/grid/base/BaseTable";


const rowData = [
    { name: "Sundar", date: "2023-01-21" },
    {
        name: 'murugan', date: "2023-01-21"
    },
    {
        name: 'valli', date: "2023-01-21"
    },
    {
        name: 'surya', date: "2023-01-21"
    }
]

const columns: ColumnDefinition[] = [{
    attribute: 'name',
    label: 'Name',
    type: 'string'
}, {
    attribute: 'date',
    label: 'Date',
    displayPattern: "MM-DD-YYYY",
    type: 'date'
}]

const columnDefs = generateColumns(columns);

const SimplGrid = () => {
    return <>
        <BaseGrid rowData={rowData} columnDefs={columnDefs} />
    </>
}

export { SimplGrid }