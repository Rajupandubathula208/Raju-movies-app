import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow us :- </h3>
                            <ul className='socialIconsList'>
                            <li>
                            <a rel="noreferrer" href="https://www.facebook.com/raju.pandu.900/" target="_blank">
                                <BsFacebook />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href='https://instagram.com/raju_pandu1_23' target="_blank">
                                <BsInstagram />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/raju-bathula-59852b1b7/" target="_blank">
                                <BsLinkedin />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://twitter.com/@RAJUPAN98602512" target="_blank">
                                <BsTwitter />
                            </a>
                        </li>
                       
                       
                        <li>
                            <a rel="noreferrer" href="https://github.com/Rajupandubathula208" target="_blank">
                                <BsGithub />
                            </a>
                        </li>
                       
                            </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>  Developed and Designed  by RAJU</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;