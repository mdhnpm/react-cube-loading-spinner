import styled from "styled-components";

interface CssVariablesProps {
  mainColor: string;
  secondaryColor: string;
  spinnerWidth: string;
  spinnerSpeed: string;
}

export const CssVariables = styled.div<CssVariablesProps>`
  --cube-main: ${(props) => props.mainColor};
  --cube-secondary: ${(props) => props.secondaryColor};
  --spinner-width: ${(props) => props.spinnerWidth};
  --spinner-height: calc(var(--spinner-width) / 3);
  --cube-offset-x: calc(var(--spinner-width) / 3);
  --cube-offset-y: calc(var(--spinner-width) / 6);
  --cube-face-offset-z: calc(var(--spinner-width) / 2);
  --spinner-container-size: var(--spinner-width);
  --spinner-perspective: calc(var(--spinner-width) * 500);
  --spinner-speed: ${(props) => props.spinnerSpeed};
`;
