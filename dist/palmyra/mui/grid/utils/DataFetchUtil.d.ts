import { ColumnDefinition } from '@palmyralabs/rt-forms';

declare const getDisplayValue: (field: ColumnDefinition, data: FormData) => any;
declare const formatValue: (field: ColumnDefinition, value: any) => any;
export { getDisplayValue, formatValue };
