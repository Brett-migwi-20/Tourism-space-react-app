import React, { Component } from 'react'
import "./crew.css"

import douglas from "./../../../assets/crew/image-douglas-hurley.png";
import anousheh from "./../../../assets/crew/image-anousheh-ansari.png";
import mark from "./../../../assets/crew/image-mark-shuttleworth.png";
import victor from "./../../../assets/crew/image-victor-glover.png";

export default class Crew extends Component {
    constructor(props) {
        super(props)

        this.state = {
            "origin":
              {
                   "crew_1":{
                    "title":"Commander",
                    "name":" Douglas Hurley",
                    "description":"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot " +      
                                 "and former NASA astronaut. He launched into space for the third time as" +
                                 "commander of Crew Dragon Demo-2.",
                    "image":douglas             
                   },
                   "crew_2":{
                    "title":"Mission Specialist",
                    "name":"MARK SHUTTLEWORTH",
                    "description":"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
                    "image":mark   
                },
                   "crew_3":{
                    "title":"PILOT",
                    "name":"Victor Glover",
                    "description":"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
                    "image":victor
                },
                   "crew_4":{
                    "title":"Flight Engineer",
                    "name":"Anousheh Ansari",
                    "description":"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
                    "image": anousheh        
                   }
              },
            "results" : {
                "title":"Commander",
                "name":" Douglas Hurley",
                "description":"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot " +      
                             "and former NASA astronaut. He launched into space for the third time as" +
                             "commander of Crew Dragon Demo-2." ,
            
                "image":douglas
            }

        }
    }
    render() {
        const crewDetailsHandler = (name) => {
                    for (const key in this.state.origin) {
                        if(name === key){
                            this.setState({'results':this.state.origin[key]})
                         }
                    }
        }
        return (
            <div>
                 <div className='bg-image-c'>
                    <h2 className="title-crew">
                        <span className="crew-number">02</span>
                        <span className="crew-name-title">Meet your crew</span>
                    </h2>
                    <div className="grid-container-crew">
                    <div className="grid-container-crew-left">
                        <div className="crew-title">{this.state.results.title}</div>
                        <div className="crew-name">{this.state.results.name}</div>
                        <div className="crew-para">{this.state.results.description}</div>
                        <div className="crew-bottom-nav">
                            <div className="crew-circle-nav" style={{}} onClick={() => crewDetailsHandler("crew_1")}></div>
                            <div className="crew-circle-nav" onClick={() => crewDetailsHandler("crew_2")}></div>
                            <div className="crew-circle-nav" onClick={() => crewDetailsHandler("crew_3")}></div>
                            <div className="crew-circle-nav" onClick={() => crewDetailsHandler("crew_4")}></div>
                        </div>
                    </div>
                    <div className="grid-container-crew-right">
                        <img src={this.state.results.image}></img>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
