import React, { FC } from 'react';
import Icon from '../../atoms/Icon';
import {
  Circle,
  Content,
  StepsItemStyled,
  StepsList,
  StepsStyled,
  Title,
  TitleContent,
  TitleWrapper,
} from './Steps.styles';
import { IStepItem, ISteps } from './Steps.types';

export const StepItem: FC<IStepItem> = ({ children }) => {
  return <StepsItemStyled>{children}</StepsItemStyled>;
};

const Steps: FC<ISteps> = ({ defaultActive = 0, children, ...props }) => {
  const contentTab: any = children;

  const contentRender = () => {
    if (contentTab[defaultActive]) {
      return React.cloneElement(contentTab[defaultActive]);
    }
    return children;
  };

  return (
    <StepsStyled {...props}>
      <StepsList>
        {React.Children.map(children, (item: any, index) => {
          let iconName: string = index < defaultActive ? 'check' : 'record-audio';

          const isFailed = item.props?.isFailed || false;

          return (
            <TitleWrapper
              key={index}
              isSelected={index === defaultActive}
              isDone={index < defaultActive}
              isFailed={isFailed}
            >
              <Title
                isSelected={index === defaultActive}
                isDone={index < defaultActive}
                isFailed={isFailed}
              >
                <Circle
                  isSelected={index === defaultActive}
                  isDone={index < defaultActive}
                  isFailed={isFailed}
                >
                  {isFailed ? (
                    <Icon name="exclamation-circle" size={20} />
                  ) : (
                    <Icon name={iconName} />
                  )}
                </Circle>
                <TitleContent>
                  <p>{item.props.title}</p>
                  <small>{item.props.description}</small>
                </TitleContent>
              </Title>
            </TitleWrapper>
          );
        })}
      </StepsList>
      <Content>{contentRender()}</Content>
    </StepsStyled>
  );
};

export default Steps;
