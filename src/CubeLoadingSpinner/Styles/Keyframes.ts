import { keyframes } from 'styled-components';
import { transformCrossBrosersMixin } from './Mixins';

export const spinner3dMoveKeyframes = keyframes`
  0% {
    ${transformCrossBrosersMixin('rotateY(0deg)')}
  }

  100% {
    ${transformCrossBrosersMixin('rotateY(-180deg)')}
  }
`;

export const spinner3dTopOuterMoveKeyframes = keyframes`
  0% {
    ${transformCrossBrosersMixin('translateX(var(--cube-offset-x)) translateY(-(var(--cube-offset-y)))')}
  }

  40% {
    ${transformCrossBrosersMixin('translateX(0) translateY(0)')}
  }

  60% {
    ${transformCrossBrosersMixin('translateX(0) translateY(0)')}
  }

  100% {
    ${transformCrossBrosersMixin('translateX(var(--cube-offset-x)) translateY(-(var(--cube-offset-y)))')}
  }
`;

export const spinnerBottomOuterMove = keyframes`
  0% {
    ${transformCrossBrosersMixin('translateX(-(var(--cube-offset-x))) translateY(var(--cube-offset-y))')}
  }

  40% {
    ${transformCrossBrosersMixin('translateX(0) translateY(0)')}
  }

  60% {
    ${transformCrossBrosersMixin('translateX(0) translateY(0)')}
  }

  100% {
    ${transformCrossBrosersMixin('translateX(-(var(--cube-offset-x))) translateY(var(--cube-offset-y))')}
  }
`;
