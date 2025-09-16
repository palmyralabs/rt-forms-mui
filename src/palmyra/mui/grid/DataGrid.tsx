import { RefObject, forwardRef, useRef } from 'react';
import { IPageQueryable } from "@palmyralabs/rt-forms"
import { ApiDataTable } from './base/ApiDataTable';
import { topic } from '@palmyralabs/ts-utils';
import { DataGridOptions } from './types';



const DataGrid = forwardRef(function ServerDataGrid(props: DataGridOptions,
  ref: RefObject<IPageQueryable>) {
  const queryRef = ref || useRef<IPageQueryable>(null);

  const onDataChange = (newData: any[], oldData?: any[]) => {
    if (props.onDataChange) {
      try {
        props.onDataChange(newData, oldData)
      } catch (error) {
        console.error(error);
      }
    }

    if (props.topic) {
      try {
        topic.publish(props.topic + "/data", newData);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (<>
    <ApiDataTable {...props} onDataChange={onDataChange} ref={queryRef} />
  </>
  )
});

export { DataGrid };