import { SpaceProps } from 'styled-system';

export interface IBreadcrumb extends SpaceProps, React.HTMLAttributes<HTMLDivElement> {

}
export interface IBreadcrumbItem extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}
