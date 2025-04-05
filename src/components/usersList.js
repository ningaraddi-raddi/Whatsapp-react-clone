import React, { Component } from 'react'
import Thread from './thread'
import firebase from 'firebase'

class UsersList extends Component{
    state={
        users:{},
    }

    onThreadClick(name,dp,uuid){
        
        this.props.onThreadClick(1,name,dp,uuid) 
    }

    loadUser(){
       return Object.keys(this.state.users).map((key)=>{
        if(key!==localStorage.getItem('user_id')){
            return   <div className='col-12'>
                            <Thread uuid={key} onThreadClick={this.onThreadClick.bind(this)} name={this.state.users[key]['name']} dp={this.state.users[key]['dp']} status="hey there"/>
                        </div>}
        })
    }
    onButtonClick(){
        this.props.onButtonClick(0) 
    }
    componentDidMount(){
        firebase.database().ref('users/').once('value').then((snapshot)=>{
            console.log(snapshot.val())
            this.setState({users:snapshot.val()})
        })
    }
    render(){
        return(
             <div>
                    <div className='row'>
                        <div className='col-12'>
                           
                            <button onClick={()=>this.onButtonClick()} className='btn btn-sm btn-outline-secondary mt-2' >Go back</button>
                            <h3 className='mt-3'>All Users</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <input type='text' className='form-control' placeholder='Search here'/>
                        </div>

                    </div>
                    <div className='row mt-3' style={{borderTop:"1px solid #e2e2e2"}}>
                        {this.loadUser()}
                      
                         
                    </div></div>
                
        )
    }
}

export default UsersList