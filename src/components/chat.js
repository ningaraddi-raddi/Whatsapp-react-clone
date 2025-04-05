import React, { Component } from 'react';
import firebase from 'firebase';

class Chat extends Component {
    state = {
        chatHistory: {}
    };

    loadChatHistory() {
        return Object.keys(this.state.chatHistory).map((key) => {
            const msg = this.state.chatHistory[key];
            const isSender = msg.sender === localStorage.getItem('user_id');
            const isRelevant =
                (msg.sender === localStorage.getItem('user_id') && msg.reciever === this.props.uuid) ||
                (msg.sender === this.props.uuid && msg.reciever === localStorage.getItem('user_id'));

            if (isRelevant) {
                return (
                    <div
                        key={key}
                        className={`d-flex ${isSender ? 'justify-content-end' : 'justify-content-start'} mb-2 px-2`}
                    >
                        <div
                            style={{
                                backgroundColor: isSender ? '#dcf8c6' : '#fff',
                                borderRadius: isSender ? '10px 0px 10px 10px' : '0px 10px 10px 10px',
                                padding: '10px 12px',
                                maxWidth: '60%',
                                fontSize: 16,
                                boxShadow: '0px 1px 3px rgba(0,0,0,0.1)',
                                wordWrap: 'break-word',
                                position: 'relative',
                                transition: 'all 0.3s ease-in-out'
                            }}
                        >
                            <div>{msg.text}</div>
                            {msg.timestamp && (
                                <div
                                    style={{
                                        fontSize: 10,
                                        color: '#999',
                                        marginTop: 4,
                                        textAlign: 'right'
                                    }}
                                >
                                    {new Date(msg.timestamp).toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                );
            }
            return null;
        });
    }

    componentDidMount() {
        firebase
            .database()
            .ref('messages/')
            .on('value', (snapshot) => {
                this.setState({ chatHistory: snapshot.val() }, () => {
                    setTimeout(() => {
                        const chatBox = document.getElementById('chat-box');
                        if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
                    }, 100);
                });
            });
    }

    sendMessage() {
        const messageText = document.querySelector('#messageText').value.trim();
        if (messageText === '') return;

        const reciever = this.props.uuid;
        const database = firebase.database();
        const timestamp = firebase.database.ServerValue.TIMESTAMP;

        const messageData = {
            sender: localStorage.getItem('user_id'),
            reciever,
            text: messageText,
            timestamp
        };

        database.ref('messages/').push().set(messageData);

        database.ref(`users/${localStorage.getItem('user_id')}/recentChats/${reciever}`).update({
            text: messageText,
            timestamp
        });

        database.ref(`users/${reciever}/recentChats/${localStorage.getItem('user_id')}`).update({
            text: messageText,
            timestamp
        });

        document.querySelector('#messageText').value = '';
    }

    render() {
        return (
            <div className='row'>
                {/* Header */}
                <div
                    className='col-12'
                    style={{
                        height: '50px',
                        backgroundColor: 'green',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 10px',
                        color: '#fff'
                    }}
                >
                    <img
                        onClick={() => this.onIconclick()}
                        src={this.props.dp}
                        className='rounded-circle'
                        style={{ width: 30, height: 30 }}
                        alt='dp'
                    />
                    <span className='ml-2'>{this.props.name}</span>
                </div>

                {/* Chat Body */}
                <div
                    className='col-12'
                    id='chat-box'
                    style={{
                        height: '600px',
                        overflowY: 'scroll',
                        backgroundColor: '#ece5dd',
                        paddingTop: '10px',
                        backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')`
                    }}
                >
                    {this.loadChatHistory()}
                </div>

                {/* Footer Input */}
                <div
                    className='col-12 d-flex align-items-center p-2'
                    style={{ backgroundColor: '#f0f0f0' }}
                >
                    <textarea
                        id='messageText'
                        rows='1'
                        className='form-control mr-2'
                        placeholder='Type a message'
                        style={{ resize: 'none' }}
                    ></textarea>
                    <button
                        onClick={this.sendMessage.bind(this)}
                        className='btn btn-success'
                    >
                        Send
                    </button>
                </div>
            </div>
        );
    }
}

export default Chat;
