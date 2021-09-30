import React from 'react'
import Clock from 'react-live-clock'

export default class Newtimer extends React.Component {
    render() {
        return(
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Bangkok'} />
        )
    }
}