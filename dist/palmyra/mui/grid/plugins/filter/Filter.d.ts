import { IPageQueryable } from '@palmyralabs/rt-forms';
import { MutableRefObject } from 'react';
import { ColumnDefinition } from '../../types';

interface FilterOptions {
    columns: ColumnDefinition[];
    onClose?: (filter: any) => void;
    defaultFilter?: Record<string, any>;
    queryRef: MutableRefObject<IPageQueryable>;
}
declare const Filter: (o: FilterOptions) => import("react/jsx-runtime").JSX.Element;
export default Filter;
