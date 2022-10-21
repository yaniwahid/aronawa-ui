import React, { FC } from 'react';
import Button from '../../atoms/Button';
import Container from '../../atoms/Grid/Container';
import Input from '../../atoms/Input';
import {
  Contact,
  FormStyled,
  Information,
  InformationGrid,
  InformationStyled,
  Promo,
} from './InformationContactUs.styles';
import { IInformationContactUs } from './InformationContactUs.types';

const InformationContactUs: FC<IInformationContactUs> = ({
  informationContactUsTextColor = '#fff',
  informationContactUsBackground = '#104D97',
  separatorLineColor = '#5F9CE2',
  informationTitle,
  informationContent,
  contactUsTitle,
  namePlaceholder,
  phoneNumberPlaceholder,
  emailPlaceholder,
  buttonSendText,
  buttonSendTextColor = '#121212',
  buttonSendBackground = '#FFCA04',
  sendEmailTo,
  subjectEmail,
  promoText,
  promoLink,
  promoTextColor = '#fff',
  promoBackgrond = '#1984FB',
}) => {
  return (
    <InformationStyled
      background={informationContactUsBackground}
      color={informationContactUsTextColor}
    >
      <Container>
        <InformationGrid>
          <Information>
            <h4>{informationTitle}</h4>
            <p>{informationContent}</p>
          </Information>
          <Contact background={separatorLineColor}>
            <h4>{contactUsTitle}</h4>
            <FormStyled background={buttonSendBackground} color={buttonSendTextColor}>
              <Input placeholder={namePlaceholder} />
              <Input placeholder={emailPlaceholder} />
              <Input placeholder={phoneNumberPlaceholder} leftAddon="+62" />
              <Button>{buttonSendText}</Button>
            </FormStyled>
          </Contact>
        </InformationGrid>
        <Promo background={promoBackgrond} color={promoTextColor}>
          <Button size="xl" href={promoLink} isFullWidth>
            {promoText}
          </Button>
        </Promo>
      </Container>
    </InformationStyled>
  );
};

export default InformationContactUs;
