import React from 'react'
import Personaldetail from '../components/personaldetail'
import { v4 as uuidv4 } from 'uuid';
class Topuser extends React.Component {


    renderUser() {
        let tempArry = []
        if (this.props.user != null) {
            let datarow = this.props.user
            datarow.forEach(userdatabyrow => {
                let key = uuidv4()
                if(userdatabyrow.totalfound >0)
                tempArry.push(<Personaldetail userdetail={userdatabyrow} key={key} ></Personaldetail>)
            });
            return tempArry
        }else{
            return tempArry
        }
        

    }


    render() {
        return (
            <div className="row row-cols-3">
                {this.renderUser()}
            </div>

        )
    }
}
export default Topuser
