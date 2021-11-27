import React, { Component } from "react";


class Films extends Component{

  constructor(props){

      super(props);
      this.state = {
          films: [],
          isLoaded: false,

      }
  }

  componentDidMount(){
      fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => response.json())
      .then(json => {
          this.setState({
              isLoaded: true,
              films: json,
          })
      })
  }

  render(){

      var {isLoaded, films}=this.state;
          
          if (!isLoaded){
              return <div>Chargement...</div>;
          }

          else {

              return (
                  <div className="Fruits">

                    <ul>
                        
                        {films.map(film => (
                            <li key={film.id}>

                            Titre : {film.title} 
                            <br/>
                            Titre original : {film.original_title} 
                            <br/>
                            Titre orginal romanisé : {film.original_title_romanised}
                            <br/>
                            Note/100 : {film.rt_score}
                            <br/>
                            Affiche : 
                            <img src={film.movie_banner}
                                width="800" height="540" frameborder="0">
                            </img>
                            <br/>
                            Description : {film.description}
                            <br/>
                            Réalisateur : {film.director}
                            <br/>
                            Producteur : {film.producer}
                            <br/>
                            Date de sortie: {film.release_date}
                            <br/>
                            Durée (Minutes) : {film.running_time}


                            </li>                                
                        ))}
                    </ul>
                    
                  </div>             
                );
          }  
    }
}

export default Films;