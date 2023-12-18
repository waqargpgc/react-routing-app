const Education = () => {
    return ( 
        <section>
        <h2 className="text-secondary fw-bolder mb-4">Education</h2>
        {/* <!-- Education Card 1--> */}
        <div className="card shadow border-0 rounded-4 mb-5">
            <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                            <div className="text-secondary fw-bolder mb-2">2015 - 2017</div>
                            <div className="mb-2">
                                <div className="small fw-bolder">Barnett College</div>
                                <div className="small text-muted">Fairfield, NY</div>
                            </div>
                            <div className="fst-italic">
                                <div className="small text-muted">Master's</div>
                                <div className="small text-muted">Web Development</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                </div>
            </div>
        </div>
        {/* <!-- Education Card 2--> */}
        <div className="card shadow border-0 rounded-4 mb-5">
            <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                            <div className="text-secondary fw-bolder mb-2">2011 - 2015</div>
                            <div className="mb-2">
                                <div className="small fw-bolder">ULA</div>
                                <div className="small text-muted">Los Angeles, CA</div>
                            </div>
                            <div className="fst-italic">
                                <div className="small text-muted">Undergraduate</div>
                                <div className="small text-muted">Computer Science</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                </div>
            </div>
        </div>
    </section>
     );
}

export default Education;