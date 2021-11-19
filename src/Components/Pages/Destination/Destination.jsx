import React, { Component } from 'react'
import './Destination.css';

export default class Destination extends Component {
    render() {
        return (
            <div className='bg-image-d'>
            <h2 className="title-destination">
                <span className="destination-number">01</span>
                <span className="destination-name-title">Pick your destination</span>
            </h2>
              <div className="grid-container">
                  <div className="grid-container-left">

                  </div>
                  <div className="grid-container-right">

                  </div>
              </div>
            </div>
        )
    }
}

