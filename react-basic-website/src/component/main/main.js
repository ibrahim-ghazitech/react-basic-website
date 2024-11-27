import './main.css';
import Button from '../button/button'
import sliderImage from './slider_image.png';
import userImage from './user-image.png';

function Main(){
    return (
        <>
            <section className="main">
                <div className="top-left"></div>
                <div className="right-bottom"></div>
                <div className="container">
                    <div className="main-wrapper">
                        <div className="main-content">
                            <p className="top-para">About our Company</p>
                            <h2 className="main-heading">Revolutionary IT <span className="bg-change">Solutions</span> for the next genration</h2>
                            <p className="bottom-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat, lectus non fringilla ornare, lacus lacus vestibulum sapien, sed convallis augue magna vel justo. Curabitur fermentum risus elit, non commodo.</p>
                        </div>
                        <div className="main-image">
                            <img src={sliderImage} alt="main-image" className="main-slider-image" />
                        </div>
                        <div className="image-2">
                            <img src={userImage}  alt="users-image" className="user-image vert-move"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Main