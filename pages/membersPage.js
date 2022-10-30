import MenuBar from "../components/menuBar";
import MembersCard from "../components/membersCard";
import styles from "./membersPage.module.css";
import MembersCardHead20 from "../components/membersCardHead20";
// import tr4 from "../data.json";
function membersPage(){
    return(<>
        <MenuBar></MenuBar>
        <div className={styles.title}><b>Meet the Team</b></div>
        <div className={styles.title1}>Heads</div>
        <div className={styles.membersBox}>
        <MembersCardHead20 ></MembersCardHead20></div>
        <div className={styles.title1}>Members</div>
        <div className={styles.membersBox}>
        <MembersCard></MembersCard></div>
        </>)
}
export default membersPage;