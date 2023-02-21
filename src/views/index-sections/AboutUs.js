import React from "react";
import Slider from "nouislider"
import { experiences } from "res/data/experience";
import { 
    Card, CardBody,
    CardFooter, CardTitle,    
    Container, Row, Col,
} from "reactstrap";



function AboutUs(){
    let p_style = {color:'#aaa', fontSize:'22px', fontWeight: 500}
    let p2_style = {fontSize:'18px', color:'#ccc', fontWeight: 500}
    return (
        <div className="section section-dark text-center">
            <Container>
            <h2 className="title">ABOUT ME</h2>
            <p className="card-description text-center" style={p_style}>
            I'm a 2nd-year CS master's student, studying NLP, CV, cross-modal ML, and recommender systems.
            In additionally, I love to discover new technologies and then leverage them to solve the real-world problems.
            Also, my friends and I are planing to start a company, which driven by AI.
            </p>
            <br/>
            <br/>
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
                                    <CardTitle tag="h4" style={{fontWeight: 800}}>{item.title}</CardTitle>
                                    <h4 className="card-category" style={{fontWeight: 500}}>{item.category}</h4>
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