import { ReactNode } from 'react';

export type ColumnRenderFunction = (
  fieldValue: any,
  rowValues?: any,
  rowIndex?: number,
) => JSX.Element;
export type ColumnRender = undefined | null | string | number | JSX.Element | ColumnRenderFunction;

export type SortDirection = '' | 'ascending' | 'descending';
export interface ISortConfig {
  key: string;
  direction: SortDirection;
}

export interface IColumn {
  title: React.ReactNode;
  dataIndex: string;
  key?: string | number;
  sort?: boolean;
  sortDirection?: SortDirection;
  render?: ColumnRender;
  width?: number | string;
  bg?: string;
  align?: 'left' | 'center' | 'right';
  rowSpan?: number;
  colSpan?: number;
  padding?: number;
}

export interface ITable extends React.HTMLAttributes<HTMLDivElement> {
  columns: IColumn[];
  data: any[];
  meta: any;
  sortFunction?: (data: object) => void;
  changePage: (page: number) => void;
  /**
   * @deprecated use `changePageLimit` instead
   *
   * `changePageSize` has incorrect type
   *
   * when both exists, only `changePageLimit` will be executed
   */
  changePageSize?: (pageSize: number) => void;
  changePageLimit?: (limit: any) => void;
  rowSelection?: boolean;
  rowSelectionOnChange?: (selectedRow: any[], index?: number) => void;
  layout?: 'top' | 'middle' | 'bottom';
  isPagination?: boolean;
  teid?: string;
  emptyData?: ReactNode;
  isStipred?: boolean;
}

export interface IStyle {
  layout?: 'top' | 'middle' | 'bottom';
  isPagination?: boolean;
  isStipred?: boolean;
}
