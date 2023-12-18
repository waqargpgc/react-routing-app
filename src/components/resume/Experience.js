const Experience = () => {
    return ( 
        <section>
        <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="text-primary fw-bolder mb-0">Experience</h2>
            <a className="btn btn-primary px-4 py-3" href="#!">
                <div className="d-inline-block bi bi-download me-2"></div>
                Download Resume
            </a>
        </div>
        {/* <!-- Experience Card 1--> */}
        <div className="card shadow border-0 rounded-4 mb-5">
            <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                            <div className="text-primary fw-bolder mb-2">2019 - Present</div>
                            <div className="small fw-bolder">Web Developer</div>
                            <div className="small text-muted">Stark Industries</div>
                            <div className="small text-muted">Los Angeles, CA</div>
                        </div>
                    </div>
                    <div className="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                </div>
            </div>
        </div>
        {/* <!-- Experience Card 2--> */}
        <div className="card shadow border-0 rounded-4 mb-5">
            <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                            <div className="text-primary fw-bolder mb-2">2017 - 2019</div>
                            <div className="small fw-bolder">SEM Specialist</div>
                            <div className="small text-muted">Wayne Enterprises</div>
                            <div className="small text-muted">Gotham City, NY</div>
                        </div>
                    </div>
                    <div className="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                </div>
            </div>
        </div>
    </section>
     );
}

export default Experience;