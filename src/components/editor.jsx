import { React, useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import { Box, HStack } from '@chakra-ui/react';
import LanguageSelector from './languageSelector';
import { CODE_SNIPPETS } from '../constants';
import Output from './output'

export default function editor() {
    const [code, setCode] = useState(CODE_SNIPPETS["javascript"]);
    const [language, setLanguage] = useState('javascript');
    const editorRef = useRef();

    const onMount = (ref) => {
        editorRef.current = ref;
        ref.focus();
    }
    const onSelect = (language) => {
        setLanguage(language)
        setCode(CODE_SNIPPETS[language])
    }
    return (
        <div>
            <HStack spacing={4}>
                <Box w='50%'>
                    <LanguageSelector language={language} onSelect={onSelect} />
                    <Box>
                        <Editor height="75vh"
                            theme='vs-dark'
                            language={language}
                            value={code}
                            onChange={(e) => setCode(e.target)}
                            onMount={onMount} />
                    </Box>
                </Box>
                <Output editorRef = {editorRef} language = {language} />
            </HStack>
        </div>
    )
}
