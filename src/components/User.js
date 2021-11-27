import React, { Component } from "react";
import "../styles/User.css";


class User extends Component{

  constructor(props){

      super(props);
      this.state = {
          items: [],
          isLoaded: false,

      }
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => {
          this.setState({
              isLoaded: true,
              items: json,
          })
      })
  }

  render(){

      var {isLoaded, items}=this.state;
          
          if (!isLoaded){
              return <div>Chargement...</div>;
          }

          else {

              return (
                  <div className="Fruits">

                    <ul>
                        {items.map(item => (
                            <li key={item.id}>

                            Nom : {item.name} Email : {item.email} Adresse : {item.address.geo.lat}
                            
                            </li>                                
                        ))}
                    </ul>
                    
                  </div>             
                );
          }  
    }
}

export default User;


/*

---------NE PAS SUPPRIMER---------

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
}*/
