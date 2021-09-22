import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import PersonalLayout from "./PersonalLayout"
class Mainstatus extends React.Component {
    constructor(props) {
        super(props)
        //this.justifyRows =this.justifyRows.bind(this)
        // oldversion nobug this.state = {
        //     user: [],
        //     before: [],
        //     current: [],
        //     after: [],
        //     loading: true
        // }
        this.state = {
            user: false,
            before: [],
            current: [],
            after: [],
            abort: [],
            loading: true
        }
    }

    // async componentDidMount() {
    //     let arrystatus = []
    //     try {
    //         let response = await fetch('http://localhost:4000/detail')
    //         let jsonresponse = await response.json()
    //         arrystatus = jsonresponse.records
    //        if(arrystatus.length>1){
    //         this.setState({ user:arrystatus, loading: false })
    //        }
    //        this.setState({before:this.justifyRows('before'),current:this.justifyRows('current'),after:this.justifyRows('after')})
    //     } catch (err) {
    //         console.error(err)
    //         this.setState({ err, loading: false });
    //     }

    // }

    async componentDidMount() {
        let tempArrybefore = []
        let tempArrycurrent = []
        let tempArryafter = []
        let tempArryabort = []
        let records = this.props.user.records
        if (Array.isArray(records)) {
            this.setState({ user: true })
            records.forEach(element => {
                if (element.status == 'before') {
                    tempArrybefore.push(element)
                } else if (element.status == 'current') {
                    tempArrycurrent.push(element)
                } else if (element.status == 'after') {
                    tempArryafter.push(element)
                } else if (element.status == 'abort') {
                    tempArryabort.push(element)
                }
            });
            this.setState({ before: tempArrybefore, current: tempArrycurrent, after: tempArryafter, abort: tempArryabort, loading: false })
        } else {
            this.setState({ loading: false })
        }

    }



    render() {

        return (
            <>
                <div className="container-fluid d-flex mt-4">
                    <div className="col border-primary border-2">
                        <h3 className="text-center"> รายชื่อเป้าเตรียมเข้าค้น </h3>
                        <PersonalLayout user={this.state.before || !this.state.loading}></PersonalLayout>
                    </div>
                     <div className="col border-light border-2">
                        <h3 className="text-center"> รายชื่อเป้ากำลังเข้าค้น </h3>
                        <PersonalLayout user={this.state.current || !this.state.loading }></PersonalLayout>
                    </div> 
                    <div className="col border-secondary border-2">
                        <h3 className="text-center"> รายชื่อเป้าเข้าค้นเสร็จสิ้น </h3>
                        <PersonalLayout user={this.state.after || !this.state.loading } ></PersonalLayout>
                    </div>
                </div>
                <div className="container-fluid">
                <h3 className="text-center"> รายชื่อเป้าไม่พบตัวและสิ่งผิดกฎหมาย </h3>
                        <PersonalLayout user={this.state.abort || !this.state.loading } ></PersonalLayout>
                </div>
            </>
            )


    }




}

export default Mainstatus