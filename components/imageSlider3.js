import styles from "./imageSlider3.module.css";

function ImageSlider3() {
    return(<>
    <div className={styles.container}>
        <div className={styles.freebox}></div>
        <div className={styles.wrapper}>
        
        <img className={styles.img} src="/fira15.png"></img >
        <img className={styles.img} src="/fira11.png"></img >
        <img className={styles.img} src="/fira8.jpeg"></img >
        <img className={styles.img} src="/fira9.webp"></img >
        <img className={styles.img} src="/fira10.png"></img >
        <img className={styles.img} src="/fira12.png"></img >
        <img className={styles.img} src="/fira13.png"></img >
            
        </div>
    </div>
    </>)
}

export default ImageSlider3;