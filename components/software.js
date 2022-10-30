// import { Fragment } from "react";
import styles from "./software.module.css";
import tr3 from "../data2.json";
function SoftwareCard(){
return(tr3.map(record3=>{
    return(
        <div className={styles.containerImage} key={record3.id}>
            <img className={styles.iconSoftware} src={record3.image}></img>
            <div className={styles.nameIconBack}> <div className={styles.nameIcon}>{record3.name}</div></div>
            {/* <div className={styles.nameIcon}>{record3.name}</div> */}
        </div>
    )}))}

export default SoftwareCard;
