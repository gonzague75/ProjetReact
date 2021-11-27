import React, { Component } from "react";

class Calendrier extends Component{

    constructor(props){

        super(props);
        this.state = {
            date: [],
            isLoaded: false,

        }
    }

    componentDidMount(){
        fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today')
        .then(response => response.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                date: json,
            })
        })
    }

    render(){

        var {isLoaded, date}=this.state;
            
            if (!isLoaded){
                
                return <div>Chargement...</div>;
            }

            else {

                return (
                    <div className="Fruits">

                        ATTENTION : Il s'agit d'un liturgical calendar
                        <br/>
                        Date : {date.date}
                        <br/>
                        Saison : {date.season}
                        <br/>
                        Semaine numéro : {date.season_week}
                        <br/>
                        Jour : {date.weekday}
                                       
                    </div>       
                    
                  );
            }  
      }
}

export default Calendrier;


/*
Jour : {date.celebrations.title}
*/