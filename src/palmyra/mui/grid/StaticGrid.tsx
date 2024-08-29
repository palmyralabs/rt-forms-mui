import { MutableRefObject, forwardRef } from 'react';
import { IPageQueryable } from "@palmyralabs/rt-forms"
import { GridCustomizer } from './types';
import { generateColumns } from './utils/ColumnConverter';
import BaseTable from './base/BaseTable';
import { default as defaultEmptyChild } from './base/EmptyChildTable';
import { StaticGridOptions } from './base/typesInternal';
import { NoopGridCustomizer } from './base/NoopGridCustomizer';

const StaticGrid = forwardRef(function StaticGrid(props: StaticGridOptions, ref: MutableRefObject<IPageQueryable>) {
  const { columns, EmptyChild } = props;
  const EmptyChildContainer = EmptyChild || defaultEmptyChild;
  const customizer: GridCustomizer = props.customizer || NoopGridCustomizer;

  const columnDefs = generateColumns(columns, customizer);

  const handleRowClick = props.onRowClick ? (rowData: any) => {
    props.onRowClick(rowData);
  } : () => { };

  const data = props.rowData;

  return (
    <BaseTable columnDefs={columnDefs} EmptyChild={EmptyChildContainer} customizer={customizer}
      rowData={data} onRowClick={handleRowClick} onColumnSort={props.setSortColumns} />
  )
});

export { StaticGrid };