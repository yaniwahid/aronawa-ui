import { Settings } from 'react-slick';

export interface ICarousel extends Settings {
  images?: {
    imageAlt: string;
    imageUrl: string;
    link?: string;
    newTab?: boolean;
  }[];
  withCustomArrow?: {
    nextArrow?: JSX.Element;
    prevArrow?: JSX.Element;
  };
  getRef?: (ref: any) => void;
  onClickImage?: (title: string) => void;
  teid?: string;
  width?: number;
  height?: number;
}
