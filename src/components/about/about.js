import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from '../../assets/legif.gif';
import YButton from "../basic/YButton";
import InfiniteCarousel from 'react-leaf-carousel';
//import CSS
import './about.css';
class About extends React.Component {
    render() {
        return (
            <div className='about-control' style={{ background: "#141416" }}>
                <Container style={{ border: "solid #7E7E7F 1px", padding: 20 }}>
                    <Row>
                        <Col md={6} xs={12} className='image-control'>
                        <InfiniteCarousel
                        breakpoints={[
                            {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                },
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                },
                            },
                            {
                                breakpoint: 1280,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                },
                            },
                        ]}
                        dots={false}
                        arrows={true}
                        showSides={true}
                        sidesOpacity={0.5}
                        sideSize={0.1}
                        slidesToScroll={1}
                        slidesToShow={1}
                        scrollOnDevice={true}
                    >
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/12.png?raw=true"} alt='boy1' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/13.png?raw=true"} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/14.png?raw=true"} alt='boy1' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/26.jpg?raw=true"} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/33.jpg?raw=true"} alt='boy1' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/37.png?raw=true"} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/40.png?raw=true"} alt='boy1' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/42.png?raw=true"} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/45.jpg?raw=true"} alt='boy1' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/53.jpg?raw=true"} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/54.jpg?raw=true"} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/7.png?raw=true"} alt='boy2' />
                    </div>
                </InfiniteCarousel>
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