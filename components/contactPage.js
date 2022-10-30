import styles from "./contactPage.module.css";

function ContactPage(){
    return(<>
    <div className={styles.background}>
  <div className={styles.container}>
    <div className={styles.screen}>
      <div className={styles.screenHeader}>
        <div className={styles.screenHeaderLeft}>
          <div className={styles.screenHeaderButton+" "+styles.circle}></div>
          <div className={styles.screenHeaderButton+" "+styles.maximize}></div>
          <div className={styles.screenHeaderButton+" "+styles.minimize}></div>
        </div>
        <div className={styles.screenHeaderRight}>
          <div className={styles.screenHeaderEllipsis}></div>
          <div className={styles.screenHeaderEllipsis}></div>
          <div className={styles.screenHeaderEllipsis}></div>
        </div>
      </div>
      <div className={styles.screenBody}>
        <div className={styles.screenBodyItem+" "+styles.left}>
          <div className={styles.appTitle}>
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className={styles.appContact}>Address:-Robo Room,<br></br>Hall 12,IIT Kanpur</div>
        </div>
        <div className={styles.screenBodyItem}>
          <div className={styles.appForm}>
            <div className={styles.appFormGroup}>
              <input className={styles.appFormControl} placeholder="NAME" type="text" id="name" required></input>
            </div>
            <div className={styles.appFormGroup}>
              <input className={styles.appFormControl} placeholder="EMAIL" type="mail" id="mail" required></input>
            </div>
            <div className={styles.appFormGroup}>
              <input className={styles.appFormControl} placeholder="CONTACT NO" type="number"></input>
            </div>
            <div className={styles.appFormGroup+" "+styles.message}>
              <input className={styles.appFormControl} placeholder="MESSAGE" type="text"></input>
            </div>
            <div className={styles.appFormGroup+" "+styles.buttons}>
              
              <button className={styles.appFormButton}>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className={styles.credits}>
      inspired by
      <a className={styles.creditsLink} href="https://dribbble.com/shots/2666271-Contact" target="_blank">
        <svg className={styles.dribble} viewBox="0 0 200 200">
          <g stroke="#ffffff" fill="none">
            <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
            <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
            <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
            <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
          </g>
        </svg>
        Gururaj
      </a>
    </div> */}
  </div>
</div>

    </>)
}

export default ContactPage;