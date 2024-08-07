import { React, useRef } from 'react'
import Editor from '@monaco-editor/react'
import { Box } from '@chakra-ui/react';
import {CODE_SNIPPETS} from "../../constants"

export default function adminCodeEditor(props) {
    const editorRef = useRef();

    const onMount = (ref) => {
        editorRef.current = ref;
        ref.focus();
        ref.updateOptions({ readOnly: true })
    }
    return (
        <div>
            <Box grid grid-cols-12>
                <Editor height="50vh"
                    theme='vs-dark'
                    language={props.lang}
                    value={CODE_SNIPPETS[props.lang]}
                    onMount={onMount} />
            </Box>
        </div>
    )
}
