import React, { FC, useState } from 'react';
import {
  Bar,
  Content,
  TabsItemStyled,
  TabsList,
  TabsStyled,
  Title,
  TitleWrapper,
} from './Tabs.styles';
import { ITabItem, ITabs } from './Tabs.types';

export const TabItem: FC<ITabItem> = ({ children }) => {
  return <TabsItemStyled>{children}</TabsItemStyled>;
};

const Tabs: FC<ITabs> = ({ defaultActive = 0, children, onChange, ...props }) => {
  const [selectedStatus, setSelectedStatus] = useState<number>(defaultActive || 0);

  const handleChange = (newValue: number) => {
    setSelectedStatus(newValue);
    onChange && onChange(newValue);
  };

  const contentTab: any = children;

  const contentRender = () => {
    if (contentTab[selectedStatus]) {
      return React.cloneElement(contentTab[selectedStatus]);
    }
    return children;
  };

  return (
    <TabsStyled {...props}>
      <TabsList>
        {React.Children.map(children, (item: any, index) => {
          return (
            <TitleWrapper key={index} onClick={() => handleChange(index)}>
              <Title isSelected={index == selectedStatus}>{item.props.title}</Title>
              <Bar isSelected={index == selectedStatus} />
            </TitleWrapper>
          );
        })}
      </TabsList>
      <Content>{contentRender()}</Content>
    </TabsStyled>
  );
};

export default Tabs;
