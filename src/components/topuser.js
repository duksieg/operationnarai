import React from 'React'
import Personaldetail from './personaldetail'
class Topuser extends React.Component {


    renderUser() {
        let tempArry = []
        if (this.props.user != null) {
            let datarow = this.props.user
            datarow.forEach(userdatabyrow => {
                let key = userdatabyrow.latlng + userdatabyrow.fullname
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
