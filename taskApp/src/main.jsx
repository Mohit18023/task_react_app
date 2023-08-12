import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ChakraProvider, extendTheme, ColorModeScript} from '@chakra-ui/react'


const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false, // Disable automatic color mode based on OS preference
  }
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
