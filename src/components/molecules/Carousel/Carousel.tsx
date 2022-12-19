import React, { FC } from 'react';
import Slider from 'react-slick';
import Icon from '../../atoms/Icon';
import { Arrow, CarouselStyled } from './Carousel.styles';
import { ICarousel } from './Carousel.types';

const Carousel: FC<ICarousel> = ({
  images,
  withCustomArrow,
  children,
  getRef,
  onClickImage,
  teid = 'carousel',
  width,
  height,
  ...props
}) => {
  const handleRef = (slider: any) => {
    getRef && getRef(slider);
  };

  const handleClickImage = (title: string) => {
    onClickImage && onClickImage(title);
  };

  const slides = () => {
    if (images) {
      return images.map((item, index) => {
        const newTab = () => {
          if (item.newTab) {
            return '_blank';
          } else {
            return undefined;
          }
        };

        return (
          <a
            key={index}
            rel="noopener"
            href={item.link}
            target={newTab()}
            onClick={() => handleClickImage(item?.imageAlt || item?.imageUrl)}
          >
            <img src={item.imageUrl} alt={item.imageAlt} width={width} height={height} />
          </a>
        );
      });
    }

    return children;
  };

  const NextArrow = (nextProps: any) => {
    const { className, onClick } = nextProps;
    return (
      <Arrow className={className} onClick={onClick} aria-label="Next">
        <Icon name="angle-right" color="#121212" size={24} />
      </Arrow>
    );
  };

  const PrevArrow = (prevProps: any) => {
    const { className, onClick } = prevProps;
    return (
      <Arrow className={className} onClick={onClick} aria-label="Prev">
        <Icon name="angle-left" color="#121212" size={24} />
      </Arrow>
    );
  };

  const withNextCustomArrow = (type: 'next' | 'prev') => {
    if (withCustomArrow?.nextArrow && type === 'next') {
      return withCustomArrow.nextArrow;
    } else if (withCustomArrow?.prevArrow && type === 'prev') {
      return withCustomArrow.prevArrow;
    }
    return undefined;
  };

  return (
    <CarouselStyled>
      <Slider
        ref={handleRef}
        data-testid={teid}
        nextArrow={withNextCustomArrow('next') ?? <NextArrow />}
        prevArrow={withNextCustomArrow('prev') ?? <PrevArrow />}
        {...props}
      >
        {slides()}
      </Slider>
    </CarouselStyled>
  );
};

export default Carousel;
