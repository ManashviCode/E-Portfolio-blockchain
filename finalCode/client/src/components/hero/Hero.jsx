/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import  {useEffect, useState} from 'react'
// Remove this line if you don't need React in this file
import React from 'react';

import { Modal, ModalBody, Row } from "reactstrap"
import './Hero.css'

const Hero = ({state}) => {
    const [modal, setModal] = useState(false);
    const [description,setDescription]=useState("")
    const [cid,setCid]=useState("")

    useEffect(()=>{
    const {contract}=state;
    const description=async()=>{
        const descriptionText = await contract.methods.description().call();
        setDescription(descriptionText);
    }
    contract && description();
    },[state])

    useEffect(()=>{
        const {contract}=state;
        const cidOfImage=async()=>{
        const cid = await contract.methods.imageLink().call();
        setCid(cid);
        }
        contract && cidOfImage();
    },[state])

    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p><span>Divani </span>
                    is an undergraduate computer engineering student at university of jaffna .</p>
                <h1>I have developed decentralized apps for electronic portfolio in web3 space.</h1>
                <h3>{description}</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Id - divamanashvi03@gmail.com
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={`https://gateway.pinata.cloud/ipfs/${cid}`} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero

