import { Button } from "@mui/material";
import { FieldGroupContainer, IForm, PalmyraForm } from "@palmyralabs/rt-forms";
import { setValueByKey } from "@palmyralabs/ts-utils";
import { MutableRefObject, useRef } from "react";
import { TbRefresh } from "react-icons/tb";
import { TbFilterShare } from "react-icons/tb";
import { ColumnDefinition, DataGridPluginOptions } from "../../types";
import { convertToField } from "./GridFieldConverter";
import getField from "./FieldGenerator";
import './FilterForm.css';


interface FilterOptions extends DataGridPluginOptions {
    onClose?: (filter: any) => void,
    column?: 1 | 2 | 3,
    defaultFilter?: Record<string, any>
}

const FilterForm = (o: FilterOptions) => {
    const formattedFilterValue = {};
    const filterRef: MutableRefObject<IForm> = useRef<IForm>();
    const defaultFilter = o.defaultFilter || {};

    const columns: ColumnDefinition[] = convertToField(o.columns);

    const getFilterColumns = () => {
        return columns.map((column: ColumnDefinition, idx) => {
            return getField(column, column.label);
        });
    }

    const onClose = o.onClose || ((d) => { });

    Object.keys(defaultFilter || {}).map((k) => {
        const v = defaultFilter[k];
        setValueByKey(k, formattedFilterValue, v);
    })

    const setFilter = (d) => {
        if (o.queryRef.current) {
            o.queryRef.current.setFilter(d)
            onClose(d);
        }
        else
            console.warn('Query reference not found');
    }

    const reset = () => {
        setFilter({});
    }

    const assignFilter = () => {
        const formData = filterRef.current.getData();
        var filterData = {};

        Object.entries(formData).map(([key, value]) => {
            if (value && value != '') {
                filterData[key] = value;
            }
        })

        if (setFilter) {
            setFilter(filterData);
        };
    };

    const fieldGroupColumn = o.column || 2;

    return <div className='py-filter-container'>
        <div className="py-filter-content">
            <PalmyraForm formData={formattedFilterValue} ref={filterRef}>
                <FieldGroupContainer columns={fieldGroupColumn}>
                    {getFilterColumns()}
                </FieldGroupContainer>
            </PalmyraForm>
        </div>
        <div className="py-filter-button-container">
            <Button className='py-reset-button' disableRipple onClick={reset}>
                <TbRefresh className="py-button-icon" />
                Reset
            </Button>
            <Button className='py-filter-button' disableRipple onClick={assignFilter}>
                <TbFilterShare className='py-button-icon' />
                Filter
            </Button>
        </div>
    </div>
}

export { FilterForm };