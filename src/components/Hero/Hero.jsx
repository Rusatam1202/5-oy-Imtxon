import React, { Component } from "react";
import Slider from "react-slick";
import './Carusel.css'

export default class Hero extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 5000,
            cssEase: "linear"
        };
        return (
            <div className="heroWrapper">
               
                <Slider {...settings}>
                    <div className="CaruselWerapper">
                        <h3 className="Carusel1">Temuriylar
                            davri
                            adabiyoti</h3>
                            {/* <div className="CaruselImg">ggrvfds</div> */}
                           
                    </div>
                    <div className="CaruselWerapper">
                        <h3 className="Carusel1">Jadid<br/>davri adabiyoti </h3>
                    </div>
                    <div className="CaruselWerapper">
                        <h3 className="Carusel1">Sovet <br/> davri adabiyoti </h3>
                    </div>
                    <div className="CaruselWerapper">
                        <h3 className="Carusel1">Mustaqillik davri adabiyoti</h3>
                    </div>

                </Slider>
            </div>
        );
    }
}