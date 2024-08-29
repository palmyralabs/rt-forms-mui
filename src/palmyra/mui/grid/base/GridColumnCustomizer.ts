import { CellGetter, ColumnDefinition, GridCustomizer } from "../types";

const gridColumnCustomizer = (config: Record<string, ((d: CellGetter) => CellGetter)>,
    factory?: { header?: Record<string, Function>, footer?: Record<string, Function> }
): GridCustomizer => {
    return {
        formatCell: function (column: ColumnDefinition, cellValueGetter: CellGetter)
            : CellGetter {
            const attribute = column.attribute;
            if (config[attribute]) {
                return config[attribute](cellValueGetter);
            } else
                return cellValueGetter;
        },
        formatHeader: function (column: ColumnDefinition, header: Function) {
            const attribute = column.attribute;
            if (factory?.header?.[attribute])
                return factory.header[attribute](column, header);
            return header;
        },
        formatFooter: function (column: ColumnDefinition, footer: Function) {
            const attribute = column.attribute;
            if (factory?.footer?.[attribute])
                return factory.footer[attribute](column, footer)
            return footer;
        }
    }
}

export { gridColumnCustomizer }