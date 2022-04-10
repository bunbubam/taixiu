import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mb-4 pt-5">
                    <div className="col-md-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators bg-success ml-0 mr-0 ">
                                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row gx-4 gx-lg-5 align-items-center my-5">
                                        <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://cdn.popsww.com/blog/sites/2/2022/02/naruto-co-bao-nhieu-tap.jpg" alt="..." /></div>
                                        <div className="col-lg-5">
                                            <h1 className="font-weight-light">Business Name or Tagline</h1>
                                            <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                                            <a className="btn btn-primary" href="#!">Call to Action!</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row gx-4 gx-lg-5 align-items-center my-5">
                                        <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://cdn.popsww.com/blog/sites/2/2022/02/naruto-la-gi.jpg" alt="..." /></div>
                                        <div className="col-lg-5">
                                            <h1 className="font-weight-light">Business Name or Tagline</h1>
                                            <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                                            <a className="btn btn-primary" href="#!">Call to Action!</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row gx-4 gx-lg-5 align-items-center my-5">
                                        <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://cdn.popsww.com/blog/sites/2/2022/02/naruto-luc-dao-hien-nhan.jpg" alt="..." /></div>
                                        <div className="col-lg-5">
                                            <h1 className="font-weight-light">Business Name or Tagline</h1>
                                            <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                                            <a className="btn btn-primary" href="#!">Call to Action!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <img src="https://dummyimage.com/500x325/dee2e6/6c757d.jpg" className="img-fluid" />
                                <h2 className="card-title">Card One</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <img src="https://dummyimage.com/500x325/dee2e6/6c757d.jpg" className="img-fluid" />
                                <h2 className="card-title">Card Two</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <img src="https://dummyimage.com/500x325/dee2e6/6c757d.jpg" className="img-fluid" />
                                <h2 className="card-title">Card Three</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;