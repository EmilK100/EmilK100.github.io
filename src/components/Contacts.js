import React, { useState } from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

const Contacts = () => {

    const [succesMessage, setSuccessMessage] = useState("");

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const  userID = "user_FghdbbwK7vgveJ6o269w7";

   

    

    const { register,handleSubmit,errors } = useForm();

    const onSubmit =(data, r) => {
        sendEmail(
            serviceID,
            templateID,
    
        {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            discription: data.discription
        },
         userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables,  userID) => {
    
        emailjs.send(serviceID, templateID, variables,  userID)
          .then(() => {
            setSuccessMessage("Form sent successfully!");
          }).catch(err =>console.error(`Somthing went wrong ${err}`));
      }
  
    return (
    <div id="kon" className="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>W sprawie stażu najlepiej kontaktować się bezpośrednio z Koordynatorką Panią Agatą Czerwieńską   <a href="606-313-763">tel.: 606-313-763 </a>
                </p>
                <span className="succes-message">{succesMessage}</span>
            </div>
        <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                     <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                             <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            ref={
                                register({
                                    required: "Please enter your name",
                                    maxLength: {
                                        value: 20,
                                        message: "Please enter a nem with fewer that 20 characters"
                                    }
                                })
                            }
                         />
                             <div className="line"></div>
                        </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                        <div className="text-center">
                             <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                            ref={
                                register({
                                    required: "Please enter your phone number",
                                    
                                })
                            }
                         />
                             <div className="line"></div>
                        </div>
                        <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>
                        <div className="text-center">
                             <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            ref={
                                register({
                                    required: "Please provide your email",
                                    patern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid Email"
                                    }
                                    
                                })
                            }
                         />
                             <div className="line"></div>
                        </div>
                        <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                        <div className="text-center">
                             <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                            ref={
                                register({
                                    required: "Please add the Subject",
                                    
                                })
                            }
                         />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                                {errors.subject && errors.subject.message}
                        </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">

                         <textarea
                            type="text"
                            className="form-control"
                            placeholder="description"
                            name="description"
                            ref={
                                register({
                                    required: "Please describe :)",
                                    
                                })
                            }
                         ></textarea>
                           <div className="line"></div>
                        </div>
                        <span className="error-message">
                                {errors.discription && errors.discription.message}
                            </span>
                         <bootom className="btn-main-offer contact-btn" type="submit">Contact me</bootom>
                        </div>
                     </div>            
                </form> 
        </div>
    </div>
    )
}

export default Contacts
