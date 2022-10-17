import { Global } from '@emotion/react';
import { default as DrawerComponent, DrawerProps } from 'rc-drawer';
import React, { FC } from 'react';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import {
  Close,
  DrawerBody,
  DrawerFooterStyled,
  DrawerHeaderStyled,
  DrawerStyled,
  Title,
} from './Drawer.styles';
import { IDrawer } from './Drawer.types';

const Drawer: FC<IDrawer> = ({
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
  isCloseLeft,
  size = 'md',
  isCloseable = true,
  ...props
}) => {
  const Width = (size?: 'sm' | 'md' | 'lg') => {
    switch (size) {
      case 'sm':
        return 360;
      case 'md':
        return 494;
      case 'lg':
        return 600;
      default:
        return 494;
    }
  };
  const maskMotion: DrawerProps['maskMotion'] = {
    motionAppear: true,
    motionName: 'mask-motion',
    onAppearEnd: console.warn,
  };
  const motion: DrawerProps['motion'] = (placement) => ({
    motionAppear: true,
    motionName: `panel-motion-${placement}`,
  });
  const motionProps: Partial<DrawerProps> = {
    maskMotion,
    motion,
  };

  const classSize = `aronawa-drawer-${size}`;
  const classTitle = !title ? `aronawa-drawer-no-title` : '';
  const classFooter = isNoFooter ? `aronawa-drawer-no-footer` : '';
  return (
    <>
      <Global styles={DrawerStyled} />
      <DrawerComponent
        open={isOpen}
        onClose={onClose}
        prefixCls="aronawa-drawer"
        className={`${classSize} ${classTitle} ${classFooter}`}
        width={Width(size) ?? props.width}
        {...motionProps}
        {...props}
      >
        {isCloseable && (
          <Close isCloseLeft={isCloseLeft}>
            <Icon name="cross" size={24} color="#7c8187" />
          </Close>
        )}
        {title && (
          <DrawerHeaderStyled isCloseLeft={isCloseLeft} className="aronawa-drawer-header">
            <Title>{title}</Title>
          </DrawerHeaderStyled>
        )}
        <DrawerBody className="aronawa-drawer-body">{children}</DrawerBody>
        {!isNoFooter && (
          <DrawerFooterStyled className="aronawa-drawer-footer">
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
          </DrawerFooterStyled>
        )}
      </DrawerComponent>
    </>
  );
};

export default Drawer;
