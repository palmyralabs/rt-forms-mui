import { IPageQueryable } from "@palmyralabs/rt-forms";
import { forwardRef, MutableRefObject, useMemo, useRef } from "react";
import { DropdownButton } from "../widget/DropdownButton";
import { TbFilterShare } from "react-icons/tb";
import { FilterForm } from "./plugins/filter/FilterForm";
import { DataGrid } from "./DataGrid";
import { SelectablePagination } from "./plugins/pagination/SelectablePagination";
import { DataGridPluginOptions, GridXOptions } from "./types";
import './DataGrid.css'
import { renderTitle } from "../widget";

const GridX = forwardRef(function GridX(props: GridXOptions, ref: MutableRefObject<IPageQueryable>) {
    const queryRef = ref || useRef<IPageQueryable>();

    const topic: string = props.topic || useMemo(() => 'id' + Math.random(), []);

    const pluginOptions: DataGridPluginOptions = {
        queryRef, columns: props.columns,
        pageSize: props.pageSize, topic
    }

    const Controls = props.DataGridControls ||
        ((o: DataGridPluginOptions) => <><DropdownButton title="Filter" PrefixAdornment={<TbFilterShare />}>
            <FilterForm {...o} />
        </DropdownButton></>)
    const Pagination = props.DataGridPagination || SelectablePagination;

    return <>
        <div className='py-datagrid-header'>
            <div className='py-datagrid-header-right-container'>
                <div className="py-datagrid-title">{renderTitle(props.title)}</div>
            </div>
            <div className='py-datagrid-header-left-container'>
                <Controls {...pluginOptions} />
            </div>
        </div>
        <DataGrid {...props} topic={topic} ref={queryRef} />
        <Pagination {...pluginOptions} />
    </>
});

export { GridX }