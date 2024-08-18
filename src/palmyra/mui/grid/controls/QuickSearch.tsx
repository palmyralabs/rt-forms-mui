import { InputAdornment, TextField } from "@mui/material"
import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai";
import { DataGridPluginOptions } from "../types";
import { IPluginBtnControl } from "./types";

interface IQuickSearchOptions extends Pick<DataGridPluginOptions, 'queryRef' | 'columns'>, IPluginBtnControl {
    width: string
}

export type TextFieldVariants = 'outlined' | 'standard' | 'filled';

type TextFieldProps = React.ComponentProps<typeof TextField>

const QuickSearch = (o: IQuickSearchOptions & TextFieldProps) => {
    const { width, queryRef } = o;
    const [searchText, setSearchText] = useState<string>('');
    const visible = o.visible != false;

    const onSearchTextChange = (event) => {
        const val: string = event.target.value;
        setSearchText(val);
        if (queryRef?.current) {
            if (val && val.length > 0)
                queryRef.current.setQuickSearch(val);
            else {
                queryRef.current.setQuickSearch(null);
            }
        }
    };

    return <> {visible &&
        <TextField
            sx={{ width: width }}
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
            style={{ border: "0px" }}
            size="small"
            placeholder="Quick Search"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <AiOutlineSearch className="card-filter-icon" />
                    </InputAdornment>
                ),
            }}
            {...o}
        />
    }</>
}

export { QuickSearch }