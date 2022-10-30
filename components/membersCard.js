import { Fragment } from "react"
import styles from "./membersCard.module.css"
import tr4 from "../data.json";
// import Image from "next/image";

function MembersCard(){
    
    
    return(
        
        tr4.map(record4=>{

    
    return(
            
            <div className={styles.member} key={record4.id}>
                <img className={styles.imgh1} src={record4.imgh}></img>
                <p>{record4.name}</p>
                <p>{record4.position}</p>
                <p>{record4.email}</p>
                <p>{record4.mobile}</p>
            </div>
            
        
    )
   })
   
)}

export default MembersCard;
