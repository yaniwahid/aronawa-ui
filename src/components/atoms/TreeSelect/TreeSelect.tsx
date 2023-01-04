import { Global } from '@emotion/react';
import { default as TreeSelectComponent } from 'rc-tree-select';
import React, { FC } from 'react';
import Icon from '../Icon';
import { TreeSelectStyled, TreeSelectWrapper } from './TreeSelect.styles';
import { ITreeSelect } from './TreeSelect.types';

const TreeSelect: FC<ITreeSelect> = ({
  isDisabled,
  children,
  width,
  isSearchable,
  teid = 'tree-select',
  ...props
}) => {
  return (
    <>
      <Global styles={TreeSelectStyled} />
      <TreeSelectWrapper
        data-testid={teid}
        {...(width && {
          style: { minWidth: width, maxWidth: width },
        })}
      >
        <TreeSelectComponent
          prefixCls="aronawa-tree-select"
          inputIcon={<Icon name={isSearchable ? 'search' : 'angle-down'} size={18} />}
          clearIcon={<Icon name="cross" size={12} />}
          disabled={isDisabled}
          treeLine
          {...(width && {
            style: { minWidth: width, maxWidth: width },
          })}
          {...props}
        >
          {children}
        </TreeSelectComponent>
      </TreeSelectWrapper>
    </>
  );
};

export default TreeSelect;
