import { Children } from 'react';
import arrowImage from './right-arrow.png';

function Button (props){

    const {children} = props

    const btnStyle = {
        background: 'var(--main-color)',
        color: 'var(--white-color)',
        //color: props?.btnColor || 'var(--white-color)',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 25,
        paddingRight: 65,
        borderRadius: 70,
        fontSize: '1.2rem',
        textAlign: 'end',
        position: 'relative'
    };

    const arrowStyle = {
        position: 'absolute',
        maxWidth: '100%', 
        width: 24,
        marginLeft: 10,
        filter: 'invert(1)'
    }

    return(
        <>
            <div className="button">
              <a href="javascript:void(0)" className="main-btn" style={btnStyle}>{children} <span><img src={arrowImage} style={arrowStyle} className="arrow-image" /></span></a>
            </div>
        </>
    );
}

export default Button