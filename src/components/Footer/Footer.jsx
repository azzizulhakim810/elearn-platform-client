import { Link } from "react-router-dom";
import logo from "/logo.png";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-black text-white rounded-none z-10 ">
        <Link to='/'><img className="w-52" src={logo} alt="" /></Link>
  <nav className="grid grid-flow-col gap-4">
    <Link to='/' className="link link-hover">Home</Link> 
    <Link to='/login' className="link link-hover">Login</Link> 
    <Link to='/allAssignments' className="link link-hover">All Assignments</Link> 
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-5  text-2xl">
    <FaLinkedin className="cursor-pointer" />
    <FaInstagram  className="cursor-pointer" />
    <FaFacebook className="cursor-pointer"  />
    <FaGithub  className="cursor-pointer" />
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - All right reserved by E-Learn</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;