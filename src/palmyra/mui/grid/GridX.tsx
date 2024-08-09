import React, { MutableRefObject, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { TextField, InputAdornment, Button, ClickAwayListener, Pagination, FormControl, Select, MenuItem } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';
import { default as defaultEmptyChild } from './base/EmptyChildTable';
import TableX from "./base/BaseGrid";
import { Menu, DensitySmall, DensityLarge, Add, KeyboardArrowDown } from '@mui/icons-material';
import { EXPORT_FORMAT, ExportRequest, IPagination } from "@palmyralabs/palmyra-wire"
import { IServerQueryInput, usePageableServerQuery } from "@palmyralabs/rt-forms"
import { TbFilterShare } from "react-icons/tb";
import { GridStore } from "@palmyralabs/palmyra-wire";
import { ColumnDefinition, GridCustomizer, IExportOptions } from './types';
import { generateColumns } from './utils/ColumnConverter';
import ExportOptions from './base/ExportOptions';
import { NoopGridCustomizer } from './base/NoopGridCustomizer';
import { renderTitle } from '../widget/InfoTooltip';
import { IPageQueryable, ITitle } from '../types';
import Filter from './plugins/Filter';



//TODO - show errors on data fetching

interface GridXOptions extends IServerQueryInput {
  store: GridStore<any>,
  columns: ColumnDefinition[],
  children?: any,
  EmptyChild?: React.FC,
  exportOptions?: IExportOptions,
  densityOption?: any,
  onRowClick?: Function,
  onNewClick?: Function,
  customizer?: GridCustomizer,
  customButton?: React.ReactNode[],
  title?: ITitle,
  customAddButton?: any
}

const GridX = forwardRef(function GridX(props: GridXOptions, ref: MutableRefObject<IPageQueryable>) {
  const { columns, children, EmptyChild, onRowClick, quickSearch, exportOptions, densityOption } = props;
  const EmptyChildContainer = EmptyChild || defaultEmptyChild;
  const customizer: GridCustomizer = props.customizer || NoopGridCustomizer;
  const customButton = props.customButton;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [exportDropdownOpen, setExportDropdownOpen] = useState(false);
  const [selectedDensity, setSelectedDensity] = useState('standard');
  const [querySearchText, setQuickSearchText] = useState("");

  const {
    setQueryFilter, setQuickSearch, setSortColumns, setEndPointOptions,
    gotoPage, setPageSize, getPageNo, refreshData, setQueryLimit, getQueryLimit,
    getQueryRequest, data, totalRecords, queryLimit, pageSizeOptions, filter } = usePageableServerQuery(props);

  const currentRef = ref ? ref : useRef<IPageQueryable>(null);
  useImperativeHandle(currentRef, () => {
    return {
      setFilter: (d: any) => {
        setQueryFilter(d);
      },
      refresh: () => {
        refreshData();
      },
      resetFilter() {
        setQueryFilter({});
      },
      setEndPointOptions: (d: any) => {
        setEndPointOptions(d);
      },
      addFilter: (key: string, v: any) => {
        setQueryFilter((f: any) => {
          f[key] = v;
          return { ...f }
        })
      },
      setQueryLimit: (d: IPagination) => {
        setQueryLimit(d);
      },
      getQueryLimit: () => {
        return getQueryLimit();
      },
      setSortOptions(d) {
        setSortColumns(d);
      },
      getCurrentData: () => {
        return data;
      }
    };
  }, [getQueryLimit]);


  const nextPage = (event, newPage) => {
    gotoPage(newPage - 1);
  };

  const columnDefs = generateColumns(columns, customizer);

  const handleDensityChange = (density) => {
    setSelectedDensity(density);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleRowDensityChange = () => {
    if (selectedDensity === 'compact') {
      return {
        padding: '3px', borderRight: '0.55px solid var(--border-color)',
        borderBottom: '0.55px solid var(--border-color)'
      };
    } else if (selectedDensity === 'comfortable') {
      return {
        padding: '15px', fontSize: '18px', borderRight: '0.55px solid var(--border-color)',
        borderBottom: '0.55px solid var(--border-color)'
      };
    } else {
      return {
        padding: '7px', borderRight: '0.55px solid var(--border-color)',
        borderBottom: '0.55px solid var(--border-color)'
      };
    }
  }

  const handleHeaderDensityChange = () => {
    if (selectedDensity === 'compact') {
      return { padding: '3px', borderRight: '1px solid var(--border-color)' };
    } else if (selectedDensity === 'comfortable') {
      return { padding: '15px', fontSize: '18px', borderRight: '1px solid var(--border-color)' };
    } else {
      return { padding: '7px', borderRight: '1px solid var(--border-color)' };
    }
  }

  const densityIcon = () => {
    var iconComponent: any;

    switch (selectedDensity) {
      case 'compact':
        iconComponent = <DensitySmall className='density-icon' />;
        break;
      case 'comfortable':
        iconComponent = <DensityLarge className='density-icon' />;
        break;
      default:
        iconComponent = <Menu className="grid-button-icon" />;
        break;
    }
    return iconComponent;
  }


  const handleSearch = (event) => {
    const val = event.target.value;
    setQuickSearchText(val);

    if (val)
      setQuickSearch(val)
    else {
      setQueryFilter({});
    }
  };

  const handleRowClick = (rowData) => {
    if (onRowClick) {
      onRowClick(rowData);
    }
  }
  const handleRowsPerPageChange = (event) => {
    const limit = parseInt(event.target.value, 10);
    setPageSize(limit);
  }

  const onFilterClick = (event: any) => {
    setFilterDropdownOpen(!filterDropdownOpen);
  }

  const onExportClick = () => {
    setExportDropdownOpen(!exportDropdownOpen);
  }
  const exportDropdownClose = () => {
    setExportDropdownOpen(false);
  }
  const exportData = (format: EXPORT_FORMAT) => {
    const p = getQueryRequest();
    const params: ExportRequest = { ...p, format, limit: -1 };
    props.store.export(params);
    setExportDropdownOpen(!exportDropdownOpen);
  }

  const onNewClick = () => {
    props.onNewClick();
  }
  const width = 200;
  const visiblePagination = !!props.pageSize;
  const visibleFilter = !!quickSearch;

  const arrowStyles = {
    transform: dropdownOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  };
  const filterArrowStyles = {
    transform: filterDropdownOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  };
  const exportArrowStyles = {
    transform: exportDropdownOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  };

  const totalPages = Math.ceil(totalRecords / queryLimit.limit);
  const currentPage = getPageNo();
  const rowsPerPage = queryLimit.limit;
  const startRecord = currentPage * rowsPerPage + 1;
  const endRecord = Math.min((currentPage + 1) * rowsPerPage, totalRecords);
  return (
    <div>
      <div>
        {children}
        <div className='grid-header'>
          <div className='grid-header-right-content'>
            {renderTitle(props.title)}
          </div>
          <div className='grid-header-left-content'>
            <div className='grid-header-filter'>
              {visibleFilter && (
                <TextField
                  sx={{ width: width }}
                  type="text"
                  value={querySearchText}
                  onChange={handleSearch}
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
            </div>
            {densityOption &&
              <ClickAwayListener onClickAway={() => { setDropdownOpen(false) }}>
                <div className='grid-header-button grid-density-btn' onClick={toggleDropdown}>
                  <Button className='grid-btn' disableRipple>
                    {densityIcon()}
                    <span>Density</span>
                    <KeyboardArrowDown style={arrowStyles} className='avathar-arrw-icon' />
                  </Button>
                  {dropdownOpen && (
                    <div className="density-dropdown-content">
                      <ul>
                        <li onClick={() => handleDensityChange('standard')}>
                          <Menu className='density-icon grid-button-icon' />
                          <span className='drodown-content-text'>Standard</span>
                        </li>
                        <li onClick={() => handleDensityChange('compact')}>
                          <DensitySmall className='density-icon grid-button-icon' />
                          <span className='drodown-content-text'>Compact</span>
                        </li>
                        <li onClick={() => handleDensityChange('comfortable')}>
                          <DensityLarge className='density-icon grid-button-icon' />
                          <span className='drodown-content-text'>Comfortable</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </ClickAwayListener>}
            {columns.some(column => column.searchable) && (
              <ClickAwayListener onClickAway={() => { setFilterDropdownOpen(false) }}>
                <div className='grid-header-button grid-filter-btn' onClick={onFilterClick}>
                  <Button className='grid-btn' disableRipple>
                    <TbFilterShare className='grid-button-icon' />
                    <span>Filter</span>
                    <KeyboardArrowDown style={filterArrowStyles} className='avathar-arrw-icon' />
                  </Button>
                  {filterDropdownOpen && (
                    <div className="filter-dropdown-content" onClick={(e) => e.stopPropagation()}>
                      <Filter columns={columns} setFilter={setQueryFilter}
                        defaultFilter={filter}
                        isOpen={filterDropdownOpen} onClose={() => setFilterDropdownOpen(false)} />
                    </div>
                  )}
                </div>
              </ClickAwayListener>)}
            {exportOptions &&
              <ExportOptions dropdownOpen={exportDropdownOpen} dropdownClose={exportDropdownClose} onExportClick={onExportClick}
                arrowStyle={exportArrowStyles} exportOption={exportOptions}
                exportData={exportData} />
            }
            {props.onNewClick ? (
              <div className='grid-header-button grid-add-btn'>
                <div onClick={onNewClick}>
                  <Button className='grid-btn' disableRipple>
                    {props.customAddButton && props.customAddButton.icon ? (
                      React.cloneElement(props.customAddButton.icon, {
                        className: 'grid-button-icon'
                      })
                    ) : (
                      <Add className='grid-button-icon' />
                    )}
                    {props.customAddButton && props.customAddButton.text ? (
                      <>{props.customAddButton.text}</>
                    ) : (
                      <span>Add</span>
                    )}
                  </Button>
                </div>
              </div>) : <></>}
            {customButton && customButton.map((button: any, index: any) => (
              <div key={index} className='grid-custom-button'>
                {button}
              </div>
            ))}
          </div>
        </div>
        <div className='grid-table'>
          <TableX columnDefs={columnDefs} EmptyChild={EmptyChildContainer} customizer={customizer}
            rowData={data} onRowClick={handleRowClick} onRowStyle={handleRowDensityChange}
            onHeaderStyle={handleHeaderDensityChange} onSortColumn={setSortColumns}
          />
        </div>
        <div className='grid-footer'>
          <div className='grid-filter'>
            {(visiblePagination && totalPages !== 0) && (
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
        </div>
      </div >
    </div >
  )
});

export default GridX;