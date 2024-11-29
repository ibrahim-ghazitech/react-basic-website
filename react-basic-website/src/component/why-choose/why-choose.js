import './why-choose.css';
import Button from '../button/button'
import chooseImage from './choose-1.png';
import smChooseImage from './choose-sm.png';

function Choose (){
    return(
        <>  
        <section className="why-choose-us">
            <div className="top-left"></div>
            <div className="right-bottom"></div>
            <div className="container">
                <div className="why-choose-wrapper flex align-center">
                    <div className="why-choose-image">
                        <img src={chooseImage} className="why-choose-image-1" />
                        <img src={smChooseImage} className="why-choose-image-sm" />
                    </div>
                    <div className="why-choose-content">
                        <p className="why-choose-top-para top-para">
                            {"Why Choose us"}
                        </p>
                        <h5 className="why-choose-heading primary-heading">
                            {"Elevate your tech journey with IT"} <span className="bg-change">{"solutions"}</span>
                        </h5>
                        <p className="why-choose-bottom-para">
                            {"Ut enim ad minima veniam, quis nostrum exercita tionem ullam susc ipit labor iosam, nisut alationem ulla nima venia cipit lab."}
                        </p>
                        <ul className="why-choose-list">
                            <li>{"Sunt in culpa qui officia deserunt mollit anim id es."}</li>
                            <li>{"Lorem ipsum dolor sit amet, consectetur adipis."}</li>
                            <li>{"Sed do eiusmod tempor incidi sectet utlab."}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Choose