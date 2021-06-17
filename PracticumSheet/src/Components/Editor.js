import React, { useEffect, useRef } from 'react'
import { basicSetup, EditorState, EditorView } from '@codemirror/basic-setup';
// import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import {myTheme, myHighlightStyle } from './Style';
import { python } from '@codemirror/lang-python';

export default function Editor(props) {
    
    const {
        setView,
        language,
        content
    } = props;
    
    const editor = useRef();
    
    useEffect(() => {
        let lang;
        if (language === "python") {
            lang = python()
        }
        else if (language === "java") {
            lang = java()
        }

        const state = EditorState.create({
            doc: content,
            extensions: [
                basicSetup, 
                lang,
                myTheme,
                myHighlightStyle
            ],
        });

        const view = new EditorView({
            state: state,
            parent: editor.current
        });

        setView(view);
                
        return () => {
            view.destroy();
            setView(null);
        }
    }, [language, content, setView])

    return (
        <div className="editor-box" ref = {editor}></div>
    )
}
