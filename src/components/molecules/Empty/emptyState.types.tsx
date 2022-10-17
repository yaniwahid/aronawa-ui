export interface IEmpty
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'title'> {
  imgUrl?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  teid?: string;
  width?: string | number;
}
