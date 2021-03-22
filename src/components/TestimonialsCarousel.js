import React from "react";
import{Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "./avatars/avatar-1.png";
import avatar2 from "./avatars/avatar-2.png";
import avatar3 from "./avatars/avatar-3.png";
import avatar4 from "./avatars/avatar-4.png";

export const TestimonialsCarousel = () => {
    return (
        <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
        >
            <>
                <img src={avatar1} alt="John Doe 1"/>
                <div className="myCarousel"> 
                      <h3>1 OSOBA </h3>
                       <p>Nie miałem jeszcze okazji wykonywać projektów komercyjnych.
                      </p>
                    </div>
                   
            </>
            <>
                <img src={avatar2} alt="Jane Doe 2"/>
                <div className="myCarousel">
                        <h3>2 OSOBA </h3>
                        <p>Nie miałem jeszcze okazji wykonywać projektów komercyjnych.
                        </p>
                    </div>
            </>
            <>
                <img src={avatar3} alt="John Doe 3"/>
                <div className="myCarousel">
                      <h3>3 OSOBA </h3>
                        <p>Nie miałem jeszcze okazji wykonywać projektów komercyjnych.
                        </p>
                    </div>
            </>
            <>
                <img src={avatar4} alt="John Doe 4"/>
                <div className="myCarousel">
                      <h3>4 OSOBA </h3>
                        <p>Nie miałem jeszcze okazji wykonywać projektów komercyjnych.
                        </p>
                    </div>
            </>
        </Carousel>
    )
}
export default TestimonialsCarousel;