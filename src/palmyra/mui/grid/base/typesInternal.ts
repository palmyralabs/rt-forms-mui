import { RowData, ColumnDef } from "@tanstack/react-table";
import { GridCustomizer } from "../types";

interface BaseGridOptions {
    columnDefs: ColumnDef<RowData, any>[],
    rowData: any[],
    onRowClick?: Function,
    onRowStyle?: Function,
    onHeaderStyle?: Function,
    onSortColumn?: Function,
    EmptyChild?: React.FC,
    customizer?: GridCustomizer
}

export type { BaseGridOptions }