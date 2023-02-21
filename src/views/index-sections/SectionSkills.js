
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import 'react-medium-image-zoom/dist/styles.css'

import Zoom from 'react-medium-image-zoom'
// core components

function SectionSkills() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons" style={{fontWeight: 500}}>
        <Container>
          <h2 className="title">Skills</h2>
          <Row>
            <Col>
              <h3 style={{color: '#aaa', fontWeight: 500}}>Software Engineering</h3>
            </Col>
            <Col>
              <h3 style={{color: '#aaa', fontWeight: 500}}>ML Research</h3>
            </Col>
          </Row>
          <Row style={{alignItems: 'center',}}>
              <Col>
                <Zoom 
                   overlayBgColorEnd="rgba(0, 0, 0, 0.75)"
                   overlayBgColorStart="rgba(0, 0, 0, 0)"
                >
                  <img
                    alt="..."
                    style={{width: '21vw'}}
                    src={
                      require("assets/img/skills/software-engineering.png").default
                    }
                  />
                </Zoom>
                <br />
              </Col>
              <Col >
                <Zoom
                  overlayBgColorEnd="rgba(0, 0, 0, 0.75)"
                  overlayBgColorStart="rgba(0, 0, 0, 0)"
                  >
                  <img
                    style={{width: '21vw'}}
                    alt="..."                  
                    src={
                      require("assets/img/skills/research.png").default
                    }
                  />
                </Zoom>                                
              </Col>
              <Col >
                <Zoom
                  overlayBgColorEnd="rgba(0, 0, 0, 0.75)"
                  overlayBgColorStart="rgba(0, 0, 0, 0)"
                  >
                  <img
                    style={{width: '21vw'}}
                    alt="..."                  
                    src={
                      require("assets/img/skills/solution.png").default
                    }
                  />
                </Zoom>                                
              </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionSkills;
