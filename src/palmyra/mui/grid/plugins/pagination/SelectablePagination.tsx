import { FormControl, MenuItem, Pagination, Select } from "@mui/material"
import { IPageQueryable } from "@palmyralabs/rt-forms"

interface PaginationOptions {
    pageSize: number | number[],
    pageQuery: IPageQueryable
}

const SelectablePagination = (o: PaginationOptions) => {

    const pageQuery = o.pageQuery;

    if (!pageQuery)
        return (<></>);

    const totalRecords = pageQuery.getTotalRecords();
    const queryLimit = pageQuery.getQueryLimit();

    const pageSizeOptions = Array.isArray(o.pageSize) ? o.pageSize : [o.pageSize];

    const { gotoPage, getPageNo, setPageSize } = pageQuery;

    const currentPage = getPageNo();
    const rowsPerPage = queryLimit.limit || 25;
    const totalPages = Math.ceil(totalRecords / rowsPerPage);
    const startRecord = currentPage * rowsPerPage + 1;
    const endRecord = Math.min((currentPage + 1) * rowsPerPage, totalRecords);

    const nextPage = (_event: any, newPage: number) => {
        gotoPage(newPage - 1);
    };

    const handleRowsPerPageChange = (event) => {
        const limit = parseInt(event.target.value, 10);
        setPageSize(limit);
    }

    return <div className='grid-filter'>
        {(totalPages !== 0) && (
            <div>
                {/* <TablePagination
                  component="div"
                  count={totalRecords || 0}
                  page={getPageNo()}
                  onPageChange={nextPage}
                  rowsPerPage={queryLimit.limit}
                  rowsPerPageOptions={pageSizeOptions || []}
                  onRowsPerPageChange={handleRowsPerPageChange}
                /> */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ width: '50%' }}>
                        {
                            pageSizeOptions && pageSizeOptions.length > 1 ? (
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div><span>Showing</span></div>
                                        <div>
                                            <Select
                                                labelId="rows-per-page-select-label"
                                                id="rows-per-page-select"
                                                defaultValue={pageSizeOptions[0]}
                                                onChange={handleRowsPerPageChange}
                                                label="Rows per page"
                                            >
                                                {pageSizeOptions.map((pageSize) => (
                                                    <MenuItem key={pageSize} value={pageSize}>
                                                        {pageSize}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </div>
                                        <div><span>{startRecord} - {endRecord} of {totalRecords} Results</span></div>
                                    </div>
                                </FormControl>

                            ) : null
                        }
                    </div>
                    <div style={{}}>
                        <Pagination count={totalPages} shape="rounded"
                            onChange={nextPage} page={getPageNo() + 1}
                        />
                    </div>
                </div>
            </div>
        )}

    </div>

}

export { SelectablePagination }