import { MutableRefObject, useRef } from "react"
import { SelectablePagination } from "./plugins/pagination/SelectablePagination"
import { ServerDataGrid, ServerDataGridOptions } from "./ServerDataGrid"
import { IPageQueryable } from "@palmyralabs/rt-forms"


interface FlexiGridOptions extends ServerDataGridOptions {

}


const FlexiGrid = (o: FlexiGridOptions) => {

    const gridRef: MutableRefObject<IPageQueryable> = useRef<IPageQueryable>(null);

    return <>
        <div className='grid-header'>Header</div>
        <div>
            <ServerDataGrid {...o} ref={gridRef}>
            </ServerDataGrid>
        </div>
        <div className='grid-footer'>
            <SelectablePagination pageSize={o.pageSize} queryRef={gridRef} />
        </div>
    </>
}


export { FlexiGrid }