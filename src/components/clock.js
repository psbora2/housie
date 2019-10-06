
import React, { Component } from 'react'
// import cn from 'classnames/bind'
import './countdown.css'

//const cx = cn.bind(styles)

export class CountDown extends Component {
    constructor(props) {
        super(props)
        this.count = this.count.bind(this)
        this.state = {
            days: 0,
            minutes: 0,
            hours: 0,
            secounds: 0,
            time_up:""
        }
        this.x = null
        this.deadline = this.props.deadline
    }
    count () {        
    
        var now = new Date();
        console.log(this.props.deadline);
        var deadline = new Date(this.props.deadline)
        var t =  deadline - now ;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        this.setState({days, minutes, hours, seconds})
        if (t < 0) {
                clearInterval(this.x);
                this.setState({ days: 0, minutes: 0, hours: 0, seconds: 0, time_up: "TIME IS UP" })
            }
    }
    componentDidMount() {
        this.deadline = new Date("apr 29, 2018 21:00:00").getTime();
 
        this.x = setInterval(this.count, 1000);
    }
    
    render() {
        const { days, seconds, hours, minutes, time_up } = this.state
        return ( 
            <div> 

            <h3>Next Housie Game Start in </h3>
            <div id="clockdiv">
            <div>
                <span className="days" id="day">{days}</span>
                <div className="smalltext">Days</div>
                
            </div>
            <div>
                <span className="hours" id="hour">{hours}</span>
                <div className="smalltext">Hours</div>
                
            </div>
            <div>
                <span className="minutes" id="minute">{minutes}</span>
                <div className="smalltext">Minutes</div>
                
            </div>
            <div>
                <span className="seconds" id="second">{seconds}</span>
                <div className="smalltext">Seconds</div>
                
            </div>
            </div>
            
            <p id="demo">{time_up}</p>
            </div>
        )
    }
}