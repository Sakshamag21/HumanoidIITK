import styles from "./botSection.module.css"
import tr1 from "../data1.json"


function BotSection(){


    return(<><div className={styles.botContainer}>
        {/* <div className={styles.imgh}><img src="./Screenshot1.png" styles={{objectFit:'cover'}}></img></div> */}
        <div className={styles.imgh+" "+styles.pic1}></div>
        <div className={styles.desc}>
            <div className={styles.nameFont}>Archery</div>
            <div className={styles.description}>
                <li><b>Task:</b> Aim and Shoot</li>
                <li>Segmentation of target using image processing algorithm</li>
                <li>The bot waits for the target to arrive at bottom most position </li>
                <li>It observes the centre and angular velocity of target</li>
                <li>Accordingly, it calculates time of flight and shoots.</li>
            </div>
        </div>
    </div>
    
    <div className={styles.botContainer}>
    <div className={styles.imgh+" "+styles.pic2}></div>
        <div className={styles.desc}>
            <div className={styles.nameFont}>Marathon</div>
            <div className={styles.description}>
                <li><b>Task:</b> Endurance race over relatively long distance.The robots<br></br> follow a coloured track </li>
                <li>Segmentation of line to obtain goal</li>
                <li>Navigation module to generate path</li>
                <li>Arrow detection and change path accordingly</li>
                
            </div>
        </div>
    </div>

    <div className={styles.botContainer}>
    <div className={styles.imgh+" "+styles.pic3}></div>
        <div className={styles.desc}>
            <div className={styles.nameFont}>Basket ball</div>
            <div className={styles.description}>
                <li><b>Task:</b> Grab basketball and throw in a hoop </li>
                <li>Identify the ball and approach it</li>
                <li>With the start and the endpoint known, trajectory generation<br></br> module gives angles to motors</li>
                <li>Obtain the distance of ball and basket from the robot</li>
                <li>Throw at suitable angle of departure</li>
            </div>
        </div>
    </div>

    <div className={styles.botContainer}>
    <div className={styles.imgh+" "+styles.pic4}></div>
        <div className={styles.desc}>
            <div className={styles.nameFont}>Weightlifting</div>
            <div className={styles.description}>
                <li><b>Task:</b>Pick up the weights and carry to a goal</li>
                <li>Adopt to the change in weight distribution by lowering the <br></br>robot's natural COM.</li>
                
            </div>
        </div>
    </div>
    
    </>
    
    )
}


export default BotSection;

