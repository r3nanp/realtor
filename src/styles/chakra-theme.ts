import { extendTheme } from '@chakra-ui/react'

export const customTheme = {
  fonts: {
    body: 'Roboto',
    heading: 'Poppins'
  }
}

export const theme = extendTheme(customTheme)
