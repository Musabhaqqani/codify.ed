import './App.css'
import Editor from './components/editor'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import theme from './components/theme'


function App() {

  return (
    <>
      <ChakraProvider theme={theme}>
        <Box minH="100vh" bg="#0f0a19" color="gray.500" px={10} py={8} >
          <Editor />
        </Box>
      </ChakraProvider>
    </>
  )
}

export default App
