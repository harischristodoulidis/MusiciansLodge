import React, { Component } from "react";
import { MDBAnimation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow } from
"mdbreact";

export class CarouselPage extends Component {
    render() {
        return (
            <MDBContainer fluid>
            <MDBRow>
            <MDBCarousel
            activeItem={1}
            length={2}
            showControls={true}
            showIndicators={false}
            id="Home_banner"
            >
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img className="d-block w-100" src="images/sliders/slider1.jpg" alt="First slide" />
                </MDBView>
                <MDBCarouselCaption>
                    <div className="container-xl">
                        <div className="carousel-caption-inner banner1">
                            <MDBAnimation className="slideInUp" count={1} delay="2s" >
                                {/* <h3 style={{fontSize: "50px"}} className="ttm-textcolor-darkgrey flipInY"><strong className="ttm-textcolor-skincolor">Σύλλογος Εναλλακτικής Μουσικής Σκηνής Αγρινίου</strong></h3> */}
                                <h2 className="ttm-textcolor-darkgrey flipInY"><strong className="ttm-textcolor-skincolor">Σύλλογος Εναλλακτικής Μουσικής Σκηνής Αγρινίου</strong></h2>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="2.5s" >
                            <p className="text">Οι μουσικοί της πόλης του Αγρινίου ενώνουν τις<br />δυνάμεις τους προβάλλοντας την τέχνη της μουσικής </p>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="3s" >
                            <p>
                                <button className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-textcolor-white" onClick={(e) => {e.preventDefault();window.location.href='/live';}}>Τα Live Μας 
                                </button>&nbsp; &nbsp;
                                <button className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-textcolor-white" onClick={(e) => {e.preventDefault();window.location.href='/gallery';}}>Φωτογραφίες  Συλλόγου
                                </button>
                            </p>                            
                            </MDBAnimation>
                        </div>
                    </div>
                </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                <MDBView>
                    <img className="d-block w-100" src="images/sliders/slider2.jpg" alt="Second slide" />
                </MDBView>
                {/* <MDBCarouselCaption>
                    <div className="container-xl">
                        <div className="carousel-caption-inner banner2">
                            <MDBAnimation className="slideInUp" count={1} delay="5s" >
                                <h2 className="ttm-textcolor-darkgrey">Real-Time Monitoring Your <strong className="ttm-textcolor-skincolor">Infrstracture</strong></h2>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="5.5s" >
                                <p className="text">We are equipped with an updated technical knowledge to serve our customers<br /> properly. Our method of application maintains the industry.</p>
                            </MDBAnimation>
                        </div>
                      </div>
                </MDBCarouselCaption> */}
                </MDBCarouselItem>
            </MDBCarouselInner>
            </MDBCarousel>
            </MDBRow>
            </MDBContainer>
        );
    }
}

export default CarouselPage;