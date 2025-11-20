import '../App.css';
import './ChatSendButton';

function ChatWindow(messages) {
    return (
        <div
        id='chatWindow'
        className='chat-window'
        >
        <p>{messages.length}</p>
        </div>
    )
}

export default ChatWindow;