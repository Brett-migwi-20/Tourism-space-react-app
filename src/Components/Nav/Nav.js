import React, { Component } from 'react'
import './Nav.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Technology from '../Pages/Technology/Technology';
import Destination from '../Pages/Destination/Destination';
import Crew from '../Pages/Crew/Crew';
import Home from '../Pages/Home/Home';
import logo from '../../assets/shared/logo.svg'

export default class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
             display:'none'
        }
    }

    render() {

        const burgerHandler = () => {
             const newStle = this.state['display']  === 'none'? 'flex' : 'none';
            this.setState({display:newStle})

        }
        return (
           <Router>
                <div className="nav-container">
                <div className='brand-box'>
                     <img src={logo} alt="Tourism logo svg" />
                </div>
                <div className="nav-list-box" style={{display:this.state['display']}}>
                    <NavLink activeClassName="active" className="nav-list-item" to={'/'}>
                        <span className="list-number">00</span>
                        <span >Home</span>
                    </NavLink>
                    <NavLink activeClassName="active" className="nav-list-item" to={'/Destination'}>
                        <span className="list-number">01</span>
                        <span >Destination</span>
                    </NavLink>
                    <NavLink activeClassName="active" className="nav-list-item" to={'/Crew'}>
                        <span className="list-number">02</span>
                        <span >Crew</span>
                    </NavLink>
                    <NavLink activeClassName="active" className="nav-list-item" to={'/Technology'}>
                        <span className="list-number">03</span>
                        <span >Technology</span>
                    </NavLink>
                </div>
                <div className="nav-burger" onClick={burgerHandler}>
                    <div className="nav-burger-line" id="top" ></div>
                    <div className="nav-burger-line" id="middle"></div>
                    <div className="nav-burger-line" id="bottom"></div>
                </div>
            </div>
            <Routes>
                    <Route  exact path='/' element={<Home/>}/>
                    <Route  path='/Destination' element={<Destination/>}/>
                    <Route  path='/Crew' element={<Crew/>}/>
                    <Route  path='/Technology' element={<Technology/>}/>

                </Routes>
           </Router>
        )
    }
}
