import { React, useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import { Box } from '@chakra-ui/react';
import LanguageSelector from './languageSelector';
import { CODE_SNIPPETS } from '../constants';

export default function editor() {
    const [code, setCode] = useState('');
    const [language,setLanguage] = useState('javascript');
    const editorRef = useRef();
    const onMount = (ref) => {
        editorRef.current = ref;
        ref.focus();
    }
    const onSelect = (langauge)=>{
        setLanguage(langauge)
        setCode(CODE_SNIPPETS[langauge])
    }
    return (
        <div>
        <LanguageSelector language = {language} onSelect = {onSelect} />
            <Box>
                <Editor height="80vh"
                    theme='vs-dark'
                    language={language}
                    defaultValue="// Write your code here"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onMount={onMount} />
            </Box>
        </div>
    )
}
