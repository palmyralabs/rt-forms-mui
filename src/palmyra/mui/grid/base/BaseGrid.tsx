/**
 * Basic structure to draw the table
 */
import { MutableRefObject, useRef } from 'react'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from '@mui/material'
import './BaseGrid.css';
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
  const { onColumnSort, options, EmptyChild, onRowClick } = useBaseGridManager(props);
  const tableRef: MutableRefObject<IReactTanstackTable> = customizer?.getTableRef() || useRef();

  const table = useReactTable(options);
  tableRef.current = table;


  return (<>
    <div className={props.className}>
      <Table aria-label={props['aria-label']} className='plr-baseGrid'>
        <TableHead className='plr-baseGrid-header'>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id} className='plr-baseGrid-header-row'>
              {headerGroup.headers.map(header => {
                return (
                  header.isPlaceholder ? null : (
                    <ColumnHeader header={header}
                      key={header.id}
                      onSortChange={onColumnSort}
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
                .map((row, index) => {
                  const rowClassName = 'plr-baseGrid-data-row plr-baseGrid-data-row-' + ((1 == index % 2) ? 'even' : 'odd');
                  return (
                    <TableRow key={row.id} className={rowClassName} >
                      {row.getVisibleCells().map(cell => {
                        const meta: any = cell.column.columnDef.meta;
                        return (
                          <TableCell key={cell.id}
                            className='plr-baseGrid-data-cell'
                            style={{
                              ...(meta?.columnDef?.type === 'number' ? { textAlign: 'end' } : {})
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
        {(!props.showFooter || null == rowData || undefined == rowData || 0 == rowData.length) ? (<></>) : (
          <TableFooter className='plr-baseGrid-footer'>
            {table.getFooterGroups().map(footerGroup => (
              <TableRow key={footerGroup.id} style={{ textAlign: 'end' }} className='plr-baseGrid-footer-row'>
                {footerGroup.headers.map(header => (
                  <TableCell key={header.id} className='plr-baseGrid-footer-cell'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableFooter>)}

      </Table>
      {(null == rowData) ? (<div>
        <LoadingChild />
      </div>) :
        (undefined == rowData) ? (<div>Error while loading data</div>) : (0 == rowData.length) ? (<EmptyChild />) : (<></>)}
    </div>
  </>
  )
}