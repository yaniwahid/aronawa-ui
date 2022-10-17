import { Global } from '@emotion/react';
import { default as ModalComponent } from 'rc-dialog';
import React, { FC } from 'react';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import { ModalStyled } from './Modal.styles';
import { IModal } from './Modal.types';

const Modal: FC<IModal> = ({
  isOpen,
  title,
  onOk,
  okText = 'Submit',
  okColor = 'approval',
  okVariant = 'solid',
  onClose,
  cancelText = 'Cancel',
  cancelColor = 'primary',
  cancelVariant = 'ghost',
  isLoading,
  isDisabled,
  isNoFooter,
  children,
  size = 'md',
  variant = 'clean',
  isCloseable = true,
  ...props
}) => {
  const classSize = `aronawa-modal-${size}`;
  const classVariant = `aronawa-modal-${variant}`;
  const classTitle = !title ? `aronawa-modal-no-title` : '';
  const classFooter = isNoFooter ? `aronawa-modal-no-footer` : '';
  return (
    <>
      <Global styles={ModalStyled} />
      <ModalComponent
        visible={isOpen}
        animation="zoom"
        maskAnimation="fade"
        onClose={onClose}
        title={title}
        closeIcon={<Icon name="cross" size={24} color="#7c8187" />}
        closable={isCloseable}
        prefixCls="aronawa-modal"
        className={`${classSize} ${classVariant} ${classTitle} ${classFooter}`}
        footer={
          isNoFooter ? null : (
            <>
              <Button
                onClick={onClose}
                color={cancelColor}
                variant={cancelVariant}
                isDisabled={isDisabled}
              >
                {cancelText}
              </Button>
              <Button
                color={okColor}
                ml="2"
                onClick={onOk}
                isDisabled={isDisabled}
                isLoading={isLoading}
                variant={okVariant}
              >
                {okText}
              </Button>
            </>
          )
        }
        {...props}
      >
        {children}
      </ModalComponent>
    </>
  );
};

export default Modal;
