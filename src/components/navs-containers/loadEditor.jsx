import React from 'react'
import Editor from "./editor"
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import theme from '../theme'
import Navbar from "./navbar"

export default function loadEditor() {
  return (
    <div>
    <Navbar />
      <ChakraProvider theme={theme}>
        <Box minH="100vh" bg="#0f0a19" color="gray.500" px={10} py={8} >
          <Editor />
        </Box>
      </ChakraProvider>
    </div>
  )
}
