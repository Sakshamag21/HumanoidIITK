import MenuBar from "../components/menuBar"
import BotSection from "../components/botSection"
import styles from "./firaPage.module.css"
import ImageSlider3 from "../components/imageSlider3";
function fIRAPage(){
    return(<div ><MenuBar></MenuBar>
    <ImageSlider3></ImageSlider3>
    {/* <div className={styles.title} style={{color:"white",backgroundColor:"black"}}><b>FIRA World Cup</b></div> */}
    
    <div className={styles.aboutFira}>
        <div className={styles.titleFira}>About Fira</div>
        The Federation of International Sports Association (FIRA) – founded by Prof. Jong-Hwan Kim, KAIST, Korea in 1996 – is 
    the oldest robot soccer competition in the world. From humble beginnings, FIRA has grown to a major robotics competition 
    with the goal using sports as benchmark problems for state of the art research in robotics and other related areas. FIRA
     also includes the FIRA Air competition for autonomous flying robots, FIRA Challenge for robotics research with great societal
      benefits such as urban search and rescue robots, and FIRA Youth for the next generation of researchers. In 2018, FIRA RoboWorld
       Cup was held in Tai Chung, Taiwan and attracted more than 1,200 participants. And in 2019 The FIRA RoboWorld Cup was held in
        Changwon, South Korea and the year after, due to the covid-19 situation in the world, FIRA RoboWorld Cup had multiple events
         online.</div>
         
    </div>
    
    )
}

export default fIRAPage