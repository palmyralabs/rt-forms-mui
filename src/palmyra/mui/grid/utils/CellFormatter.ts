
import { ColumnDefinition } from "..";
import { formatValue } from "./DataFetchUtil";


const formatBIT = (columnDef) => {
    var pattern = columnDef.displayPattern || [{ "1": "Yes" }, { "0": "No" }];
    var data = {};
    if (Array.isArray(pattern)) {
        for (var idx in pattern) {
            data = { ...data, ...pattern[idx] };
        }
    }

    return (info) => {
        const value = info.getValue();
        if (value) {
            if (data[value])
                return data[value];
        }

        if (value)
            return data[1];
        else
            return data[0];
    }
}


const formatColumn = (columnDef: ColumnDefinition) => {
    return (info:any) => {        
        return formatValue(columnDef, info.getValue());
    }
}


const getFormatFn = (columnDef) => {
    const formatter = formatColumn(columnDef);
    return { cell: formatter };
}

export { getFormatFn, formatBIT, formatColumn }