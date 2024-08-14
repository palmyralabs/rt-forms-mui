import { RowData, ColumnDef } from '@tanstack/react-table';
import { GridCustomizer } from '../types';

interface BaseGridOptions {
    'aria-label'?: string;
    showFooter?: boolean;
    className?: string;
    columnDefs: ColumnDef<RowData, any>[];
    rowData: any[];
    onRowClick?: Function;
    onColumnSort?: Function;
    EmptyChild?: React.FC;
    customizer?: GridCustomizer;
}
export type { BaseGridOptions };
