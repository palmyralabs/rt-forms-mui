import React, { MutableRefObject, forwardRef, useImperativeHandle, useRef } from 'react';
import { default as defaultEmptyChild } from './base/EmptyChildTable';
import { IPageQueryable, IServerQueryInput, useServerQuery } from "@palmyralabs/rt-forms"
import { ColumnDefinition, GridCustomizer } from './types';
import { generateColumns } from './utils/ColumnConverter';
import { NoopGridCustomizer } from './base/NoopGridCustomizer';
import BaseGrid from './base/BaseGrid';
import { IEndPoint } from '@palmyralabs/palmyra-wire';

interface ServerDataGridOptions extends IServerQueryInput {
  endPoint: IEndPoint,
  store?: never,
  columns: ColumnDefinition[],
  customizer?: GridCustomizer,
  EmptyChild?: React.FC,
  onRowClick?: Function,
  onNewClick?: Function
}

const ServerDataGrid = forwardRef(function ServerDataGrid(props: ServerDataGridOptions, ref: MutableRefObject<IPageQueryable>) {
  const { columns, EmptyChild } = props;
  const EmptyChildContainer = EmptyChild || defaultEmptyChild;
  const customizer: GridCustomizer = props.customizer || NoopGridCustomizer;

  const serverQuery = useServerQuery(props);

  const currentRef = ref ? ref : useRef<IPageQueryable>(null);
  useImperativeHandle(currentRef, () => serverQuery, [serverQuery]);

  const columnDefs = generateColumns(columns, customizer);

  const handleRowClick = props.onNewClick ? (rowData) => {
    props.onRowClick(rowData);
  } : () => { };

  const data = serverQuery.getCurrentData();
  const setSortColumns = serverQuery.setSortColumns;

  return (
    <BaseGrid columnDefs={columnDefs} EmptyChild={EmptyChildContainer} customizer={customizer}
      rowData={data} onRowClick={handleRowClick} onColumnSort={setSortColumns}
    />
  )
});

export { ServerDataGrid };

export type { ServerDataGridOptions }