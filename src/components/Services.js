import React from 'react'


const Services = () => {
    return (
       <div className="services">
           <div>
           <h1 className="py-5">Moje Zainteresowania </h1>
                <div className="container">
                    <div className="row">
                      <div className=".col-md-4 col-sm-4">
                      <div className="box">
                                <h3>Jujitsu</h3>
                                <p>Od 3 lat jestem zafascynowanym uczniem tej inspirującej sztuki walki.</p>
                            </div>
                      </div>
                      {/* - */}
                      <div className=".col-md-4 col-sm-4">
                            <div className="box">
                                <h3>Historia</h3>
                                <p>Średniowiecza - W szczególności okres Wojny Husyckiej. </p>
                            </div>
                      </div>
                       {/* - */}
                      <div className=".col-md-4 col-sm-4">
                            <div className="box">
                                <h3>Teoria Gier</h3>
                                <p> Obserwowanie i badanie powodów podejmowania decyzji.</p>
                            </div>
                      </div>
                    </div>
                </div>
           </div>
       </div>
    )
}

export default Services
