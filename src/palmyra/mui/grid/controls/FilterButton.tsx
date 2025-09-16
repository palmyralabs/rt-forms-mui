import { useRef } from "react";
import { TbFilterShare } from "react-icons/tb";
import { DataGridPluginOptions } from "../types";
import { DropdownButton, IDropdown } from "../../widget";
import { FilterForm } from "../plugins/filter/FilterForm";

const FilterButton = (o: DataGridPluginOptions) => {
    const buttonRef = useRef<IDropdown>(null);

    return (<DropdownButton title="Filter" ref={buttonRef}
        PrefixAdornment={<TbFilterShare />}>
        <FilterForm {...o} onClose={() => buttonRef.current.close()} />
    </DropdownButton>)
}

export { FilterButton }