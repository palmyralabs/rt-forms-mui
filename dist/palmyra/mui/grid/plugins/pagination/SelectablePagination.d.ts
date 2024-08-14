import { IPageQueryable } from '@palmyralabs/rt-forms';
import { MutableRefObject } from 'react';

interface PaginationOptions {
    pageSize: number | number[];
    queryRef: MutableRefObject<IPageQueryable>;
    pubsubTopic?: string;
}
declare const SelectablePagination: (o: PaginationOptions) => import("react/jsx-runtime").JSX.Element;
export { SelectablePagination };
