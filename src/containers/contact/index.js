import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFacebook, BsLinkedin, BsTwitter,  BsGithub,BsInstagram} from "react-icons/bs";
import './style.css';
const  ContactContainer = ()=>{
    const myData = [
        {name:'Facebook', link:'https://www.facebook.com/raju.pandu.900/', text:'Follow to my facebook.'},
        {name:'Linkedin', link:'https://www.linkedin.com/in/raju-bathula-59852b1b7/', text:'Follow to my linkedin.'},
        {name:'Twitter', link:'https://twitter.com/@RAJUPAN98602512', text:'Follow to my twitter.'},
        {name:'Instagram', link:'https://instagram.com/raju_pandu1_23', text:'Follow to my instagram.'},
        {name:'GitHub', link:'https://github.com/Rajupandubathula208', text:'Follow to my github account.'},
        {name:'Email', link:'mailto:rajupandubathula208@gmail.com',  text:'write to me a mail'}
    ]
    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <p>CONNECT WITH US</p>
                    <h1>Get in Touch</h1>
                </Col>
            </Row>
            <Row>
                <Col className='conectIcon'>
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
            </Row>
            <Row>
                <Col>
                    <ListGroup className='contactList'>
                        {
                            myData && myData.length > 0 ? myData.map((item)=>{
                                return (
                                    <ListGroup.Item key={item.name}>
                                        <span>{item.text}</span>
                                        <a href={item.link} rel="noreferrer"  target="_blank">
                                            {item.link}
                                        </a>
                                    </ListGroup.Item>
                                )
                            }) : ''
                        }
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactContainer;