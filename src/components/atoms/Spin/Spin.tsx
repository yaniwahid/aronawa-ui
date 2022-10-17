import React, { FC } from 'react';
import { Loading, SpinContent, SpinStyled, SpinWrapper } from './Spin.styles';
import { ISpin } from './Spin.types';

const Spin: FC<ISpin> = ({ isLoading, children }) => {
  return (
    <SpinStyled>
      {isLoading && (
        <SpinWrapper>
          <Loading>
            <span />
          </Loading>
        </SpinWrapper>
      )}
      <SpinContent isLoading={isLoading}>{children}</SpinContent>
    </SpinStyled>
  );
};

export default Spin;
