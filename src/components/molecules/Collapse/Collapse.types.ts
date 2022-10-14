export interface ICollapseItem {
  title: React.ReactNode;
  defaultShow?: boolean;
  isDisabled?: boolean;
  isShow?: boolean;
}

export interface ICollapse extends React.HTMLAttributes<HTMLDivElement> {
  teid?: string;
}

export interface IStyle {
  isShow?: boolean;
  isDisabled?: boolean;
}
