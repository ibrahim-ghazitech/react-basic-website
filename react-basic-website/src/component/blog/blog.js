import './blog.css';
import blogMainImage from './blog-1.jpg';
import blogSmImageOne from './blog-2.jpg';
import blogSmImageTwo from './blog-3.jpg';
import blogAuthorImageOne from './blog-author-1.jpg';
import blogAuthorImageTwo from './blog-author-2.jpg';
import blogAuthorImageThree from './blog-author-3.jpg';
 

function Blog() {
    return (
        <>
        <section className="blog">
                <div className="container">
                    <div className="blog-wrapper">
                        <p className="blog-sec-para top-para">
                            {"our latest news"}
                        </p>
                        <h5 className="blog-sec-heading primary-heading">
                            {"Immerse yourself in our"}
                            <br />
                            {"articles & insights"}
                        </h5>
                        <div className="blog-card-wrapper">
                            <div className="main-blog">
                                <div className="main-blog-bg-image">
                                    <img src={blogMainImage} className="blog-main-image" />
                                </div>
                                <div className="blog-content-wrapper">
                                    <div className="blog-title-desc">
                                        <a href="javascript:void(0)">
                                            <p className="blog-category">
                                                {"Branding"}
                                            </p>
                                        </a>
                                        <a>
                                            <p className="blog-title">
                                                {"12 stunning examples of Illustration designs.."}
                                            </p>
                                        </a>
                                    </div>
                                    <div className="blog-author-wrapper">
                                        <img src={blogAuthorImageOne} className="blog-auhtor-image-1"/>
                                        <div className="blog-author-details">
                                            <p className="blog-author-name">
                                                {"Arlene McCoy"}
                                            </p>
                                            <p className="blog-date">
                                                {"November 27, 2024"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small-blog-card-wrapper">
                            <div className="small-blog">
                                <div className="main-blog-bg-image">
                                    <img src={blogSmImageOne} className="blog-small-image" />
                                </div>
                                <div className="blog-content-wrapper">
                                    <div className="blog-title-desc">
                                        <a href="javascript:void(0)">
                                            <p className="blog-category">
                                                {"Technology"}
                                            </p>
                                        </a>
                                        <a>
                                            <p className="blog-title">
                                                {"How to be a more productive designer.."}
                                            </p>
                                        </a>
                                    </div>
                                    <div className="blog-author-wrapper">
                                        <img src={blogAuthorImageTwo} className="blog-auhtor-image-1"/>
                                        <div className="blog-author-details">
                                            <p className="blog-author-name">
                                                {"Theresa Webb"}
                                            </p>
                                            <p className="blog-date">
                                                {"November 27, 2024"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small-blog">
                                <div className="main-blog-bg-image">
                                    <img src={blogSmImageTwo} className="blog-small-image" />
                                </div>
                                <div className="blog-content-wrapper">
                                    <div className="blog-title-desc">
                                        <a href="javascript:void(0)">
                                            <p className="blog-category">
                                                {"Trends"}
                                            </p>
                                        </a>
                                        <a>
                                            <p className="blog-title">
                                                {"Pride by Design: 7 designers explore the.."}
                                            </p>
                                        </a>
                                    </div>
                                    <div className="blog-author-wrapper">
                                        <img src={blogAuthorImageThree} className="blog-auhtor-image-1"/>
                                        <div className="blog-author-details">
                                            <p className="blog-author-name">
                                                {"Flores Juanita"}
                                            </p>
                                            <p className="blog-date">
                                                {"November 27, 2024"}
                                            </p>
                                        </div>
                                    </div>
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

export default Blog