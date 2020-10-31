import React, { Component } from 'react'

export default class SignIn extends Component {

    state={
        email:'',
        password:''

    }

    handleSumbit=(e)=>{
        e.preventDefault()
        
    }
    handleChange=(e)=>{
        this.setState(
            {
                [e.target.id]:e.target.value
            }
        )
      
    }
    render() {
        
        return (
            <div className='container'>
                <form onSubmit={this.handleSumbit} className='white'>
                    <h5 className='grey-text text-darken-3'>

                        SignIn
                    </h5>
                    <div className='input-field'>
                    <label className=''>Email</label>
                    <input type='email' id='email' onChange={this.handleChange}>
                    </input>
                    </div>
                    <div className='input-field'>
                    <label className=''>Password</label>
                    <input type='password' id='password' onChange={this.handleChange}>
                    </input>
                    </div>
                    <button className='btn pink'>Login</button>
                </form>
            </div>
        )
    }
}
