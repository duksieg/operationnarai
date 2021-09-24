
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
            <h1 className="fs-2 my-2">{this.state.date.toLocaleDateString('th-TH')}  {this.state.date.toLocaleTimeString()}</h1>
            {this.updatetime()}
            </div>
        )
    }
}

export default Timer