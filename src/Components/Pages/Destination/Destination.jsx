import React, { Component } from 'react'
import './Destination.css';
import moon from '../../../assets/destination/image-moon.png';
import mars from '../../../assets/destination/image-mars.png';
import titan from '../../../assets/destination/image-titan.png';
import europa from '../../../assets/destination/image-europa.png';

export default class Destination extends Component {
        constructor(props) {
            super(props)
            this.state = {
                'orign' : {
                    'moon':{
                        'img':moon,
                        'title':'moon',
                        'para':"See our planet as you’ve never seen it before. A perfect relaxing trip away to help"+
                               "regain perspective and come back refreshed. While you’re there, take in some history" + 
                               "by visiting the Luna 2 and Apollo 11 landing sites.",
                        'distance':  "384,400 km"  ,
                        'time':"3 days"   
                    },
                    'mars':{
                        'img':mars,
                        'title':'mars',
                        'para':"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons," +
                                "the tallest planetary mountain in our solar system. It’s two and a half times"+
                                "the size of Everest!",
                        'distance':  "225 mil. km"  ,
                        'time':"9 months" 
                    },
                    'europa':{
                        'img':europa,
                        'title':'europa',
                        'para':"The only moon known to have a dense atmosphere other than Earth, Titan" +
                                "is a home away from home (just a few hundred degrees colder!). As a"+
                                "bonus, you get striking views of the Rings of Saturn.",
                        'distance':  "1.6 bil. km"  ,
                        'time':"7 years " 
                    },
                    'titan':{
                        'img':titan,
                        'title':'titan',
                        'para':"The only moon known to have a dense atmosphere other than Earth, Titan" +
                               "is a home away from home (just a few hundred degrees colder!). As a" +
                               "bonus, you get striking views of the Rings of Saturn.",
                        'distance':  "1.6 bil. km"  ,
                        'time':"7 years" 
                    }
                },
                'results':{
                    'img':moon,
                    'title':'moon',
                        'para':"See our planet as you’ve never seen it before. A perfect relaxing trip away to help"+
                               "regain perspective and come back refreshed. While you’re there, take in some history" + 
                               "by visiting the Luna 2 and Apollo 11 landing sites.",
                        'distance':  "384,400 km"  ,
                        'time':"3 days"
                }
        }
    }
    render() {

        const NavDestinationHangler = (planet) =>{
               for (const key in this.state.orign) {
                   if(planet === key){
                      this.setState({'results':this.state.orign[key]})
                   }
               }
        }
        return (
                <div className='bg-image-d'>
                    <h2 className="title-destination">
                        <span className="destination-number">01</span>
                        <span className="destination-name-title">Pick your destination</span>
                    </h2>
                    <div className="grid-container-d">
                        <div className="grid-container-left-d">
                            <div className="planet-image-holder">
                                <img src={this.state.results['img']} alt="" className="plant-img" />
                            </div>
                        </div>
                        <div className="grid-container-right-d">
                        <div className="nav-destination">
                        <div className="nav-right-d">
                            <div className="d-nav-link active">
                                <a href="#" onClick={()=>{NavDestinationHangler('moon')}}>Moon</a>
                            </div>
                            <div className="d-nav-link">
                                <a href="#" onClick={()=>{NavDestinationHangler('mars')}}>mars</a>
                            </div>
                            <div className="d-nav-link">
                                <a href="#" onClick={()=>{NavDestinationHangler('europa')}}>europa</a>
                            </div>
                            <div className="d-nav-link">
                                <a href="#" onClick={()=>{NavDestinationHangler('titan')}}>titan</a>
                            </div>
                        </div>
                       </div>
                                <DestinationDetaisl  state={this.state.results}/>
                        </div>
                    </div>
                </div>
            
        )
    }
}

function DestinationDetaisl(props) {
      console.log();
    return (
        <div className="destination-details-container">
            <div className="destination-details-title">
           {props.state.title}
            </div>
            <div className="destination-details-para">
             {props.state.para}
            </div>
            <div className="destination-details-stats">
                <div className="destination-details-left">
                    <div className="destination-details-distance-word">
                    Avg. distance
                    </div>
                    <div className="destination-details-distance-num">
                   {props.state.distance}
                    </div>
                </div>
                <div className="destination-details-right">
                    <div className="destination-details-time-word">
                    Est. travel time
                    </div>
                    <div className="destination-details-time-num">
                    {props.state.time}
                    </div>
                </div>
            </div>
        </div>
    )
    
}


