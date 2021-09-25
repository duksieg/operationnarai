import React from "react";
import logo from '../images/backfree500.png'
import { Modal, Button } from 'react-bootstrap'
const isBrowser = typeof window !== "undefined"
class Personaldetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            close: false,
        };
    }

    getimagestate = async (folderid) => {
        let jsonObject = { folderid: folderid }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'jsonObject'
            },
            body: jsonObject
        };
        let result
        try {
            let response = await fetch('http://localhost:4000/imagesbyuser', requestOptions)
            let jsonresponse = await response.json()
            result = await jsonresponse.records
        } catch (err) {
            console.error(err)
        }
        return result
    }


    //let result = await this.getimagestate(this.state.folderid)
    //let str = JSON.stringify(result)
    //console.log(str)




    render() {
        let imageurl
        let specialcriminal = 'stretched-link'
        if(this.props.userdetail.criminalimage ==null || this.props.userdetail.criminalimage=="" || this.props.userdetail.criminalimage==undefined){
            imageurl=logo
        }else{
            imageurl = `https://drive.google.com/uc?id=${this.props.userdetail.criminalimage}`

        }
        if(this.props.userdetail.specialcase != null && this.props.userdetail.specialcase == 'TRUE'){
            specialcriminal += ' bg-danger'
        }
        return (
            <>
                <div className="card text-center border-0 my-2 bg-transparent">
                    <p>{this.props.userdetail.pointno}</p>
                    <img src={imageurl} className="card-img-top align-self-center" alt="personal" style={{ width: '100px' }} />
                    <div className="card-body">
                        <div className="btn" style={{ backgroundColor: 'transparent' }, { borderWidth: '0' }} >
                            <p className={specialcriminal} onClick={() => this.setState({ show: true })} style={{ fontSize: '1vw' }}>{this.props.userdetail.fullname}</p>
                        </div>
                    </div>
                </div>

                    <Modal
                        show={this.state.show}
                        animation={true}
                        centered className="shadow-lg border">
                        <Modal.Header >
                            <img src={logo} className="mx-auto" width="100px" height="100px"></img>
                        </Modal.Header>
                        <Modal.Body>
                            <h3>{this.props.userdetail.fullname} </h3>
                            <h4>พิกัด:{this.props.userdetail.pointlatlng}</h4>
                            <p>เลขบัตรประชาชน :{this.props.userdetail.idcard}</p>
                            <p>หัวหน้าชุดเช้าค้น: {this.props.userdetail.headname} </p>
                            <p>เบอร์ติดต่อ: {this.props.userdetail.contactno}</p>
                            <p>จำนวนผู้ต้องหาที่จับกุมได้ :  {this.props.userdetail.criminal}</p>
                            <p>จำนวนอาวุธปืนทั่วไป :{this.props.userdetail.normalgun}</p>
                            <p>จำนวนอาวุธปืนสงคราม :{this.props.userdetail.wargun}</p>
                            <p>จำนวนอาวุธปืนไทยประดิษฐ์ :{this.props.userdetail.thaicraftgun}</p>
                            <p>จำนวนเครื่องยุทธภัณฑ์ :{this.props.userdetail.ammunition}</p>
                            <p>อื่นๆ : {this.props.userdetail.etc}</p>
                            <p>รวม : {this.props.userdetail.totalfound}</p>
                            <br/>
                            <p>{this.props.userdetail.folderid}</p>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.setState({ show: false })}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
            </>
        )
    }
}
export default Personaldetail