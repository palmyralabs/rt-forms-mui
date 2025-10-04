import { RefObject, forwardRef } from 'react';
import { generateColumns, GridCustomizer, IPageQueryable, NoopGridCustomizer } from "@palmyralabs/rt-forms"
import BaseTable from './base/BaseTable';
import { default as defaultEmptyChild } from './base/EmptyChildTable';
import { StaticGridOptions } from './base/typesInternal';

const StaticGrid = forwardRef(function StaticGrid(props: StaticGridOptions, ref: RefObject<IPageQueryable>) {
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