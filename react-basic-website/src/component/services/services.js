import './services.css';
import networkImage from './network.png';
import callImage from './phone-call.png';
import webImage from './web.png';
import cloudImage from './cloud.png';

function Services (){
    return(
        <>
        <section className="services">
            <div className="container">
                <div className="services-wrapper w-100 flex justify-center">
                    <div className="services-content w-40">
                        <p className="services-para top-para">
                            Our services
                        </p>
                        <h5 className="services-heading primary-heading">
                            Defend and thrive our unmatched <span className="bg-change">security</span> services
                        </h5>
                        <p className="services-para">
                            State burst think end are its. Arrived off she elderly beloved him affixed noisier yet. Course regard to up he hardly elder prominent services.
                        </p>
                    </div>
                    <div className="services-card w-60">
                            <div className="card-wrapper flex gap justify-end">
                                <div className="card">
                                    <img src={networkImage} alt="network-security" className="card-image"/>
                                    <h5 className="card-heading">
                                        Network security
                                    </h5>
                                    <p className="card-para">
                                        Neque porro quisquam est qui dolorem ipsum quia dolor sitti amet consectetur adipisci.
                                    </p>
                                    <a href="javascript:void(0)" className="card-see-more">See more</a>
                                </div>
                                <div className="card">
                                    <img src={callImage} alt="Mobile-security" className="card-image"/>
                                    <h5 className="card-heading">
                                        Mobile security
                                    </h5>
                                    <p className="card-para">
                                        Nemo enim ipsam voluptatem quia voluptas sit asper naturl autodit aut fugit tatem.
                                    </p>
                                    <a href="javascript:void(0)" className="card-see-more">See more</a>
                                </div>
                            </div>
                            <div className="card-wrapper flex gap justify-end">
                                <div className="card">
                                    <img src={webImage} alt="web-solutions" className="card-image"/>
                                    <h5 className="card-heading">
                                        Web solutions
                                    </h5>
                                    <p className="card-para">
                                        Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat null.
                                    </p>
                                    <a href="javascript:void(0)" className="card-see-more">See more</a>
                                </div>
                                <div className="card">
                                    <img src={cloudImage} alt="Cloud-security" className="card-image"/>
                                    <h5 className="card-heading">
                                        Cloud security
                                    </h5>
                                    <p className="card-para">
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamcom laboris nisi ut aliquip exea.
                                    </p>
                                    <a href="javascript:void(0)" className="card-see-more">See more</a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Services