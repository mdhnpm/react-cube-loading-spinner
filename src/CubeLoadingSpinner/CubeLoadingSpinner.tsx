import React from "react";
import styled from "styled-components";
import { CssVariables } from "./Styles/CssVariables";
import { Spinner3dFaceGroup } from "./Spinner3dFaceGroup";
import {
  spinnerAnimationMixin,
  transformCrossBrosersMixin,
} from "./Styles/Mixins";
import {
  spinner3dTopOuterMoveKeyframes,
  spinnerBottomOuterMove,
} from "./Styles/Keyframes";

const Spinner3dContainer = styled.div`
  width: var(--spinner-width);
  margin: auto;
`;

const Spinner3dTopOuter = styled.div`
  ${transformCrossBrosersMixin(
    "translateX(var(--cube-offset-x)) translateY(calc(var(--cube-offset-y) * -1))"
  )};
  ${spinnerAnimationMixin(spinner3dTopOuterMoveKeyframes)}
`;

const Spinner3dBottomOuter = styled.div`
  ${transformCrossBrosersMixin(
    "translateX(calc(var(--cube-offset-x)) * -1) translateY(var(--cube-offset-y))"
  )};
  ${spinnerAnimationMixin(spinnerBottomOuterMove)}
`;

interface CubeLoadingSpinnerProps {
  mainColor?: string;
  secondaryColor?: string;
  spinnerWidth?: string;
  spinnerSpeed?: string;
}
export const CubeLoadingSpinner: React.VFC<CubeLoadingSpinnerProps> = ({
  mainColor = "#141b4d",
  secondaryColor = "#00c389",
  // 32 looks wired, 30 and 34 works...
  spinnerWidth = "30px",
  spinnerSpeed = "1.5s",
}) => (
  <CssVariables
    mainColor={mainColor}
    secondaryColor={secondaryColor}
    spinnerWidth={spinnerWidth}
    spinnerSpeed={spinnerSpeed}
  >
    <Spinner3dContainer>
      <Spinner3dTopOuter>
        <Spinner3dFaceGroup />
      </Spinner3dTopOuter>
      <div>
        <Spinner3dFaceGroup />
      </div>
      <Spinner3dBottomOuter>
        <Spinner3dFaceGroup />
      </Spinner3dBottomOuter>
    </Spinner3dContainer>
  </CssVariables>
);
