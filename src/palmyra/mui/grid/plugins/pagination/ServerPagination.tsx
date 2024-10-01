import { FormControl, MenuItem, Pagination, Select, Stack } from "@mui/material";
import { IServerQueryInput, useServerQuery } from "@palmyralabs/rt-forms";

const ServerPagination = (props: IServerQueryInput) => {

    const { getTotalRecords, gotoPage, setPageSize, getPageNo, setQueryLimit } = useServerQuery(props);

    const handleRowsPerPageChange = (event) => {
        const limit = parseInt(event.target.value, 10);
        setPageSize(limit);
    }

    const nextPage = (event, newPage) => {
        gotoPage(newPage - 1);
    };

    const visiblePagination = !!props.pageSize;

    const queryLimit: any = (d) => setQueryLimit(d.limit);

    const totalPages = Math.ceil(getTotalRecords() / queryLimit || 15);

    const pageSize: any = props.pageSize;

    const pageSizeOptions = Array.isArray(pageSize) ? pageSize : [pageSize];

    return (<>
        <div className='card-pagination'>
            {(visiblePagination && totalPages !== 0) && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        {pageSizeOptions && pageSizeOptions.length > 1 ? (
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div><span>Showing</span></div>
                                    <div>
                                        <Select
                                            labelId="rows-per-page-select-label"
                                            id="rows-per-page-select"
                                            defaultValue={pageSize[0]}
                                            onChange={handleRowsPerPageChange}
                                            label="Rows per page">
                                            {pageSizeOptions.map((pageSize) => (
                                                <MenuItem key={pageSize} value={pageSize}>
                                                    {pageSize}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                    <div><span>of {getTotalRecords()} Results</span></div>
                                </div>
                            </FormControl>
                        ) : null}
                    </div>
                    <div>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Pagination count={totalPages} shape="rounded"
                                onChange={nextPage} page={getPageNo() + 1}
                            />
                        </Stack>
                    </div>
                </div>
            )}
        </div>
    </>)
}
export { ServerPagination };