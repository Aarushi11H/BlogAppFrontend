import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Blogs';
import CreateBlog from './CreateBlog';
import img from './kingdom-1434.cfa6d963.png';
import Image from "react-bootstrap/Image";
function Home(){
    return (
        <>
            <Container fluid="true">
                <Row>
                    <Col xs={12} md={8} sm={12}>
                    <Container >
                        <br/><br/><Row><h1 className="recent-header">Recent Blogs!!</h1></Row>  
                        <br></br><Blogs count={6} />
                    </Container>    
                    </Col>
                    <Col xs={12} md={4} sm={12}>
                        <Container fluid="true">
                            <Row>
                                <Col xs={12}>
                                    <CreateBlog/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Image src={img}  fluid/>     
                                </Col>
                            
                            </Row>    
                        </Container>
                        
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Home;