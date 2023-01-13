import React, { FC } from 'react';
import {
  Additional,
  Content,
  ContentWrapper,
  Extra,
  FormActionStyled,
  FormItemStyled,
  FormStyled,
  Help,
  InvalidText,
  Label,
  Req,
} from './Form.styles';
import { IForm, IFormAction, IFormItem } from './Form.types';

export const FormItem: FC<IFormItem> = ({
  label,
  help,
  extra,
  children,
  isRequired,
  isInvalid,
  invalidText,
  formWidth,
  isColumn,
  teid = 'form-item',
}) => {
  const additionalNode = () => {
    if (extra || help || invalidText) {
      return (
        <Additional>
          <div>
            {isInvalid && invalidText && <InvalidText>{invalidText}</InvalidText>}
            {extra && <Extra>{extra}</Extra>}
          </div>
          {help && <Help>{help}</Help>}
        </Additional>
      );
    }
    return null;
  };

  return (
    <FormItemStyled formWidth={formWidth} className="form-item" data-testid={teid}>
      {label && (
        <Label className="label-item">
          {label} {isRequired && <Req>*</Req>}
        </Label>
      )}
      <ContentWrapper className="children-item">
        <Content isColumn={isColumn}>{children}</Content>
        {additionalNode()}
      </ContentWrapper>
    </FormItemStyled>
  );
};

export const FormAction: FC<IFormAction> = ({ teid = 'form-action', children }) => {
  return (
    <FormActionStyled className="form-action" data-testid={teid}>
      {children}
    </FormActionStyled>
  );
};

const Form: FC<IForm> = ({
  layout = 'horizontal',
  children,
  formWidth = '200px 386px',
  teid = 'from',
  gap,
  ...props
}) => {
  return (
    <FormStyled data-testid={teid} layout={layout} formWidth={formWidth} gap={gap} {...props}>
      {children}
    </FormStyled>
  );
};

export default Form;
