import React, { Component } from 'react';

class Thread extends Component {



    onThreadClick(){
        this.props.onThreadClick(this.props.name,this.props.dp,this.props.uuid);
    }

    

   

    render() {
        return (
            
            <div onClick={this.onThreadClick.bind(this)}className='row thread' style={{ borderBottom: "1px solid #e2e2e2" }} >
    

                <div className='col-3 p-0'>
                    <img className='rounded-circle mt-2' src={this.props.dp} alt="User DP" style={{ width: 50, height: 50 }} />
                </div>
                <div className='col-9 pad-0'>
                    <p className='mt-2 ml-n2'>
                        <span><b>{this.props.name}</b></span>
                        <span className='float-right' style={{ marginRight: 15 }}>
                            <small>{this.props.time}</small>
                        </span>
                        <br />
                        <span className='text-secondary'>{this.props.status}</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Thread;
