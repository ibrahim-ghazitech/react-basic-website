import './button.css';
import arrowImage from './right-arrow.png';

function Button (){
    return(
        <>
            <div className="button">
              <a href="javascript:void(0)" className="main-btn">Get a qoute <span><img src={arrowImage} className="arrow-image" /></span> </a>
            </div>
        </>
    );
}

export default Button