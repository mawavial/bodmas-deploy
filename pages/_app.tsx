import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../utils/theme'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
	// eslint-disable-next-line react/react-in-jsx-scope
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>)
}
export default MyApp
