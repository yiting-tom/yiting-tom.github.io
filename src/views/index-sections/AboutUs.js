import React from "react";
import Slider from "nouislider"
import { experiences } from "res/data/experience";
import { 
    Card, CardBody,
    CardFooter, CardTitle,    
    Container, Row, Col,
} from "reactstrap";



function AboutUs(){
    let p_style = {color:'white', fontSize:'18px'}
    let p2_style = {fontSize:'16px'}
    return (
        <div className="section section-dark text-center">
            <Container>
            <h2 className="title">About me</h2>
            <p className="card-description text-center" style={p_style}>
            I'm a 2nd-year CS master's student, studying NLP, CV, cross-modal ML, and recommender systems.
            In additionally, I love to discover new technologies and then leverage them to solve the real-world problems.
            Also, my friends and I are planing to start a startup company, which driven by AI and data science.
            </p>
            <h2 className="title">EXPERIENCE</h2>
            <Row>
                {experiences.map((item)=>{
                    return (
                        <Col>
                            <Card className="card-profile card-plain">
                                <div className="card-avatar">                        
                                    <img
                                    alt="..."
                                    src={item.src}
                                    />
                                </div>
                                <CardBody>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <div className="author">
                                    <CardTitle tag="h4">{item.title}</CardTitle>
                                    <h6 className="card-category">{item.category}</h6>
                                    </div>
                                </a>
                                <p className="card-description text-center" style={p2_style}>
                                    {item.desp}
                                </p>
                                </CardBody>
                                <CardFooter className="text-center">
                                
                                </CardFooter>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
            </Container>
            </div>  
    );
}

export default AboutUs;