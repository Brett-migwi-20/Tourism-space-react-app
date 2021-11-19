import React, { Component } from 'react'
import './Home.css'
export default class Home extends Component {
    render() {
        return (
             <div className="bg-image">
                    <HomeBottom/>
             </div>
        )
    }
}
function HomeBottom() {
    return(
        <div className="grid-container">
            <div className="grid-box-left">
                <h3 className="title-head-first">So, you want to travel to</h3>
                <h1 className="title-space">Space</h1>
                <p className="para">Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="grid-box-right">
                <div className="explore-box">
                    <span className="letter">
                         Explore
                    </span>
                </div>
            </div>
        </div>
    )
}
