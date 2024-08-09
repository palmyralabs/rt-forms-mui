/**
 * Basic structure to draw the table
 */
import { MutableRefObject, useRef } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Paper } from '@mui/material';
import './Grid.css';
import ColumnHeader from './ColumnHeader'

import {
  flexRender,
  useReactTable,
} from '@tanstack/react-table'
import LoadingChild from './LoadingChild';
import { IReactTanstackTable } from '..';
import { BaseGridOptions } from './typesInternal';
import { useBaseGridManager } from './useBaseGridManager';


export default function BaseGrid(props: BaseGridOptions) {

  const { rowData, customizer } = props;

  const { onSort, options, onHeaderStyle, EmptyChild, onRowClick, onRowStyle } = useBaseGridManager(props);
  const tableRef: MutableRefObject<IReactTanstackTable> = customizer?.getTableRef() || useRef();

  const table = useReactTable(options);
  tableRef.current = table;


  return (
    <TableContainer component={Paper} sx={{ border: '1px solid var(--border-color)', borderRadius: '5px' }}>
      <Table aria-label="simple table" className='table'>
        <TableHead className='table-head'>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  header.isPlaceholder ? null : (
                    <ColumnHeader header={header}
                      key={header.id}
                      onSortChange={onSort}
                      onHeaderStyle={onHeaderStyle}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </ColumnHeader>
                  )
                )
              })}
            </TableRow>
          ))}
        </TableHead>

        {(null == rowData || undefined == rowData || 0 == rowData.length) ? (<></>) : (
          <TableBody >
            {
              table.getRowModel().rows
                .map(row => {
                  const rowStyle = onRowStyle(row.original);
                  return (
                    <TableRow key={row.id} className='table-row' >
                      {row.getVisibleCells().map(cell => {
                        const meta: any = cell.column.columnDef.meta;
                        return (
                          <TableCell key={cell.id}
                            style={{
                              ...(meta?.columnDef?.type === 'number' ? { textAlign: 'end' } : {}),
                              ...rowStyle
                            }}
                            onClick={() => onRowClick(row.original)}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}

                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
          </TableBody>)}
        {(null == rowData || undefined == rowData || 0 == rowData.length) ? (<></>) : (
          <tfoot className='table-footer'>
            {table.getFooterGroups().map(footerGroup => (
              <tr key={footerGroup.id} style={{ textAlign: 'end' }}>
                {footerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>)}

      </Table>
      {(null == rowData) ? (<div>
        <LoadingChild />
      </div>) :
        (undefined == rowData) ? (<div>Error while loading data</div>) : (0 == rowData.length) ? (<EmptyChild />) : (<></>)}
    </TableContainer>
  )
}