import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Home from "../../Home/Home";
import Projects from "../../Projects/Projects";
import "../Header/Header.css";

const Header = () => {
  return (
    <>
       <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3 header shadow-sm">
  <a className="navbar-brand" href="#">kushagra.dev</a>
  <ul className="nav nav-pills">
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading1">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading2">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading3">Projects</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading4">Contact</a>
    </li>
    
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex={0}>
  <div id="scrollspyHeading1"><Home/></div>
  <section className="tech-stack section">TECH STACK |</section>
  <div id="scrollspyHeading2"><About/></div>
  <section className="section"></section>
  <div id="scrollspyHeading3"><Projects/></div>
  <section className="section"></section>
  <div id="scrollspyHeading4"><Contact/></div>
  
</div>
    </>
  );
};

export default Header;
