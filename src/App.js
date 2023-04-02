import React, { Component } from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import Users from './components/Users';
import AddUser from './forms/AddUser';
import UpdateUser from './forms/UpdateUser';
import NotFound from './page/NotFound';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const About = () => {
  return (
    <h3> About Page</h3>
  )
}

const Contact = () => {
  return (
    <h3> Contact Page</h3>
  )
}

class App extends Component {
  // deleteUser = (id) => {
  //   this.setState({
  //       users : this.state.users.filter(user => id !== user.id)
  //   });
  // }

  render () {
    return (
    <div className="App">
      <div className='container'>
        {/* <h1 className='header'>Seni Sevirem</h1>
        <h4>{1+1}</h4>
        <h4>{'zisan'.toUpperCase()}</h4>
        <h4>{test}</h4>
        <h4 style ={{color:'red'}}>{ isAuthtest ? 'Kullanici Kayitli' : null}</h4>

        <User/> */}
        {/* <Navbar/>
        <hr/>
        <AddUser></AddUser>
        <Users></Users> */}
        {/*<Users deleteUser ={this.deleteUser} users = {this.state.users}/>*/}

        <Router>
          <Navbar title='User App'/>
          <hr/>

          <Routes>
            <Route exact path="/contact" element={<Contact />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/" element={<Users />}/>
            <Route exact path="/add" element={<AddUser />}/>
            <Route exact path="/update/:id" element={<UpdateUser />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Router>
        
      </div>
    </div>
    )
  }
}

export default App;
