import { CellContext, ColumnDef, OnChangeFn, Row, RowData, RowModel, RowSelectionState, Table } from '@tanstack/react-table';
import { MutableRefObject } from 'react';
import { ColumnFieldOptions, ITitle } from '../types';
import { ApiDataTableOptions } from './base/typesInternal';
import { IPageQueryable } from '@palmyralabs/rt-forms';

type IReactTanstackTable = import('@tanstack/table-core').Table<RowData>;
type IExportOptions = PartialRecord<'csv' | 'excel' | 'pdf' | 'docx', string>;
interface ColumnDefinition extends ColumnFieldOptions {
    attribute: string;
    label: string;
    name?: string;
    options?: Record<string, any>;
    width?: string;
    hideTitle?: boolean;
    hideColumn?: boolean;
    searchable?: boolean;
    sortable?: boolean;
    quickSearch?: boolean;
    cellRenderer?: React.FC;
    columnGroup?: string;
}
type CellGetter = ((props: CellContext<RowData, any>) => any);
type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
interface GridCustomizer {
    formatCell: (column: ColumnDefinition, cellValueGetter: CellGetter) => CellGetter;
    formatHeader: (column: ColumnDefinition, header: Function) => any;
    formatFooter: (column: ColumnDefinition, footer: Function) => any;
    preProcessColumns?: (columnDefs: ColumnDef<RowData, any>[]) => any;
    preProcessData?: (data: any) => any;
    getTableOptions?: () => ITableOptions;
    getTableRef?: () => MutableRefObject<IReactTanstackTable>;
}
interface ITableOptions {
    state?: any;
    enableRowSelection?: boolean | ((row: Row<unknown>) => boolean);
    onRowSelectionChange?: OnChangeFn<RowSelectionState>;
    getFilteredRowModel?: (table: Table<any>) => () => RowModel<any>;
    getCoreRowModel?: (table: Table<any>) => () => RowModel<any>;
    debug: boolean;
}
interface IGridPlugin {
    onDataChange?: (newData: any[], oldData?: any[]) => void;
}
interface DataGridOptions extends ApiDataTableOptions {
    onNewClick?: Function;
    topic?: string;
}
interface DataGridPluginOptions {
    topic: string;
    queryRef: MutableRefObject<IPageQueryable>;
    pageSize?: number | number[];
    columns: ColumnDefinition[];
}
interface GridXOptions extends DataGridOptions {
    title?: ITitle;
    DataGridControls?: (props: DataGridPluginOptions) => JSX.Element;
    DataGridPagination?: (props: DataGridPluginOptions) => JSX.Element;
}
export type { ColumnDefinition, GridCustomizer, CellGetter, IExportOptions, IReactTanstackTable, ITableOptions, IGridPlugin, DataGridOptions, DataGridPluginOptions, GridXOptions };
