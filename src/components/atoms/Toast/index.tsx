import { Global } from '@emotion/react';
import React from 'react';
import toast from 'react-hot-toast';
import { ToastStyled } from './Toast.styles';

interface IDetailedMessage {
  field: string;
  message: object | string;
}

const renderMessageByQty = (message: string, isMultiple: boolean) =>
  isMultiple ? <li>{message}</li> : <p>{message}</p>;

const renderDetailedMessage = ({ field, message }: IDetailedMessage, isMultiple: boolean) =>
  typeof message === 'string'
    ? renderMessageByQty(`${field}: ${message}`, isMultiple)
    : Object.entries(message).map((val) =>
        renderMessageByQty(`${field}.${val[0]}: ${val[1]}`, isMultiple),
      );

const renderFinalMessage = (message: string | IDetailedMessage, isMultiple: boolean) =>
  typeof message === 'string' ? <p>{message}</p> : renderDetailedMessage(message, isMultiple);

export const toastBody = (
  isSuccess: boolean,
  message: string | IDetailedMessage,
  multipleMessage?: (string | IDetailedMessage)[],
  customTitle?: string,
) => (
  <>
    <Global styles={ToastStyled} />
    <h5>{customTitle ? customTitle : isSuccess ? 'Berhasil' : 'Gagal'}</h5>
    {multipleMessage && multipleMessage.length > 0
      ? multipleMessage.map((msg: string | IDetailedMessage) => renderFinalMessage(msg, true))
      : renderFinalMessage(message, false)}
  </>
);

export { toast };
