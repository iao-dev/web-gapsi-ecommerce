import "./Header.css";
import gapsiLogo from '../assets/images/logo.png';

function Header(props){
    return ( 
        <div className="header">
      <a href="#" className="logo">  <img src={gapsiLogo} alt="Logo" /></a>
      <p>{props.title}</p>
      </div>
    );
   
}

export default Header;