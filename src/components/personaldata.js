import React from "react";
import logo from '../images/backfree500.png'
import {Modal,Button} from 'react-bootstrap'
import { useState } from "react";

const getimagestate =async (folderid)=> {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ folderid: folderid })
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

const Personal =(props)=> {
   const {fullname,latlng,headname,idcard,contactno,normalgun,wargun,thaicraftgun,ammunition,folderid} = props.userdetail
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true);}
    //getimagestate(folderid)
        return (
            <>
            <div className='d-inline-flex'>
                <div className="card border-0 my-2" style={{width:'8rem'}}>
                    <img src={logo} className="card-img-top w-100" style={{height:'auto'}} alt="personal"></img>
                    <div className ="card-body">
                    <div  className="btn" style={{backgroundColor:'transparent'},{borderWidth:'0'}} >
                    <p className ="card-text text-center stretched-link" onClick={handleShow} style={{fontSize:'18px'},{fontSize:'1vw'}}>{fullname}</p>
                    </div>
                    </div>

                </div>
            </div>
            <Modal show={show} onHide={handleClose}
            centered>
                <Modal.Header >
                    <img src={logo}  className="mx-auto" width="100px" height="100px"></img>
                </Modal.Header>
                <Modal.Body>
                    <h3>{fullname} พิกัด:{latlng}</h3>
                    <p>เลขบัตรประชาชน :{idcard}</p>
                    <p>หัวหน้าชุดเช้าค้น: {headname} เบอร์ติดต่อ: {contactno}</p>
                    <p>จำนวนอาวุธปืนทั่วไป :{normalgun}</p>
                    <p>จำนวนอาวุธปืนสงคราม :{wargun}</p>
                    <p>จำนวนอาวุธปืนไทยประดิษฐ์ :{thaicraftgun}</p>
                    <p>จำนวนเครื่องยุทธภัณฑ์ :{ammunition}</p>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
            )
        
}



export default Personal