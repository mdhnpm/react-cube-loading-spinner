# Cube Loading Spinner for React

Super cool configurable cube loading spinner for react. There are 4 configurable options.

| props          | purpose                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------ |
| mainColor      | Main color of the cube. It takes any CSS color values (color name, hex, rgb).                    |
| secondaryColor | Secondary color of the cube                                                                      |
| spinnerWidth   | Width of the spinner (e.g. 28px). Height will be determined according to the width automatically |
| spinnerSpeed   | Speed of the spinner rotation (e.g. 1.5s).                                                       |

## Usage

Import the module.

```tsx
import { CubeLoadingSpinner } from "@mdhnpm/cube-loading-spinner";
```

We can configure the spinner.

```tsx
<CubeLoadingSpinner
  mainColor="black"
  secondaryColor="gray"
  spinnerWidth="28px"
  spinnerSpeed="1.5s"
/>
```

The props are optional. If you don't pass any prop, you can get a default spinner.

```tsx
<CubeLoadingSpinner />
```

And this is what it looks like...

<img src="./gif/spinner.gif" alt="spinner gif"/>

Enjoy 🤟💀🤟
