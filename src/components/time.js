
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
class Timer extends React.Component{
    state={
        date:new Date()

    }

    updatetime= ()=>{
        setInterval(()=>{
            this.setState({date:new Date()})

        },1000)
            
    }
    render(){
        return(
            <div className="text-center">
            <h1>{this.state.date.toLocaleTimeString()}</h1>
            {this.updatetime()}
            </div>
        )
    }
}

export default Timer