import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from '../../assets/legif.gif';
import YButton from "../basic/YButton";

//import CSS
import './about.css';
class About extends React.Component {
    render() {
        return (
            <div className='about-control' style={{ background: "#141416" }}>
                <Container style={{ border: "solid #7E7E7F 1px", padding: 20 }}>
                    <Row>
                        <Col md={6} xs={12} className='image-control'>
                            <img style={{ border: "solid black 2px", borderRadius: 0 }} src={AboutGif} alt='about gif' />
                        </Col>
                        <Col md={6} xs={12} className='about-description'>
                            <header className="about-title">
                                UTILITY<br />
                            </header>
                            <p style={{paddingTop:"3em"}}>
                                <text className="about-paragraph">Planting up to 4
                                every Power Plants NFT minted.
                                </text> <br /><br />

                                <text className="about-text">
                                “Power Plants will donate 2 trees for
                                every NFT that is minted. We will also match all tree donations if all 5,000 NFTs are
                                minted, bringing the total to 20,000. Proof of donations will be shared.
                                </text>
                            </p>

                            {/* <div><YButton text='COMING SOON' /></div> */}
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;