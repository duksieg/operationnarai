import React from 'React'
import Personaldetail from './personaldetail'
class Afterlayout extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:[]
        }
    }
    swap(arr, xp, yp) {
        let temp = arr[xp];
        arr[xp] = arr[yp];
        arr[yp] = temp;
        return arr
    }

    sorting(rawsource) {
        let j
        let sortedArry = rawsource
        for (let index = 0; index < sortedArry.length - 1; index++) {
            for (j = 0; j < sortedArry.length - index - 1; j++) {
                let foundx = sortedArry[j].totalfound
                let foundy = sortedArry[j + 1].totalfound
                if (foundx > foundy) {
                    this.swap(sortedArry, j, j + 1)
                }
            }

        }
        return sortedArry
    }

    renderUser(){
        let tempArry=[]
        let datarow = this.props.user
        datarow.forEach(userdatabyrow => {
            let key =  userdatabyrow.latlng+userdatabyrow.fullname
            tempArry.push(<Personaldetail userdetail={userdatabyrow} key={key} ></Personaldetail>)
        });
        return tempArry
        
    }
    componentDidMount(){
        this.setState({record:this.props.user})
    }


    render(){
        return(
            this.renderUser()
        )
    }
}
export default Afterlayout
