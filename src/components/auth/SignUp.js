import React, { Component } from 'react'

export default class SignUp extends Component {

    state={
        email:'',
        password:'',
        firstName:'',
        lastName:''

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

                        SignUp
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
                    <div className='input-field'>
                    <label className=''>First Name</label>
                    <input type='text' id='firstName' onChange={this.handleChange}>
                    </input>
                    </div>
                    <div className='input-field'>
                    <label className=''>Last Name</label>
                    <input type='text' id='lastName' onChange={this.handleChange}>
                    </input>
                    </div>
                    <div className='input-field'>
                    <button className='btn pink'>SignUp</button>
                    </div>
                </form>
            </div>
        )
    }
}
