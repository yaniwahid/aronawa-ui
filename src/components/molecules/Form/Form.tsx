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
    <FormItemStyled isInvalid={isInvalid} formWidth={formWidth} className="form-item">
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

export const FormAction: FC<IFormAction> = ({ children }) => {
  return <FormActionStyled className="form-action">{children}</FormActionStyled>;
};

const Form: FC<IForm> = ({
  layout = 'horizontal',
  children,
  formWidth = '200px 386px',
  teid = 'from',
  ...props
}) => {
  return (
    <FormStyled data-testid={teid} layout={layout} formWidth={formWidth} {...props}>
      {children}
    </FormStyled>
  );
};

export default Form;
