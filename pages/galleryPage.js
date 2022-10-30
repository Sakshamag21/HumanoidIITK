import MenuBar from "../components/menuBar";
import styles from "./galleryPage.module.css"
function GalleryPage(){
    return(<div className={styles.bodyimage}>
      <MenuBar></MenuBar>
    <div className={styles.wrapper}>
    <img className={styles.imag} src="/botTest.jpg" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?summer" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?plants" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?snow" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?roses" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?sky" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?nature" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?blossom" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?ice" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?spring" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?blossom" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?ice" alt=""></img>
    <img className={styles.imag} src="https://source.unsplash.com/random/600x600?spring" alt=""></img>
  </div>
  </div>)
}

export default GalleryPage;