import React, { Component } from 'react'
import firebase from 'firebase'
class Profile extends Component{
     onButtonClick(){
        this.props.onButtonClick(0)

    }
    logout(){
            firebase.auth().signOut().then(()=>{
                this.props.history.push('/login')
    
            }).catch(function(err){
    
            })
        }
    render(){
        return(
            <div>
                <div className='row'>
                    <div className='col-12' style={{borderBottom:"1px #e2e2e2 solid"}}>
                        <button onClick={()=>this.onButtonClick()}className='btn btn-secondary btn-sm'>Goback</button>
                        <h3 className='text-centre'>Profile</h3>
                    </div>
                    <div className='col-12 mt-4'>
                        <img src={localStorage.getItem("dp")} className=' rounded-circle centre' style={{width:150,height:150,display:"block",margin:"auto"}}></img>
                    </div>
                    <div className='col-12 mt-5'>
                        <p className='text-info'><b>Your Name</b></p>
                        <h3 className='text-dark'>{localStorage.getItem('name')}</h3>
                    </div>
                     <div className='col-12 mt-5'>
                        <p className='text-info'><b>About</b></p>
                        <h3 className='text-dark'> Happiness is when what you think, what you say, and what you do are in harmony</h3>
                    </div>
                    <div className='col-12 mt-2'>
                        <button onClick={this.logout.bind(this)} className='btn btn-outline-danger'>Logout</button>
                    </div>
                </div>
            </div>

        )
    }
}
export default Profile