import React from 'React'
import Personaldetail from './personaldetail'
class CurrentLayout extends React.Component{
    

    renderUser(){
        let tempArry=[]
        let datarow = this.props.user
        datarow.forEach(userdatabyrow => {
            let key =  userdatabyrow.latlng+userdatabyrow.fullname
            tempArry.push(<Personaldetail userdetail={userdatabyrow} key={key} ></Personaldetail>)
        });
        return tempArry
        
    }


    render(){
        return(
            this.renderUser()
        )
    }
}
export default CurrentLayout
