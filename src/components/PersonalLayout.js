import React from 'React'
import Personaldetail from './personaldetail'
class PersonalLayout extends React.Component{
    

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
            <div className="row row-cols-3">
            {this.renderUser()}
            </div>
            
        )
    }
}
export default PersonalLayout
