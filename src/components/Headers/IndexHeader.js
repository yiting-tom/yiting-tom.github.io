import React from "react";
import Typewriter from 'typewriter-effect';
// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (    
    <>      
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/background/wallpaper-2.png").default + ")",
          boxShadow: "0 0 1000px 0 #0b1011",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            
            <div className="title-brand">
              <h1 className="presentation-title">
                <Typewriter
                  onInit={(typewriter) => {
                    setTimeout( function() {
                      typewriter.typeString('Hello, World')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("I'm YT.")
                      .start();
                    },1000)
                    
                  }}
                />
              </h1>
              <h2>
                <Typewriter
                  onInit={(typewriter) => {                    
                    setTimeout(function() { 
                      typewriter.typeString('NLP | CV | Cross-Modal ML | Data Analysis | RecSys')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('It’s great connecting with you!')
                      .start();
                    }, 5000);
                    
                  }}
                />
                
              </h2>
            </div>
                        
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
