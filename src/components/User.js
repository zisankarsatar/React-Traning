import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import UserConsumer from '../context';
import axios from 'axios';
import {Link} from 'react-router-dom';

class User extends Component {
    state = {
        isVisible: false
    }
    static defaultProps ={
        name: 'Meryem',
        department: 'Kargo',
        salary: '9088',
        id: 'ksjdidf'
    }
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         isVisible: false
    //     }
    // }
    onClickEvent = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    onDeleteUser = async (dispatch, e) => {
        const {id}= this.props;
        //Delete user ile serverdan silinmis oluyor 
        await axios.delete(`http://localhost:4300/users/${id}`);
        //deleteUser(id);
        //Consumer Dispatch state den kaldirmis oluyor 
        dispatch({type: 'DELETE_USER', payload: id});
    }
  render() {
    const {id, name,department,salary}= this.props;
    const {isVisible} = this.state;
    return(
       <UserConsumer>
           {
               value => {
                   const {dispatch} = value;
                   return (
                    <div className = 'col-md-8 mb-4'>
                        <div className= 'card'>
                            <div className='card-header d-flex justify-content-between' onClick={this.onClickEvent}>
                                <h4 className='d-inline'>{name}</h4>
                                <i onClick = {this.onDeleteUser.bind(this, dispatch)} className='far fa-trash-alt' style={{cursor: "pointer"}}></i>
                            </div>
                            {
                              isVisible ? <div className='card-body'>
                              <p className='card-text'>Salary: {salary}</p>
                              <p className='card-text'>Department: {department}</p>
                              <Link to = {`/update/${id}`} className= 'btn btn-dark'> Update User</Link>
                              </div> : null
                            }
                        </div>
                    </div>
                  )
               }
           }
       </UserConsumer>
    )
  }
}
User.propTypes ={
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    //deleteUser: PropTypes.func.isRequired,
}
export default User;