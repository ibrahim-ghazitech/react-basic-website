import './blog.css';

function Blog (){
    return(
        <>
        <section className="blog">
            <div className="container">
                <div className="blog-wrapper">
                    <p className="blog-sec-para top-para">
                        our latest news
                    </p>
                    <h5 className="blog-sec-heading primary-heading">
                        Immerse yourself in our
                        <br/>
                        articles & insights
                    </h5>
                    <div className="blog-card-wrapper">
                        <div className="main-blog">
                            <div className="main-blog-bg-image"></div>
                            <div className="blog-title-desc">
                                <a href="javascript:void(0)">
                                    <p className="blog-category">
                                        Branding
                                    </p>
                                </a>
                                <a>
                                    <p className="blog-title">
                                        12 stunning examples of Illustration designs..
                                    </p>
                                </a>
                            </div>
                            <div className="blog-author-wrapper">
                                    <img />
                                    <div className="blog-author-details">
                                        <p className="blog-author-name">
                                            Arlene McCoy   
                                        </p>
                                        <p className="blog-date">
                                            November 27, 2024
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

export default Blog