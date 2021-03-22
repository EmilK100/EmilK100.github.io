import React from "react";
import author from "./avatars/EmilKruszyna.jpg";

const AboutMe = () => {
    return (
        <div id="mnie" className="container">
            <div>
                <div className="row py-5 ">
                    <div className= "col-lg-6 col-xm-12">
                         <div className="photo-wrap mb-5">
                        <img className= "profile-jpg" src={author} alt="author..."/>
                    </div>
                </div>
                    <div className= "col-lg-6 col-xm-12">
                         <h1 className= "about-heading">O Mnie</h1>
                        <p>Programista-Amator z ambicjami aby zostać profesjonalistą. 
                            Fan muzyki klasycznej oraz wszelkiej maści gier strategicznych/taktycznych.
                            <br/>
                            Nieustanie borykający się z trzema pytaniami :
                            <br/>
                            Dlaczego to nie działa ?
                            <br/>
                            Jak to własciwie działa ?
                            <br/>
                            Nie wiem o co chodzi u mnie wszystko działa ;).
                            <br/>
                            Jeśli poszukują państwo do współpracy żelaznego Logika (INTP).
                            <br/>
                            Serdecznie zapraszam do kontaktu.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
