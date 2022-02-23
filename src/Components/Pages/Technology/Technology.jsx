import React, { Component } from 'react'
import "./technology.css"

export default class Technology extends Component {
    render() {
        return (
            <div>
                <div>
                 <div className='bg-image-t'>
                    <h2 className="title-technology">
                        <span className="technology-number">02</span>
                        <span className="technology-name-title">space launch 101 </span>
                    </h2>
                    <div className="grid-container-technology">
                    <div className="grid-container-technology-left">
                        <div className="technology-title"></div>
                        <div className="technology-name"></div>
                        <div className="technology-para"></div>
                        <div className="technology-bottom-nav">
                            <div className="technology-circle-nav"></div>
                            <div className="technology-circle-nav"></div>
                            <div className="technology-circle-nav"></div>
                            <div className="technology-circle-nav"></div>
                        </div>
                    </div>
                    <div className="grid-container-crew-right"></div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
