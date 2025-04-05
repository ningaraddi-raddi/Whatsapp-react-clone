import React, { Component } from 'react'
import Thread from './thread';
import firebase from 'firebase'

class Contacts extends Component {
    state = {
        users: {},
    }

    onThreadClick() {

    }

    componentDidMount() {
        firebase.database().ref('users/' + localStorage.getItem('user_id') + '/recentChats/').on('value', (snapshot) => {
            console.log(snapshot.val())
            this.setState({ users: snapshot.val() })
        })
    }

    loadUser() {
        let name;
        let dp;
        return Object.keys(this.state.users).map((key) => {
            firebase.database().ref('users/'+key).on('value', (snapshot) => {
                name = snapshot.val().name;
                dp = snapshot.val().dp;})


            return <div className='col-12'>
                <Thread uuid={key} onThreadClick={this.onThreadClick.bind(this)} name={name} dp={dp} status={this.state.users[key]['text']} />
            </div>
        })
    }

    onIconclick() {
        this.props.onIconclick(1)

    }
    onButtonClick() {
        this.props.onIconclick(2)
    }
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-12 mb-3'>
                        <img onClick={() => this.onIconclick()} src={localStorage.getItem("dp")} className=' rounded-circle float-right' style={{ width: 50, height: 50 }}></img>
                        <button onClick={() => this.onButtonClick()} className='btn btn-sm btn-outline-secondary float-left mt-2' >New Message</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <input type='text' className='form-control' placeholder='Search here' />
                    </div>

                </div>
                <div className='row mt-3' style={{ borderTop: "1px e2e2e2 solid" }}>
                    <div className='col-12'>
                        {this.loadUser()}
                    </div>

                </div></div>


        )
    }
}

export default Contacts;