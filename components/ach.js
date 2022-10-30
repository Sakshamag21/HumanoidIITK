import styles from "./ach.module.css";
import {useState,useEffect} from "react"
const Ach=()=>{
    const [achNum,setAchNum]=useState(0);
    const [prNum,setprNum]=useState(0);
    
    useEffect(()=>{
        
        if (achNum===10) return;
        const timer= setTimeout(()=>{
            setAchNum(achNum+1)
        },500);
        if (achNum>20){
        return ()=>clearTimeout(timer);}
    })
    useEffect(()=>{
        
        if (prNum===5) return;
        const timer= setTimeout(()=>{
            setprNum(prNum+1)
        },1000);
        if (prNum>20){
        return ()=>clearTimeout(timer);}
    })
    return(<>
    <div className={styles.imgBack}>
        <div className={styles.boxc}>
        <div className={styles.achive}>Achivement</div>
        <div className={styles.number}>{achNum}</div>
        </div>
        <div className={styles.boxc}>
        <div className={styles.achive}>Projects</div>
        <div className={styles.number}>{prNum}</div>
        </div>

    </div>
    
    </>)
}
export default Ach;