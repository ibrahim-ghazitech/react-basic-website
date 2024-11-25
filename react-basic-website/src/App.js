import logo from './logo.png';
import './App.css';
import Button from './component/button/button';
import Main from './component/main/main';
import Company from './component/company/company';

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
              <li><a href="javascript:void(0)">Home</a></li>
              <li><a href="javascript:void(0)">About</a></li>
              <li><a href="javascript:void(0)">Pages</a></li>
              <li><a href="javascript:void(0)">Blog</a></li>
              <li><a href="javascript:void(0)">Contact</a></li>
            </ul>
          </div>
          <div className="btn">
            <Button/>
          </div>
        </nav>
      </div>
    </header>
    <Main/>
    <Company/>
    </>
  );
}

export default Nav;
