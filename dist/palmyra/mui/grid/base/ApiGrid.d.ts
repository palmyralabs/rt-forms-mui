import { default as React } from 'react';
import { IPageQueryable, IServerQueryInput } from '@palmyralabs/rt-forms';
import { ColumnDefinition, GridCustomizer } from '../types';
import { IEndPoint } from '@palmyralabs/palmyra-wire';

interface ApiGridOptions extends IServerQueryInput {
    endPoint: IEndPoint;
    store?: never;
    columns: ColumnDefinition[];
    customizer?: GridCustomizer;
    EmptyChild?: React.FC;
    onRowClick?: Function;
}
declare const ApiGrid: React.ForwardRefExoticComponent<ApiGridOptions & React.RefAttributes<IPageQueryable>>;
export { ApiGrid };
export type { ApiGridOptions };
