import logo from './logo.png';
import './App.css';
import Button from './component/button/button';
import Main from './component/main/main';
import Company from './component/company/company';
import Client from './component/happy-client/client';
import Services from './component/services/services';
import WhyChoose from './component/why-choose/why-choose';
import Work from './component/our-work/our-work';
import Team from './component/our-team/our-team';
import Blog from './component/blog/blog';
import Footer from './component/footer/footer';

function Nav() {
  return (
    <>
    <header className="header">
      <div className="container">
        <nav className="navigation">
          <div className="logo-div">
              <img src={logo} alt="company-logo" className="company-logo" />
          </div>
          <div className="nav-list">
            <ul className="nav-item">
              <li><a href="javascript:void(0)">{"Home"}</a></li>
              <li><a href="javascript:void(0)">{"About"}</a></li>
              <li><a href="javascript:void(0)">{"Pages"}</a></li>
              <li><a href="javascript:void(0)">{"Blog"}</a></li>
              <li><a href="javascript:void(0)">{"Contact"}</a></li>
            </ul>
          </div>
          <div className="btn">
            <Button>{"Get a qoute"}</Button>
          </div>
        </nav>
      </div>
    </header>
    <Main/>
    <Company/>
    <Client/>
    <Services/>
    <WhyChoose/>
    <Work/>
    <Team/>
    <Blog/>
    <Footer/>
    </>
  );
}

export default Nav;
