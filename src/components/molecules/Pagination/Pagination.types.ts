type TVariantPagination = 'default' | 'withoutNumber' | 'withSelect';

export interface IPagination extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultCurrent: number;
  pageSize: number;
  total: number;
  showPageSize: number;
  onChange?: (page: number, totalPage: number) => void;
  variant?: TVariantPagination;
  teid?: string;
}
