import { useEffect, useState } from "react";
import { BaseGridOptions } from "./typesInternal";
import { default as defaultEmptyChild } from './EmptyChildTable';
import { getCoreRowModel } from "@tanstack/react-table";

const useBaseGridManager = (o: BaseGridOptions) => {

    const { columnDefs, rowData, customizer } = o;
    
    const onSortColumn = o.onSortColumn|| (() => undefined);
    const EmptyChild = o.EmptyChild || defaultEmptyChild;
    const onRowClick = o.onRowClick || (() => undefined);
    const onRowStyle = o.onRowStyle || (() => { })
    const onHeaderStyle = o.onHeaderStyle || (() => { })    

    const preProcessData = customizer?.preProcessData || ((d: any) => d);
    const tableOptions = customizer?.getTableOptions ? customizer.getTableOptions() : {};

    if (customizer?.preProcessColumns) {
        customizer?.preProcessColumns(columnDefs);
    }

    const options = {
        data: preProcessData(rowData),
        manualSorting: true,
        manualFiltering: true,
        manualPagination: true,
        columns: columnDefs,
        getCoreRowModel: getCoreRowModel(),
        ...tableOptions
    }


    const [sortColumn, setSortColumn] = useState({});

    useEffect(() => {
        onSortColumn(sortColumn);
    }, [sortColumn])

    const onSortChange = (column, sortOrder) => {
        var sort = { ...sortColumn };

        if (sortOrder == '') {
            delete sort[column];
        } else {
            sort[column] = sortOrder;
        }
        setSortColumn(sort);
    }
    const onSort = o.onSortColumn ? onSortChange : () => undefined;

    return { onSort, onRowClick, options, onRowStyle, onHeaderStyle, EmptyChild }
}

export { useBaseGridManager }