import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { RxHamburgerMenu } from 'react-icons/rx';
import { IconContext } from "react-icons/lib/esm/iconContext";
import { AiOutlineClose } from 'react-icons/ai';
import {useState } from "react";

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
                    <div className="resume-container">
                        <FontAwesomeIcon size="lg" icon={faCircleArrowDown} />
                        <a className="resume-btn">
                            Resume
                        </a>
                    </div>
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