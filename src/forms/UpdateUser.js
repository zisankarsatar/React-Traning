import React, { Component } from 'react';
import UserConsumer from '../context';
import axios from 'axios';

class UpdateUser extends Component {
    state={
        name: '',
        department: '', 
        salary: '',
        error: false
    }
    changeInput = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    componentDidMount = async () => {
      
        const id = window.location.pathname.split('/')[2];
        console.log(id);

        const response = await axios.get(`http://localhost:4300/users/${id}`);

        const {name, salary, department} = response.data;

        this.setState({
            name, salary, department
        });
    }

    validateForm = () => {
        const {name, department, salary} = this.state;
        if(name === "" | salary === "" | department === ""){
            return false;
        }
        return true;
    }

    updateUser = async (dispatch, e) => {
        e.preventDefault();
        const {name, department, salary} = this.state;
        const id = window.location.pathname.split('/')[2];

        if(!this.validateForm()){
            this.setState({
                error: true
            })
            return;
        }

        const updateUser = {
            name,
            department,
            salary
        }

        const response = await axios.put(`http://localhost:4300/users/${id}`, updateUser);
        dispatch({type: 'UPDATE_USER', payload: response.data});

        //redirect
        window.location.href = "http://localhost:3000/";

    }
  render() {
      const {name, department, salary, error} = this.state;

      return ( 
          <UserConsumer>
              {
                  value =>{
                      const {dispatch} = value;
                      return (
                        <div className='col-md-8 mb-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Update User</h4>
                            </div> 
                            <div className='card-body'>
                                {
                                    error ? 
                                    <div className = "alert alert-danger">
                                        Please check the all input field.
                                    </div> : null
                                }
                                <form onSubmit = {this.updateUser.bind(this,dispatch)}>
                                    <div className='form-group'>
                                        <label htmlform='name'>Name</label>
                                        <input
                                        type='text'
                                        name='name'
                                        id='id'
                                        placeholder='Enter Name'
                                        className='form-control'
                                        value={name}
                                        onChange= {this.changeInput}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlform='department'>Department</label>
                                        <input
                                        type='text'
                                        name='department'
                                        id='department'
                                        placeholder='Enter Department'
                                        className='form-control'
                                        value={department}
                                        onChange= {this.changeInput}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlform='salary'>Salary</label>
                                        <input
                                        type='text'
                                        name='salary'
                                        id='salary'
                                        placeholder='Enter Salary'
                                        className='form-control'
                                        value={salary}
                                        onChange= {this.changeInput}
                                        />
                                    </div>
                                    <button className='btn btn-danger btn-block' type='submit'>Update User</button>
                                </form>
                            </div>                 
                        </div>         
                    </div>
                      )
                  }
              }
          </UserConsumer>
      )

  
  }
}

export default UpdateUser;