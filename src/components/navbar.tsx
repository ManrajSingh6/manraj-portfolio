import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { RxHamburgerMenu } from 'react-icons/rx';
import { IconContext } from "react-icons/lib/esm/iconContext";
import { AiOutlineClose } from 'react-icons/ai';
import {useState } from "react";
import ManrajResume from "../assets/files/ManrajSinghResume.pdf";

interface NavLinkOpts {
    linkTitle: string;
    linkTo: string
}

const navLinks: NavLinkOpts[] = [
    {
        linkTitle: "Experience",
        linkTo: "#Experience"
    },
    {
        linkTitle: "Projects",
        linkTo: "#Projects"
    },
    {
        linkTitle: "Contact",
        linkTo: "#Contact"
    }
]

export default function Navbar(){
    const [active, setActive] = useState("nav__menu");
    
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
            document.body.style.overflow = 'hidden';
        } else {
            setActive("nav__menu");
            document.body.style.overflow = 'unset';
        }
    }

    function closeMenu(){
        setActive("nav__menu")
        document.body.style.overflow = 'unset';
    }
    
    return(
        <header>
            <a className="header-logo" href="/">Manraj Singh</a>
            <nav>
                <div className={active}>
                    <div className="links-container">
                        <ul>
                            {
                                navLinks.map(({linkTitle, linkTo}, index) => {
                                    return (
                                        <li className="nav__item" key={index}><a href={`/${linkTo}`} onClick={closeMenu}>{linkTitle}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <a className="resume-container" href={ManrajResume}>
                        <FontAwesomeIcon size="lg" icon={faCircleArrowDown} style={{color: "#66FCF1"}}/>
                        Resume
                    </a>
                </div>
            </nav>
            <IconContext.Provider value={{color: 'white', size: '25px'}}>
                <div className="menu-container">
                    {
                        active === "nav__menu" ? (
                            <RxHamburgerMenu className="nav-toggle-icons" onClick={navToggle}/>
                        ) : (<AiOutlineClose className="nav-toggle-icons" onClick={navToggle}/>)
                    }
                </div>
            </IconContext.Provider>
        </header>
    );
}