import { css } from 'styled-components'
import { Keyframes } from 'styled-components/dist/types'

export const transformCrossBrosersMixin = (transformProperty: string) => css`
  -webkit-transform: ${transformProperty};
  -ms-transform: ${transformProperty};
  transform: ${transformProperty};
`

export const spinnerAnimationMixin = (animationName: Keyframes) => css`
  animation-name: ${animationName};
  animation-duration: var(--spinner-speed);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`
