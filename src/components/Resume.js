import ResumeNavgation from "./resume/ResumeNavgation";

const Resume = () => {
    return (  
        <div className="container px-5 my-5">
        <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
               <ResumeNavgation />
            </div>
        </div>
    </div>
    );
}

export default Resume;