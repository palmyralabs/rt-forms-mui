import { useEffect } from 'react';
import { TableCell } from '@mui/material';
import { LuArrowDownUp, LuArrowUpDown } from "react-icons/lu";
import './ColumnHeader.css';
import { useSortColumn } from '@palmyralabs/rt-forms';
const ColumnHeader = ({ header, children, onSortChange }) => {

    const columnAttribute = header.column.columnDef.meta?.attribute || header.id;
    const sortDisabled = !header.column.columnDef.enableSorting;
    const width = header.column.columnDef.meta?.columnDef?.width || 'auto';

    const { sortColumn, order, sortOrder } = useSortColumn({ sortDisabled, onSortChange })

    useEffect(() => {
        onSortChange(columnAttribute, order)
    }, [order])

    const meta: any = header.column.columnDef.meta;
    const isTypeNumber = meta?.columnDef?.type === 'number';
    const cellClassName = 'py-dataGrid-header-text' + (isTypeNumber ? ' py-dataGrid-header-text-type-number' : '')

    if (header.column.columnDef.columns) {
        // Render Grouped Columns
        return (
            <TableCell className='py-baseGrid-header-cell' key={header.id} colSpan={header.colSpan}>
                <div className={cellClassName} style={{ width: width }}>
                    {children}
                </div>
            </TableCell>
        )
    } else
        return (
            <TableCell key={header.id} colSpan={header.colSpan}
                className='py-baseGrid-header-cell'>
                <div
                    className={cellClassName}
                    style={{ width: width }}
                    onClick={() => sortColumn()}>
                    {children}
                    {sortOrder === 'asc' ? (
                        <LuArrowUpDown className='py-baseGrid-header-sort-icon' />
                    ) :
                        sortOrder === 'desc' ? (
                            <LuArrowDownUp className='py-baseGrid-header-sort-icon' />
                        ) : null}

                </div>
            </TableCell>
        )
}

export default ColumnHeader;
