import React from 'react';
import { Button } from '../../atoms';
import {
  Back,
  BreadcrumbWrapper,
  ChildrenWrapper,
  PageHeaderStyled,
  PageHeaderWrapper,
  SubtitleStyled,
  TitleStyled,
  TitleWrapper,
} from './PageHeader.styles';
import { IPageHeader } from './PageHeader.types';

const PageHeader: React.FC<IPageHeader> = ({ title, subtitle, breadcrumb, back, children }) => {
  const breadcrumbRender = () => {
    if (breadcrumb) {
      return <BreadcrumbWrapper>{breadcrumb}</BreadcrumbWrapper>;
    }
    return null;
  };
  return (
    <PageHeaderWrapper>
      {breadcrumbRender()}
      {back && (
        <Back>
          <Button onClick={back} variant="link" color="primary" icon="angle-left">
            Back
          </Button>
        </Back>
      )}
      <PageHeaderStyled>
        <TitleWrapper>
          {title && <TitleStyled>{title}</TitleStyled>}
          {subtitle && <SubtitleStyled>{subtitle}</SubtitleStyled>}
        </TitleWrapper>
        {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
      </PageHeaderStyled>
    </PageHeaderWrapper>
  );
};

export default PageHeader;
