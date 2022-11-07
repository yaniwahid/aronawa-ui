import React, { FC, useEffect, useState } from 'react';
import { Icon } from '../../atoms';
import { Body, CollapseStyled, Content, Toggle, Wrapper } from './Collapse.styles';
import { ICollapse, ICollapseItem } from './Collapse.types';

export const CollapseItem: FC<ICollapseItem> = ({
  title,
  defaultShow,
  isDisabled,
  children,
  isShow,
  teid = 'collapse-item',
}) => {
  const [showState, setShowState] = useState(isShow);

  useEffect(() => {
    defaultShow && setShowState(defaultShow);
  }, [defaultShow]);

  const handleToggle = () => {
    setShowState(!showState);
  };

  return (
    <Wrapper className="collapse-wrapper" data-testid={teid}>
      <Toggle
        onClick={!isDisabled ? handleToggle : undefined}
        className="collapse-title"
        isShow={showState}
        isDisabled={isDisabled}
      >
        {title}
        <div className="arrow">
          <Icon name="angle-down" size={20} />
        </div>
      </Toggle>
      <Content isShow={showState}>
        <Body className="collapse-body">{children}</Body>
      </Content>
    </Wrapper>
  );
};

const Collapse: FC<ICollapse> = ({ children, teid = 'collapse', ...props }) => {
  return (
    <CollapseStyled data-testid={teid} {...props}>
      {children}
    </CollapseStyled>
  );
};

export default Collapse;
