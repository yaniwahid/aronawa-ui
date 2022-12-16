import isEmpty from 'lodash/isEmpty';
import React, { FC, useEffect, useState } from 'react';
import { Skeleton } from '../../atoms';
import Button from '../../atoms/Button';
import Checkbox from '../../atoms/Checkbox';
import Icon from '../../atoms/Icon';
import Input from '../../atoms/Input';
import Select, { Option } from '../../atoms/Select';
import {
  EmptyBlockStyled,
  Pagination,
  PaginationStyled,
  PaginationTotal,
  RecordInfo,
  ShowItem,
  TableScroll,
  TableStyled,
  TableWrapper,
} from './Table.styles';
import { ColumnRender, IColumn, ISortConfig, ITable, SortDirection } from './Table.types';

const Table: FC<ITable> = ({
  columns,
  data,
  sortFunction,
  meta,
  changePage,
  changePageSize,
  changePageLimit,
  rowSelection,
  rowSelectionOnChange,
  layout,
  isPagination = true,
  teid = 'table',
  emptyData,
  isStipred = true,
  isLoading,
  skeletonData = 10,
  ...props
}) => {
  const [sortConfig, setSortConfig] = useState<ISortConfig>({
    key: '',
    direction: '',
  });
  const [dataTable, setDataTable] = useState(data);
  const [pageInput, setPageInput] = useState(meta.page);
  useEffect(() => {
    if (meta && meta.page) {
      setPageInput(meta.page);
    }
  }, [meta.page]);

  useEffect(() => {
    if (data && data.length > 0) {
      const selectedRow = data.map((row) => {
        const newRow = { ...row };
        if (row.checked === undefined) {
          newRow.checked = false;
        }
        if (row.indeterminate === undefined) {
          newRow.indeterminate = false;
        }
        if (row.disabled === undefined) {
          newRow.disabled = false;
        }
        return newRow;
      });

      const newValue = { ...selectAll };
      const filteredValue = selectedRow.filter((row: any) => row.checked || row.indeterminate);
      filteredValue?.length > 0 ? (newValue.checked = true) : (newValue.checked = false);

      filteredValue?.length === selectedRow.length
        ? (newValue.indeterminate = false)
        : filteredValue?.length > 0
        ? (newValue.indeterminate = true)
        : (newValue.indeterminate = false);

      setDataTable(data);
      setSelectAll(newValue);
      setSelectedRow(selectedRow);
    }
  }, [data]);

  const [selectedRow, setSelectedRow]: any[] = useState(
    dataTable.map((row) => {
      const newRow = { ...row };
      newRow.checked = false;
      newRow.indeterminate = false;
      newRow.disabled = false;
      return newRow;
    }),
  );
  const [selectAll, setSelectAll] = useState({
    checked: false,
    indeterminate: false,
  });

  const getNextSortDirection = (direction?: SortDirection): SortDirection => {
    switch (direction) {
      case 'ascending':
        return 'descending';
      case 'descending':
        return '';
      default:
        return 'ascending';
    }
  };

  const requestSort = (column: IColumn) => async (e: any) => {
    const { key, sortDirection } = column;
    const colKey = key?.toString() ?? '';
    const hasSortDirection = typeof sortDirection !== 'undefined';
    const initialDirection = hasSortDirection ? sortDirection : sortConfig.direction;
    let direction: SortDirection = getNextSortDirection('');

    if (sortConfig?.key === colKey || hasSortDirection) {
      direction = getNextSortDirection(initialDirection);
    }

    await setSortConfig({ key: colKey, direction });
    sortFunction && sortFunction({ key: colKey, direction });
  };

  const handlePageSizeChange = (val: any) => {
    if (changePageLimit) {
      changePageLimit(val);
      return; // when `changePageLimit` & `changePageSize` exists, only `changePageLimit` will be executed
    }

    if (changePageSize) {
      changePageSize(val);
    }
  };

  const handleChangePage = (e: any) => {
    const page = e ? Number(e) : 0;
    setPageInput(page);
  };

  const handlePressEnterPageInput = (e: any) => {
    if (e.key === 'Enter') {
      changePage(pageInput);
    }
  };

  const handleNext = () => {
    changePage(meta.page + 1);
  };

  const handlePrev = () => {
    changePage(meta.page - 1);
  };

  const options = [
    {
      value: 10,
    },
    {
      value: 25,
    },
    {
      value: 50,
    },
    {
      value: 100,
    },
  ];

  const updateSelectedRow = (selectedData: any[], index?: number) => {
    const newSelectedRow = JSON.parse(JSON.stringify(selectedData));
    const filteredValue = newSelectedRow.filter((row: any) => row.checked || row.indeterminate);
    filteredValue.map((row: any) => {
      delete row.checked;
      delete row.indeterminate;
      delete row.disabled;
    });
    rowSelectionOnChange && rowSelectionOnChange(filteredValue, index);
  };

  const handleCheckBox = (index: number) => (event: any) => {
    const isChecked = event?.target.checked;
    const newSelectedRow = JSON.parse(JSON.stringify(selectedRow));
    const newValue = { ...selectAll };

    newSelectedRow.map((row: any, rowIndex: number) => {
      if (rowIndex === index) {
        row.checked = isChecked;
      }
    });

    const filteredValue = newSelectedRow.filter((row: any) => row.checked || row.indeterminate);
    filteredValue.length > 0 ? (newValue.checked = true) : (newValue.checked = false);

    filteredValue.length === newSelectedRow.length
      ? (newValue.indeterminate = false)
      : filteredValue.length > 0
      ? (newValue.indeterminate = true)
      : (newValue.indeterminate = false);

    setSelectAll(newValue);
    setSelectedRow(newSelectedRow);
    updateSelectedRow(newSelectedRow, index);
  };

  const handleSelectAll = (event: any) => {
    const isChecked = event?.target.checked;
    const newSelectedRow = JSON.parse(JSON.stringify(selectedRow));
    const newValue = { ...selectAll };

    newValue.checked = isChecked;
    newSelectedRow.map((row: any) => {
      newValue.checked ? (row.checked = true) : (row.checked = false);
    });
    newValue.indeterminate = false;

    setSelectAll(newValue);
    setSelectedRow(newSelectedRow);
    updateSelectedRow(newSelectedRow);
  };

  let totalRecords = meta.totalData;
  let recordsCountFrom = (meta.page - 1) * meta.pageSize + 1;
  let recordsCountTo = recordsCountFrom + data.length - 1;

  const recordsInfoText = `${recordsCountFrom}-${recordsCountTo} of ${totalRecords} items`;

  const DEFAULT_SORT_ICON = <Icon name="direction" />;
  const ASCENDING_SORT_ICON = <Icon name="angle-up" />;
  const DESCENDING_SORT_ICON = <Icon name="angle-down" />;
  const getSortIconByDirection = (direction?: SortDirection) => {
    switch (direction) {
      case 'ascending':
        return ASCENDING_SORT_ICON;
      case 'descending':
        return DESCENDING_SORT_ICON;
      default:
        return DEFAULT_SORT_ICON;
    }
  };

  const generateSortIcon = (column: IColumn, sortConfig: ISortConfig) => {
    if (sortConfig.key !== column.key && !column?.sortDirection) {
      return DEFAULT_SORT_ICON;
    }

    const direction = column?.sortDirection ?? sortConfig.direction;
    return getSortIconByDirection(direction);
  };

  const isHideTitleRow = Boolean(
    columns.filter((column: IColumn) => !column.title || isEmpty(column.title))?.length ===
      columns.length,
  );

  const colSpanLength = columns.length + 1;

  return (
    <TableWrapper isEmpty={Boolean(emptyData)}>
      <TableScroll>
        <TableStyled
          layout={layout}
          isPagination={isPagination}
          isStipred={isStipred && !emptyData}
          data-tesid={teid}
          {...props}
        >
          {!isHideTitleRow && (
            <thead>
              <tr>
                {rowSelection && (
                  <th style={{ width: 48 }} className="row-selection">
                    <Checkbox
                      name="select-all"
                      value="select-all"
                      onClick={handleSelectAll}
                      isDisabled={data.length === 0}
                      isChecked={selectAll.checked}
                      isIndeterminate={selectAll.indeterminate}
                    />
                  </th>
                )}
                {columns.map((column: IColumn) => (
                  <th
                    key={column.key}
                    onClick={column.sort ? requestSort(column) : () => {}}
                    style={{
                      width: column.width,
                      backgroundColor: column.bg,
                      textAlign: column.align,
                      padding: column.padding,
                    }}
                  >
                    {column.title}
                    {column.sort && (
                      <span className="sort">{generateSortIcon(column, sortConfig)}</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {emptyData ? (
              <tr>
                {rowSelection ? (
                  <td
                    colSpan={colSpanLength}
                    style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}
                  >
                    <EmptyBlockStyled>{emptyData}</EmptyBlockStyled>
                  </td>
                ) : (
                  <td
                    colSpan={columns.length}
                    style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}
                  >
                    <EmptyBlockStyled>{emptyData}</EmptyBlockStyled>
                  </td>
                )}
              </tr>
            ) : isLoading ? (
              Array.from(new Array(skeletonData), (i) => (
                <tr key={i}>
                  {rowSelection && (
                    <td className="row-selection">
                      <Skeleton width="100%" height="24px" />
                    </td>
                  )}
                  {columns.map((col: IColumn, colIndex: number) => {
                    return (
                      <td
                        key={colIndex}
                        rowSpan={col.rowSpan}
                        colSpan={col.rowSpan}
                        style={{ padding: col.padding }}
                      >
                        <Skeleton width="100%" height="24px" />
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : (
              <>
                {selectedRow.map((row: any, index: number) => (
                  <tr key={index}>
                    {rowSelection && (
                      <td className="row-selection">
                        <Checkbox
                          name="select-row"
                          value="select-row"
                          onClick={handleCheckBox(index)}
                          isChecked={selectedRow[index].checked}
                          isIndeterminate={selectedRow[index].indeterminate}
                          isDisabled={selectedRow[index].disabled}
                        />
                      </td>
                    )}
                    {columns.map((col: IColumn, colIndex: number) => {
                      let renderData: ColumnRender;
                      switch (typeof col.render) {
                        case 'undefined':
                          renderData = row[col.dataIndex];
                          break;
                        case 'function':
                          renderData = col.render(row[col.dataIndex], row, index);
                          break;
                        default:
                          renderData = col.render;
                          break;
                      }

                      return (
                        <td
                          key={colIndex}
                          rowSpan={col.rowSpan}
                          colSpan={col.rowSpan}
                          style={{ padding: col.padding }}
                        >
                          {renderData}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </TableStyled>
      </TableScroll>
      {isPagination && !emptyData && (
        <PaginationStyled>
          <ShowItem>
            <span>Show items per page</span>
            <Select defaultValue={meta.pageSize} onChange={handlePageSizeChange}>
              {options?.map((item: any, index: number) => {
                return (
                  <Option value={item.value} key={index}>
                    {item.value}
                  </Option>
                );
              })}
            </Select>
          </ShowItem>
          <RecordInfo>{recordsInfoText}</RecordInfo>
          <Pagination>
            <PaginationTotal>
              <Input
                type="number"
                value={pageInput}
                onChange={handleChangePage}
                onKeyPress={handlePressEnterPageInput}
                min={1}
                max={meta.totalPages}
              />
              <span>of {meta.totalPages} pages</span>
            </PaginationTotal>
            <Button icon="angle-left" onClick={handlePrev} isDisabled={meta.page === 1} />
            <Button
              icon="angle-right"
              onClick={handleNext}
              isDisabled={meta.page === meta.totalPages}
            />
          </Pagination>
        </PaginationStyled>
      )}
    </TableWrapper>
  );
};

export default Table;
