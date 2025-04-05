import React, { Component } from 'react'
import Contacts from './contacts'
import firebase from 'firebase'
import fire from './firebase_config'

import Profile from './profile'
import UsersList from './usersList'
import Chat from './chat'

class Home extends Component {
    state = {
        flag: 0,
        chatFlag: 0,
        name: "",
        dp: "",
        uuid: ""
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                this.props.history.push('/login')
            }
        });
    }

    loadChatComponent() {
        if (this.state.chatFlag === 0) {
            return (
                <div className="d-flex h-100 justify-content-center align-items-center text-muted">
                    <h4>Select a contact to start chatting</h4>
                </div>
            );
        } else {
            return <Chat name={this.state.name} dp={this.state.dp} uuid={this.state.uuid} />
        }
    }

    loadComponent() {
        switch (this.state.flag) {
            case 0:
                return <Contacts onIconclick={this.replaceComponent.bind(this)} />
            case 1:
                return <Profile onButtonClick={this.replaceComponent.bind(this)} />
            case 2:
                return <UsersList onThreadClick={this.replaceChatComponent.bind(this)} onButtonClick={this.replaceComponent.bind(this)} />
            default:
                return null
        }
    }

    replaceChatComponent(chatFlag, name, dp, uuid) {
        this.setState({ chatFlag, name, dp, uuid })
    }

    replaceComponent(flag) {
        this.setState({ flag })
    }

    render() {
        return (
            <div className='container-fluid px-4 py-3'>
                <div className='row justify-content-center'>
                    <div className='col-12'>
                        <div className='card shadow-lg border-0 rounded-4 overflow-hidden' style={{ minHeight: '80vh' }}>
                            <div className='row no-gutters'>
                                {/* Left Sidebar */}
                                <div className='col-md-4 bg-light border-end'>
                                    <div className='p-3 border-bottom'>
                                        <h5 className='text-primary'>Dashboard</h5>
                                    </div>
                                    <div className='p-2'>
                                        {this.loadComponent()}
                                    </div>
                                </div>

                                {/* Chat Window */}
                                <div className='col-md-8 bg-white'>
                                    <div className='h-100 d-flex flex-column'>
                                        {this.loadChatComponent()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
