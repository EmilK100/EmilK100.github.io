import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

export const Testimonials = () => {
    return (
     <div id="Pas" className="testimonials">
         <h1>Zadowoleni Klienci</h1>
        <div className="container">
            <div className="testimonials-content">
                <TestimonialsCarousel />
            </div>
        </div>
     </div>
    )
}
export default Testimonials;