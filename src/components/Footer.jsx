import { Navbar } from "react-bootstrap";
import { BsInstagram, BsFacebook, BsTwitter, BsGithub, BsYoutube} from "react-icons/bs";

const Footer = () => {
    
    return (
        <>
            <Navbar bg="dark" expand={"md"} className="" fixed="bottom">
                <Navbar.Brand className="m-auto" href="#home">
                    <BsInstagram color="#ffffff"/>
                </Navbar.Brand>
                <Navbar.Brand className="m-auto" href="#home">
                    <BsFacebook color="#ffffff"/>
                </Navbar.Brand>
                <Navbar.Brand className="m-auto" href="#home">
                    <BsTwitter color="#ffffff"/>
                </Navbar.Brand>
                <Navbar.Brand className="m-auto" href="#home">
                    <BsGithub color="#ffffff"/>
                </Navbar.Brand>
                <Navbar.Brand className="m-auto" href="#home">
                    <BsYoutube color="#ffffff"/>
                </Navbar.Brand>
            </Navbar>
      
        </>
    )
}

export default Footer;