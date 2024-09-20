import { CellContext, OnChangeFn, Row, RowData, RowModel, RowSelectionState, Table } from '@tanstack/react-table';
import { MutableRefObject } from 'react';
import { ITitle } from '../types';
import { ApiDataTableOptions } from './base/typesInternal';
import { ColumnDefinition, IPageQueryable } from '@palmyralabs/rt-forms';

type IReactTanstackTable = import('@tanstack/table-core').Table<RowData>;
type IExportOptions = PartialRecord<'csv' | 'excel' | 'pdf' | 'docx', string>;
type CellGetter = ((props: CellContext<RowData, any>) => any);
type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
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
    getPluginOptions?: () => any;
    quickSearch?: string;
    queryRef: MutableRefObject<IPageQueryable>;
    pageSize?: number | number[];
    columns: ColumnDefinition[];
}
interface GridXOptions<ControlPropsType> extends DataGridOptions {
    title?: ITitle;
    getPluginOptions?: any;
    DataGridControlProps?: ControlPropsType;
    DataGridControls?: (props: DataGridPluginOptions & ControlPropsType) => JSX.Element;
    DataGridPagination?: (props: DataGridPluginOptions) => JSX.Element;
}
interface PalmyraGridOptions<T> extends GridXOptions<T> {
}
interface IPalmyraGrid extends IPageQueryable {
}
export type { CellGetter, IExportOptions, IReactTanstackTable, ITableOptions, IGridPlugin, DataGridOptions, DataGridPluginOptions, GridXOptions, PalmyraGridOptions, IPalmyraGrid };
