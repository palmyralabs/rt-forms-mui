import { CellGetter } from "../types";
import { ColumnDefinition, GridCustomizer } from "@palmyralabs/rt-forms";

const NoopGridCustomizer: GridCustomizer = {
    formatCell: function (column: ColumnDefinition, cellValueGetter: CellGetter): CellGetter {
        return cellValueGetter;
    },
    formatHeader: function (column: ColumnDefinition, header: Function) {
        return header;
    },
    formatFooter: function (column: ColumnDefinition, footer: Function) {
        return footer;
    }
}

export { NoopGridCustomizer }