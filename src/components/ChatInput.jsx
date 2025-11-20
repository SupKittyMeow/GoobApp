import { useEffect, useRef, useState } from 'react';
import '../App.css';

function ChatInput({onSend}) {
    const inputRef = useRef(null); 
    const [inputValue, setInputValue] = useState('');

    const onChange = (event) => {
        setInputValue(event.target.value)
        console.log(inputValue)
    }

    const onSubmit = () => {
        onSend();
    }

    useEffect (() => {
        const handleKeyDown = (event) => {
            const otherKeys = ['Shift', 'CapsLock', 'ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Tab', 'Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Home', 'End', 'PageUp', 'PageDown', 'Insert']
            if (event.altKey || event.ctrlKey || event.metaKey || otherKeys.includes(event.key)) return;
            if(document.activeElement !== inputRef.current) {
                inputRef.current.focus();
                inputRef.current.setSelectionRange(inputRef.current.selectionEnd, inputRef.current.selectionEnd)
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        };
    }, []);

    const onKeyDown = (event) => {
        if (event.key == 'Enter' && !event.isComposing)
        {
            onSubmit();
        }
        return;
    }
    
    return (
        <input
        type="text"
        id="chatInput"
        className='chat-input'
        placeholder="Type here..."
        ref={inputRef}
        onChange={onChange}
        onKeyDown={onKeyDown}
        />
    )
}

export default ChatInput;