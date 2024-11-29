import './client.css';
import starImage from './star.png';
import bgStar from './bg-star.png';

function Client() {
    return (
        <>
            <section className="client">
                <div className="star-background-div">
                    <img src={bgStar} className="bg-star-image" />
                </div>
                <div className="container">
                    <div className="client-wrapper">
                        <div className="client-content">
                            <h4 className="client-heading">
                                {"50,000+ happy clients."}
                            </h4>
                            <p className="client-para">
                                {"Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatu."}
                            </p>
                        </div>
                        <div className="line"></div>
                        <div className="client-rating">
                            <div className="cleint-1">
                                <h5 className="rating">
                                    {"4.9"}
                                </h5>
                                <p className="avg-rating">
                                    {"223 average rating"}
                                </p>
                                <div className="rating-star">
                                    <img src={starImage} alt="rating-star-image" className="star" />
                                    <img src={starImage} alt="rating-star-image" className="star" />
                                    <img src={starImage} alt="rating-star-image" className="star" />
                                    <img src={starImage} alt="rating-star-image" className="star" />
                                    <img src={starImage} alt="rating-star-image" className="star" />
                                </div>
                            </div>
                            <div className="cleint-2">
                                <h5 className="rating">
                                    {"A+"}
                                </h5>
                                <p className="avg-rating" id="avg-review">
                                    {"223 clients reviews"}
                                </p>
                                <div className="rating-star">
                                    <img src={starImage} alt="rating-star-image" className="star" />
                                    <img src={starImage} alt="rating-star-image" className="star" />
                                    <img src={starImage} alt="rating-star-image" className="star" />
                                    <img src={starImage} alt="rating-star-image" className="star" />
                                    <img src={starImage} alt="rating-star-image" className="star" />
                                </div>
                            </div>
                            <div className="cleint-3">
                                <h5 className="rating">
                                    {"4.8"}
                                </h5>
                                <p className="avg-rating" id="avg-review">
                                    {"129 clients reviews"}
                                </p>
                                <div className="rating-star">
                                    <img src={starImage} alt="rating-star-image" className="star" />
                                    <img src={starImage} alt="rating-star-image" className="star" />
                                    <img src={starImage} alt="rating-star-image" className="star" />
                                    <img src={starImage} alt="rating-star-image" className="star" />
                                    <img src={starImage} alt="rating-star-image" className="star" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Client