import MenuBar from "../components/menuBar";
import MembersCard from "../components/membersCard";
import styles from "./membersPage.module.css";
import MembersCardHead19 from "../components/membersCrdHead19";
import MembersCardHead18 from "../components/membersCardHead18";
// import MembersCardHead17 from "../components/membersCardHead17";
function alumni(){
    return(<>
        <MenuBar></MenuBar>
        <div className={styles.title}><b>Our Alumni</b></div>
        <div className={styles.title1}>Y18 Heads</div>
        <div className={styles.membersBox}>
        <MembersCardHead18></MembersCardHead18></div>
        
        <div className={styles.title1}>Y19 Members</div>
        <div className={styles.membersBox}>
        <MembersCardHead19></MembersCardHead19></div>
        
        
        
        </>)
}
export default alumni;