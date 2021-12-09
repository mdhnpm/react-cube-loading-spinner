import React from 'react';
import styled, { css } from 'styled-components';
import { spinnerAnimationMixin, transformCrossBrosersMixin } from './Styles/Mixins';
import { spinner3dMoveKeyframes } from './Styles/Keyframes';

const Spinner3dFaceGroupContainer = styled.div`
  ${spinnerAnimationMixin(spinner3dMoveKeyframes)};
  position: relative;
  width: var(--spinner-width);
  height: var(--spinner-height);
  transform-style: preserve-3d;
  perspective: var(--spinner-perspective);
`;

const spinner3dFaceCommonCss = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const Spinner3dFaceFront = styled.div`
 ${spinner3dFaceCommonCss}
 ${transformCrossBrosersMixin('rotateY(0deg) translateZ(var(--cube-face-offset-z))')}
  background-color: var(--cube-main);
`;

const Spinner3dFaceRight = styled.div`
  ${spinner3dFaceCommonCss}
  ${transformCrossBrosersMixin('rotateY(90deg) translateZ(var(--cube-face-offset-z))')}
  background-color: var(--cube-secondary);
`;

const Spinner3dFaceBack = styled.div`
  ${spinner3dFaceCommonCss}
  ${transformCrossBrosersMixin('rotateY(180deg) translateZ(var(--cube-face-offset-z))')}
  background-color: var(--cube-main);
`;

export const Spinner3dFaceGroup: React.VFC = () => (
  <Spinner3dFaceGroupContainer>
    <Spinner3dFaceFront />
    <Spinner3dFaceRight />
    <Spinner3dFaceBack />
  </Spinner3dFaceGroupContainer>
);
