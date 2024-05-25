import { React, useRef } from 'react'
import Editor from '@monaco-editor/react'
import { Box, HStack } from '@chakra-ui/react';

export default function adminCodeEditor(props) {
    const editorRef = useRef();

    const onMount = (ref) => {
        editorRef.current = ref;
        ref.focus();
        ref.updateOptions({readOnly : true})
    }
    return (
        <div>
            <HStack spacing={4}>
                <Box w='50%'>
                    <Box>
                        <Editor height= "50vh"
                            theme='vs-dark'
                            language={props.lang}
                            value={props.code}
                            onMount={onMount} />
                    </Box>
                </Box>
            </HStack>
        </div>
    )
}
