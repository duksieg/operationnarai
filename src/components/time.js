
import React from 'react'
class Timer extends React.Component{
    state={
        date:new Date()

    }

    updatetime= ()=>{
        setInterval(()=>{
            this.setState({date:new Date()})
        },60000)
            
    }
    render(){
        return(
            <div className="text-center">
            <h1 className="fs-1 my-2">{this.state.date.toLocaleDateString('th-TH')}  {this.state.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h1>
            {this.updatetime()}
            </div>
        )
    }
}

export default Timer