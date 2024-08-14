import { MutableRefObject, forwardRef, useRef } from 'react';

import { IPageQueryable } from "@palmyralabs/rt-forms"
import { ApiGrid, ApiGridOptions } from './base/ApiGrid';
import { SelectablePagination } from './plugins/pagination/SelectablePagination';
import { topic } from '@palmyralabs/ts-utils';
import Filter from './plugins/filter/Filter';

interface ServerDataGridOptions extends ApiGridOptions {
  onNewClick?: Function
}

const ServerDataGrid = forwardRef(function ServerDataGrid(props: ServerDataGridOptions, ref: MutableRefObject<IPageQueryable>) {
  
  const queryRef = useRef<IPageQueryable>();

  const pubsubTopic = props.endPoint + 'hello';

  const onDataChange = (data) => {
    topic.publish(pubsubTopic, data);
  }

  const filterTopic = props.filterTopic || props.endPoint + 'filter';

  return (<>
    <Filter columns={props.columns} onClose={() => { }} queryRef={queryRef}></Filter>
    <ApiGrid {...props} onDataChange={onDataChange} filterTopic={filterTopic} ref={queryRef} />
    <SelectablePagination pubsubTopic={pubsubTopic} pageSize={props.pageSize} queryRef={queryRef} />
  </>
  )
});

export { ServerDataGrid };

export type { ServerDataGridOptions }