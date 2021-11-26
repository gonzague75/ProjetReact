import React, { Component } from "react";
import "../styles/User.css";


class User extends Component {

  state = {
    post: {}
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response)=>{
      return response.json()
    })

    .then((result)=>{
      setTimeout(()=>{
        this.setState({post: result})
        },1500);
      
    })
  }

  render(){

    const { post } = this.state;

    return (
      <div className="Contact">
        
        <b>Nom : </b>{(post.name) ? post.name : <p>Chargement...</p>}
        <br />
        <b>Username : </b>{post.username}
        <br />
        <b>Email : </b>{post.email}
        <br />
        <b>Telephone : </b>{post.phone}
        <br />
        <b>Site Web : </b>{post.website}
        
      </div>

    );
  }
}

export default User;
