import './company.css';
import imageOne from './company.jpg';
import imageTwo from './company-2.png';
import imageThree from './company-3.png';
import workflowImage from './automation.png';
import supportImage from './support.png';

function Company (){
    return (
        <>
        <section className="company max-w-100 max-h-100 align-content-center">
            <div className="container">
                <div className="company-wrapper w-100 flex align-center">
                        <div className="company-images w-50 relative">
                            <div className="comp-image">
                                <img src={imageTwo} alt="circle-icon" className="comp-bg-image relative"/>
                            </div>
                            <div className="comp-grow-images">
                                <img src={imageOne} alt="company-profile-image" className="grow-image-1 absolute b-r-20"/>
                                <img src={imageThree} alt="company-growth-image" className="grow-image-2 absolute b-r-20"/>

                            </div>    
                        </div>
                        <div className="company-content w-50">
                            <p className="company-top-para top-para">
                                About Our Company
                            </p>
                            <h3 className="company-heading">
                                Future proof your business with our IT <span className="bg-change">solutions</span>
                            </h3>
                            <p className="company-bottom-para">
                                State burst think end are its. Arrived off she elderly beloved him affix ed
                                noisier yet. Course regard to up he hardly elder noisier.
                            </p>
                            <div className="company-card">
                                <div className="comp-card" id="comp-card-1">
                                    <div className="company-card-image">
                                        <img src={workflowImage} alt="workflow-icon" className="comp-card-image" id="card-image-1"/>
                                    </div>
                                    <div className="comp-card-content">
                                        <h4 className="comp-card-heading">
                                            Customizable workflow
                                        </h4>
                                        <p className="comp-card-para">
                                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu regard.
                                        </p>
                                    </div>
                                </div>
                                <div className="comp-card" id="comp-card-2">
                                    <div className="comp-card-image">
                                        <img src={supportImage} alt="support-icon" className="comp-card-image" id="card-image-2" />
                                    </div>
                                    <div className="comp-card-content">
                                    <h4 className="comp-card-heading">
                                            24x7 customer support
                                        </h4>
                                        <p className="comp-card-para">
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id enoisier.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        </>
    );

}


export default Company
