import React, { FC, useEffect, useState } from 'react';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Select, { Option } from '../../atoms/Select';
import { Dot, InputWrapper, PageOf, Wrapper } from './Pagination.styles';
import { IPagination } from './Pagination.types';

const Pagination: FC<IPagination> = ({
  defaultCurrent = 1,
  total,
  pageSize = 10,
  showPageSize = 3,
  onChange,
  variant = 'default',
  teid = 'pagination',
  ...props
}) => {
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(defaultCurrent);
  const [options, setOptions] = useState<any>([
    {
      value: 1,
    },
  ]);
  const totalPage = Math.ceil(total / pageSize);
  const margin = Math.floor(showPageSize / 2);

  useEffect(() => {
    setPages(new Array(totalPage).fill(null).map((_, index) => index + 1));
  }, [total, pageSize]);

  useEffect(() => {
    const newOptions: any = pages.map((item) => {
      return {
        value: item,
      };
    });
    setOptions([...newOptions]);
  }, [pages]);

  useEffect(() => {
    setCurrentPage(defaultCurrent);
  }, [defaultCurrent]);

  const handleClick = (page: number) => {
    setCurrentPage(page);
    onChange && onChange(page, totalPage);
  };

  const handlePrev = () => {
    const value = currentPage - 1;
    setCurrentPage(value);
    onChange && onChange(value, totalPage);
  };

  const handleNext = () => {
    const value = currentPage + 1;
    setCurrentPage(value);
    onChange && onChange(value, totalPage);
  };

  const pageItems = pages.map((item) => {
    let marginLeft = currentPage <= margin ? 1 : currentPage - margin;
    if (currentPage > pages.length - margin) {
      marginLeft = pages.length - margin * 2;
    }

    const marginRight = marginLeft + showPageSize;

    if (item >= marginLeft && item < marginRight) {
      return (
        <Button
          key={item}
          color={currentPage === item ? 'primary' : 'neutral'}
          onClick={() => handleClick(item)}
        >
          {item}
        </Button>
      );
    }
  });

  const FirstPage = () => {
    if (currentPage > margin + 1 && currentPage != showPageSize) {
      return (
        <>
          <Button color="neutral" onClick={() => handleClick(1)} data-testid="first-page-button">
            1
          </Button>
          <Dot>
            <Icon name="ellipsis-h" />
          </Dot>
        </>
      );
    }
  };

  const LastPage = () => {
    if (showPageSize < Math.round(total / pageSize) && currentPage < pages.length - margin) {
      return (
        <>
          <Dot>
            <Icon name="ellipsis-h" />
          </Dot>
          <Button
            color="neutral"
            onClick={() => handleClick(pages.length)}
            data-testid="last-page-button"
          >
            {pages.length}
          </Button>
        </>
      );
    }
  };

  const handleChange = (value: any) => {
    setCurrentPage(Number(value));
    onChange && onChange(Number(value), totalPage);
  };

  return (
    <Wrapper {...props} data-testid={teid}>
      {variant === 'withSelect' && (
        <InputWrapper>
          <Select defaultValue={currentPage} onChange={handleChange}>
            {options?.map((item: any) => {
              return <Option value={item.value}>{item.value}</Option>;
            })}
          </Select>
          <PageOf>of {totalPage} pages</PageOf>
        </InputWrapper>
      )}
      <Button
        icon="angle-left"
        onClick={handlePrev}
        isDisabled={currentPage === 1}
        data-testid="prev-button"
      />
      {variant === 'default' && (
        <>
          {FirstPage()}
          {pageItems}
          {LastPage()}
        </>
      )}
      <Button
        icon="angle-right"
        onClick={handleNext}
        isDisabled={currentPage === pages.length}
        data-testid="next-button"
      />
    </Wrapper>
  );
};

export default Pagination;
