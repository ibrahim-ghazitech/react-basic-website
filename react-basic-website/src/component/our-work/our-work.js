import './our-work.css';
import arrowImage from './arrow.png';
import arrowTwoImage from './arrow-2.png';

function Work (){
    return(
        <>
        <section className="our-work">
            <div className="container">
                <div className="our-work-content-wrapper">
                <p className="our-work-para top-para">
                    Our work process
                </p>
                <h5 className="our-work-heading primary-heading">
                    Navigate with
                    <br/>
                    our clear work process
                </h5>
                </div>
                <div className="our-work-cards flex align-center justify-between">
                    <div className="our-work-card-1">
                        <p className="card-number" id="card-num-1">1</p>
                        <h5 className="work-card-heading">Choose a Service</h5>
                        <p className="work-card-para">Neque porro quisquam est quiolorem ipsum quia dolor sit amet consecqu tetur adipisci quam</p>
                    </div>
                    <div>
                        <img src={arrowImage}/>
                    </div>
                    <div className="our-work-card-1">
                        <p className="card-number" id="card-num-2">2</p>
                        <h5 className="work-card-heading">Get custom plans</h5>
                        <p className="work-card-para">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                    </div>
                    <div>
                        <img src={arrowTwoImage}/>
                    </div>
                    <div className="our-work-card-1">
                        <p className="card-number" id="card-num-3">3</p>
                        <h5 className="work-card-heading">Successfully done</h5>
                        <p className="work-card-para">Quis autem vel eum iure repreh derit qui in ea voluptate velit esse quam nihil molestiae epreh</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Work