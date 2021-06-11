import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background:  0% 0% / 100% 100% no-repeat fixed, linear-gradient(to top, rgb(21, 30, 49), rgb(31, 43, 70)) rgb(21, 30, 49);

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
