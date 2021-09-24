import React from "react";
import { Card } from "react-bootstrap";
import 'react-bootstrap/dist/react-bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const textinfo = {
    color: 'white',
    fontSize: '32px',
    fontSize: 'xx-large'
}



class Totalview extends React.Component {


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         all: 0, notchecked: 0, before: 0, current: 0, after: 0, normalgun: 0, wargun: 0, thaicraftgun: 0, ammunition: 0, total: 0
    //     }
    // }

    // getdataRow = async () => {
    //     let result
    //     try {
    //         let resp = await fetch('http://localhost:4000/info')
    //         result = await resp.json()
    //     } catch (err) {
    //         console.error(err)
    //     }
    //     return result
    // }

    // async componentDidMount() {
    //     let totalItem = await this.getdataRow()
    //     if (totalItem != null) {
    //         this.setState(
    //             {
    //                 all: totalItem['all'], notchecked: totalItem['notchecked'], before: totalItem['before'], current: totalItem['current']
    //                 , after: totalItem['after'], normalgun: totalItem['normalgun'], wargun: totalItem['wargun'], thaicraftgun: totalItem['thaicraftgun'], ammunition: totalItem['ammunition'], total: totalItem['total']
    //             }
    //         )
    //     }
    // }


    render() {
        return (
            <>
                <div className="row mt-3 text-center">
                    <Card border="dark" text="white" bg="danger" >
                        <Card.Body>
                            <h1 className="display-2" >ตรวจยึดอาวุธปืนรวม {this.props.overview.total}</h1>
                        </Card.Body>
                    </Card>
                </div>
                <div className="row row-cols-2 mt-4 text-truncate text-center">
                    <div className="col">
                        <Card border="dark" bg="dark" text="white">
                            <Card.Header>
                                <p>ยอดรวมเป้าทั้งหมด</p>
                            </Card.Header>
                            <Card.Body>
                                <h1> {this.props.overview.all}</h1>
                            </Card.Body>
                        </Card>
                        <Card border="dark" bg="light"  width="auto">
                            <Card.Header>
                                <p >ยังไม่เช็คอิน</p>
                            </Card.Header>
                            <Card.Body>
                                <h1> {this.props.overview.notchecked}</h1>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="flex-column justify-content-center">
                        <Card border="dark" bg="primary" text="white" width="auto">
                        <div>
                            <div className="col">
                                <p>สถานะก่อนเข้าค้น</p>
                            </div>
                            <div className="col">
                                <h1 > {this.props.overview.before}</h1>
                            </div>
                        </div>
                        </Card>
                        <Card border="dark" bg="warning" text="white" width="auto">
                        <div>
                            <div className="col">
                                <p>สถานะกำลังเข้าค้น</p>
                            </div>
                            <div className="col">
                                <h1 > {this.props.overview.current}</h1>
                            </div>
                        </div>
                        </Card>
                        <Card border="dark" bg="success" text="white" width="auto">
                        <div>
                            <div className="col">
                                <p>สถานะหลังเข้าค้น</p>
                            </div>
                            <div className="col">
                                <h1 > {this.props.overview.after}</h1>
                            </div>
                        </div>
                        </Card>
                    </div>
                </div>
                
            </>

        )
    }
}


export default Totalview
