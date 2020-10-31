import React, { Component } from 'react'
import {createProject} from '../../actions/projectActions'
import {connect} from 'react-redux'
class CreateProject extends Component {

    state={
        title:'',
        content:''

    }

    handleSumbit=(e)=>{
        e.preventDefault()

        this.props.createProject(this.state)
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

                        Create New Project
                    </h5>
                    <div className='input-field'>
                    <label className=''>Title</label>
                    <input type='text' id='title' onChange={this.handleChange}>
                    </input>
                    </div>
                    <div className='input-field'>
                    <label className=''>Project Content</label>
                    <textarea id='content' className='materialize-textarea' onChange={this.handleChange}></textarea>
                    </div>
                    <button className='btn pink'>Create</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        createProject:(project)=>{
          dispatch(createProject(project))
        }
    }
}
export default connect(null,mapDispatchToProps)(CreateProject)