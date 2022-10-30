import { Fragment, useState } from "react"
import styles from "./menuBar.module.css"
import Link from 'next/link';
import { Link as Link1, animateScroll as scroll } from "react-scroll";



function MenuBar() {
    
   
    return(<Fragment> 
        
        
        <div className={styles.navigation}>
            <input type="checkbox" className={styles.navigation__checkbox} id="navi-toggle"></input>

             <label htmlFor="navi-toggle" className={styles.navigation__button}>
                <span className={styles.navigation__icon}>&nbsp;</span>
            </label> 
            
            <div className={styles.navigation__background}>&nbsp;</div>

            <nav className={styles.navigation__nav}>
                <ul className={styles.navigation__list}>
                   
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Home</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Software</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Hardware</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Members</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Gallery</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Timeline</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Hardware</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Contact</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Bot description</a></li>
                    </ul>
            </nav>
        </div>
        {/* <div className={styles.logo}></div> */}
        <div className={styles.menu} >
            <div className={styles.logo}></div>

            
        
            
            
                <button className={styles.menubutton}><Link href="/"><a>Home</a></Link></button>
                <button className={styles.menubutton} ><Link href="/"><Link1 activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={50}>About Us</Link1></Link></button>
            <button className={styles.menubutton} ><Link href="/"><Link1 activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={50}>Contact Us</Link1></Link></button>
            <button className={styles.menubutton}><Link href="/membersPage"><a>Members</a></Link></button>
            <button className={styles.menubutton}><Link href="/alumni"><a>Alumni</a></Link></button>
            <button className={styles.menubutton}><Link href="/botPage"><a>Bots</a></Link></button>
            <button className={styles.menubutton}><Link href="/galleryPage1"><a>Gallery</a></Link></button>
            <button className={styles.menubutton}><Link href="/firaPage"><a>FIRA</a></Link></button>
            
            

        </div>
    </Fragment>)
}

export default MenuBar;
