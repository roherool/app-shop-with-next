import { createStitches } from '@stitches/react'

export const {
 config,
 styled,
 css,
 globalCss,
 keyframes,
 getCssText,
 theme,
 createTheme
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      gray100: '#E1E1E6',
      gray300: '#C4C4CC',
      gray800: '#202024',
      gray900: '#121214',

      green300: '#00B37E',
      green500: '#00875F',
    }
  }
})
