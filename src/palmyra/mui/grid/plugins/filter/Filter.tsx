import { Button } from "@mui/material";
import { IPageQueryable } from "@palmyralabs/rt-forms";
import { setValueByKey } from "@palmyralabs/ts-utils";
import { MutableRefObject } from "react";
import { TbRefresh } from "react-icons/tb";
import { TbFilterShare } from "react-icons/tb";
// import { convertToField } from "./filter/GridFieldConverter";


interface FilterOptions {
    
    gridRef: MutableRefObject<IPageQueryable>
}

const Filter = ({ columns, isOpen, onClose, setFilter, defaultFilter = {} }) => {

    const formattedFilterValue = {};

    Object.keys(defaultFilter || {}).map((k)=>{
        const v = defaultFilter[k];
        setValueByKey(k, formattedFilterValue, v);
    })

    // var { getFieldManager, getFilterData } = createFilterData(formattedFilterValue);

    const reset = () => {
        setFilter({});
        onClose();
    }

    const assignFilter = () => {
        var data = {};
        if (setFilter) {
            setFilter(data);
        }
        onClose();
    };

    // const _fields = convertToField(columns);

    return <div className='grid-filter-container'>        
        <div className="grid-filter-content">
            
        </div>
        <div className="grid-filter-btn-container">
            <Button className='secondary-filled-button' disableRipple onClick={reset}>
                <TbRefresh className="button-icon" />
                Reset
            </Button>
            <Button className='filled-button' disableRipple onClick={assignFilter}>
                <TbFilterShare className='button-icon' />
                Filter
            </Button>
        </div>
    </div>
}

export default Filter;