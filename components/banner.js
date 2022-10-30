import { Fragment } from "react";
import styles from "./banner.module.css";
import Ach from "./ach";

export default function Banner(){
    return(<Fragment>
        <div className={styles.back}>
            <div className={styles.robo}> </div>
            
            <div className={styles.content}>
                <div className={styles.name}>Team Humanoid</div>
                Join the Robolution
            </div>
        </div>
        <div className={styles.about}>
            <div className={styles.aboutTitle} id="section1">About Us</div>
            <p>Humanoid Team is a student run organization at one of the premier 
                technical institutes of the country, Indian Institute of Technology, 
                Kanpur. We are a team of highly motivated, enthusiastic, passionate and
                 dedicated students who work towards the ultimate goal of developing 
                 Humanoid robots. Our team comprises of students from a spectrum of 
                 different departments and years (i.e. First years to Post Graduates) 
                 who are passionate to pursue, explore, learn. We began our venture in 
                 the year 2011, by the collective efforts of a group of students with a 
                 strong urge to complement the theoretical knowledge imparted in 
                 classrooms, emphasizing on the practical aspects of engineering.
                  Their idea to develop an automotive culture revolutionized the 
                  institute and SAE IIT Kanpur started with an initial strength of 
                  over 150 student members.The competitions we participate in are 
                  highly prestigious and are judged by the professionals who command 
                  respect in the automotive industry in order to showcase our technical 
                  prowess, skills and hone our knowledge pertaining to real life 
                  engineering. By becoming a part of SAE IIT Kanpur, students embark upon the path 
                  that will nurture priceless practical skills in their respective fields of both engineering and business, enriching their college experience and equipping them 
                  with the knowledge that will allow them to prosper in their chosen career. </p>
            </div>
            <Ach></Ach>

    </Fragment>)
}