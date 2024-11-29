import './our-team.css';
import memberImageOne from './member-1.png';
import memberImageTwo from './member-2.png';
import memberImageThree from './member-3.png';
import memberImageFour from './member-4.png';

function Team (){
    return(
        <>
        <section className="our-team">
            <div className="container">
                <div className="our-team-wrapper">
                    <div className="our-team-content">
                        <p className="our-team-para top-para">{"Our Creative Team"}</p>
                        <h5 className="our-team-heading primary-heading">{"Meet our IT professionals the"}
                        <br/>
                        {"backbone of our "}
                        <span className="bg-change">{"success"}</span>
                        </h5>
                    </div>
                    <div className="team-member-cards">
                        <div className="team-card-1">
                            <img src={memberImageOne} alt="our-team" className="our-team-image"/>
                            <div className="member-description">
                                <h6 className="member-name">{"Jinny Welson"}</h6>
                                <p className="member-position">{"Co-Founder / CEO"}</p>
                            </div>
                        </div>
                        <div className="team-card-1">
                            <img src={memberImageTwo} alt="our-team" className="our-team-image"/>
                            <div className="member-description">
                                <h6 className="member-name">{"Emily Harrison"}</h6>
                                <p className="member-position">{"Creative Desinger"}</p>
                            </div>
                        </div>
                        <div className="team-card-1">
                            <img src={memberImageThree} alt="our-team" className="our-team-image"/>
                            <div className="member-description">
                                <h6 className="member-name">{"Oliver Bennett"}</h6>
                                <p className="member-position">{"Senior Developer"}</p>
                            </div>
                        </div>
                        <div className="team-card-1">
                            <img src={memberImageFour} alt="our-team" className="our-team-image"/>
                            <div className="member-description">
                                <h6 className="member-name">{"James Carter"}</h6>
                                <p className="member-position">{"UI/UX Desinger"}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
        </>
    );
}

export default Team