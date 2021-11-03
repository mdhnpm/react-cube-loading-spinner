import React from 'react';
import styled from 'styled-components';

interface CssVariablesProps {
  mainColor: string
}

const CssVariables = styled.div<CssVariablesProps>`
  --cube-main: ${props => props.mainColor ?? '#141b4d'};
  --cube-secondary: #00c389;
  --spinner-width: 36px;
  --spinner-height: calc(var(--spinner-width) / 3);
  --spinner-width-offset: calc(var(--spinner-width) / 3);
  --spinner-height-offset: calc(var(--spinner-width) / 6);
  --spinner-container-size: var(--spinner-width);
  --spinner-perspective: calc(var(--spinner-width) * 500);
  --animation-duration: 1.5s;
`;
