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
import { IForm, IFormItem } from './Form.types';

export const FormItem: FC<IFormItem> = ({
  label,
  help,
  extra,
  children,
  isRequired,
  isInvalid,
  invalidText,
  formWidth,
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
        <Content>{children}</Content>
        {additionalNode()}
      </ContentWrapper>
    </FormItemStyled>
  );
};

export const FormAction: FC = ({ children }) => {
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
