import React,{useState} from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './Skills.css';

function Skills() {
  // const [design, setDesign] = useState(true);
  // const [web, setWeb] = useState(false);
  // const [language, setLanguage] = useState(false);

  // const showDesign = () => {
  //   setDesign(true);
  //   setWeb(false);
  //   setLanguage(false)
  // }
  // const showWeb = () => {
  //   setDesign(false);
  //   setWeb(true);
  //   setLanguage(false)
  // }
  // const showLanguge = () => {
  //   setDesign(false);
  //   setWeb(false);
  //   setLanguage(true)
  // }
  const [design, setDesign] = useState(true);
  const [web , setWeb] = useState(false);
  const [language, setLanguage] = useState(false);

  const showDesign = () =>{
    setDesign(true);
    setWeb(false);
    setLanguage(false);
  }
  const showWeb = () =>{
    setDesign(false);
    setWeb(true);
    setLanguage(false);
  }
  const showLanguge = () =>{
    setDesign(false);
    setWeb(false);
    setLanguage(true);
  }

  return (
    <div style = {{background:'#040404',height:'600px'}}>
      <Container >
        <Row className="justify-content-md-center">
        <div className= 'experties-projects' >
           {/* Headings */}
          <h1 style = {{left:"0",position:'relative',bottom:'1.5rem'}}   className = 'project'  >MY SKILLS</h1>
          <div style={{    position: 'relative', top: '-8rem'}}>
          <div  className = 'heading-style' style = {{top:'1.7rem',left:"68%"}}></div>
          <h3 className = 'text-background' style = {{textAlign:'center'}}>My Expertise Areas</h3>
           <p
          // Paragraph
           style = {{fontSize:'0.7rem', textAlign:'center',color:'#fff',marginTop:'2rem'}}> 
           Contrary to popular belief, Lorem Ipsum is not simply random
           
           Contrary to popular belief, <br/> Lorem Ipsum is not simply random
                text</p>
           </div>
           </div>
        {/* <div className= 'experties-projects' >
            Headings
          <h1   className = 'project' >MY SKILLS</h1>
          <div  className = 'heading-style' style = {{left:'44rem',top:'-14rem'}}></div>
          <h3 className = 'text-background' style = {{textAlign:'center',position:'relative',bottom:'15.6rem',right:'-15rem'}}>My Expertise Areas</h3>
           <p
          // Paragraph
           style = {{fontSize:'0.7rem', textAlign:'center' ,position:'relative',bottom:'14rem',left:'15rem'
           ,color:'#fff'}}> Contrary to popular belief, Lorem Ipsum is not simply random
           
           Contrary to popular belief, <br/> Lorem Ipsum is not simply random
                text</p>
           
           </div> */}
           </Row>
           <Row style = {{position :'relative',bottom:'8rem'}}>
           <Col md= {6}>
             <div >

           <Button variant="dark" className = {`${design ? 'active-btn' : 'skills-btn'} `} onClick = {showDesign}>UI/UX Design </Button>
             </div>
             <div>

           <Button variant="dark" className = {`${web ? 'active-btn' : 'skills-btn'}  `} onClick = {showWeb}>WebDevelopment </Button>
             </div>
             <div >

           <Button variant="dark" className = {`${language ? 'active-btn' : 'skills-btn'} `} onClick = {showLanguge}>Language Skills </Button>
             </div>
           </Col>
             <Col md={6}>
           <div>
             {design ? (
          <div class="front-end">
           
              <p style = {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>Photoshope</p>
              <div class="skill-container">
                <div class="skill-value"></div>
                <p class="skill-text">90%</p>
             
            </div>
          
              <p  style = {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>Adobe Illustator</p>
              <div class="skill-container">
                <div class="skill-value value-85"></div>
                <p class="skill-text">85%</p>
              </div>
           
          
              <p style= {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>Branding Design</p>
              <div class="skill-container">
                <div class="skill-value value-75"></div>
                <p class="skill-text">75%</p>
              </div>
          
            </div>
  ) : null }
             {web ? (
          <div class="front-end">
           
              <p style= {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>HTML</p>
              <div class="skill-container">
                <div class="skill-value value-90"></div>
                <p class="skill-text">90%</p>
             
            </div>
          
              <p style= {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>CSS</p>
              <div class="skill-container">
                <div class="skill-value value-80"></div>
                <p class="skill-text">80%</p>
              </div>
           
          
              <p style= {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>React</p>
              <div class="skill-container">
                <div class="skill-value value-70"></div>
                <p class="skill-text">70%</p>
              </div>
          
            </div>
  ) : null }
             {language ? (
          <div class="front-end">
           
              <p style= {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>English</p>
              <div class="skill-container">
                <div class="skill-value vlaue-95"></div>
                <p class="skill-text">95%</p>
             
            </div>
          
              <p style= {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>Urdu</p>
              <div class="skill-container">
                <div class="skill-value value-100"></div>
                <p class="skill-text">100%</p>
              </div>
           
          
              <p style= {{ position: 'relative',bottom: '-0.7rem',fontWeight:'bold'}}>Hindi</p>
              <div class="skill-container">
                <div class="skill-value value-60"></div>
                <p class="skill-text">60%</p>
              </div>
          
            </div>
  ) : null }
            </div>
           </Col>
           <Col md={6}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Skills