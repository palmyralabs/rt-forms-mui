import { IPageQueryable } from '@palmyralabs/rt-forms';
import { ApiGridOptions } from './base/ApiGrid';

interface ServerDataGridOptions extends ApiGridOptions {
    onNewClick?: Function;
}
declare const ServerDataGrid: import('react').ForwardRefExoticComponent<ServerDataGridOptions & import('react').RefAttributes<IPageQueryable>>;
export { ServerDataGrid };
export type { ServerDataGridOptions };
