import { Box, Button, useToast, Text } from '@chakra-ui/react'
import {React,useState} from 'react'
import { executeCode } from './api';

export default function output({ editorRef, language }) {
    const [output,setOutput] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const toast = useToast()
    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return

        try {
            setIsLoading(true);
            const {run:result} = await executeCode(language,sourceCode);
            setOutput(result.output.split('\n'))
            result.stderr ? setIsError(true) : setIsError(false)
        }
        catch (error) {
            toast({
                title : "An error occurred",
                description: error.message || "Unable to run code",
                status : "error",
                duration:5000,
                isClosable: true
            });
            console.log(error);
        }
        finally{
            setIsLoading(false)
        }
    }
    return (
        <Box w='50%'>
            <Button mt = {6} variant='outline' colorScheme='green' mb={4} onClick={runCode} isLoading= {isLoading}>
                Run
            </Button>
            <Box height={'max-content'} p={2} border='1px solid' borderRadius={4} borderColor='#333' color={
                isError? "red.500" : "grey.900"
            }>
                {
                    output? output.map((line,i) => <Text key = {i} >{line}</Text> )
                     : 'Click "Run" to see the output here'
                }
            </Box>
        </Box>
    )
}
