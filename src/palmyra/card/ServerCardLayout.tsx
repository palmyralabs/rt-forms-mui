import { MutableRefObject, forwardRef, useImperativeHandle, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { TextField, InputAdornment } from '@mui/material';
import './CardLayout.css';
import { IPageQueryable, IServerQueryInput, useServerQuery } from '@palmyralabs/rt-forms';
import { renderTitle } from '../widget/InfoTooltip';
import CardLayout from './CardLayout';
import { ITitle } from '../widget/types';
import { SelectablePagination } from '../mui/grid/plugins/pagination/SelectablePagination';


interface ServerCardLayoutInput extends IServerQueryInput {
    Child: React.FC,
    childProps?: any,
    listKeyProvider?: (data: any, index: number) => string | number,
    EmptyChild?: React.FC,
    title?: ITitle,
    customButton?: React.ReactNode[],
    preProcess?: (data: any) => any
}

const ServerCardLayout = forwardRef(function MuiSelect(props: ServerCardLayoutInput, ref: MutableRefObject<any>) {
    const { title, Child, childProps, customButton } = props;
    const currentRef: MutableRefObject<IPageQueryable> = ref ? ref : useRef(null);

    const serverQuery = useServerQuery(props);

    const listKeyProvider = props.listKeyProvider || ((data, index) => index);

    useImperativeHandle(currentRef, () => serverQuery, [serverQuery]);

    const { setQuickSearch, getCurrentData } = serverQuery;


    const handleFilter = (event) => {
        const val = event.target.value;
        setQuickSearch(val);
    };

    const width = 200;    
    const visibleFilter = !!props.quickSearch;

    return (
        <div>
            <div className="card-page-container" >
                <div>
                    <div className='card-header'>
                        <div className='card-left-content'>
                            {renderTitle(title)}
                        </div>
                        <div className='card-right-content'>
                            {visibleFilter && (
                                <TextField
                                    sx={{ width: width }}
                                    type="text"
                                    onChange={handleFilter}
                                    style={{ border: "0px" }}
                                    size="small"
                                    placeholder="Name"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <AiOutlineSearch className="card-filter-icon" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                            {customButton && customButton.map((button: any, index: any) => (
                                <div key={index} className='card-custom-button'>
                                    {button}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <CardLayout Child={Child} childKeyProvider={listKeyProvider} preProcess={props.preProcess}
                            dataList={getCurrentData()} childProps={childProps} EmptyChild={props.EmptyChild}
                        ></CardLayout>
                    </div>
                    <div className='card-pagination'>
                        <SelectablePagination pageSize={props.pageSize} pageQuery={serverQuery}></SelectablePagination>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default ServerCardLayout;
export type { ServerCardLayoutInput }