import styles from "./imageSlider.module.css"

var i=0;

function nexts() {
    if (i === 0) {
      post[i + 1].style = "left:600px;z-index:1";
      b[i + 1].style = "";
      
      post[p - 1].style = "left:-600px;z-index:1";
      b[p - 1].style = "";
  
      post[i].style = "left:0;z-index:3";
      b[i].style = "background-color:aquamarine";
      i++;
    } else if (i > 0 && i < p - 1) {
      post[i - 1].style = "left:-600px;z-index:1";
      b[i - 1].style = "";
  
      post[i].style = "left:0;z-index:3";
      b[i].style = "background-color:aquamarine";
  
      post[i + 1].style = "left:600px;z-index:1";
      b[i + 1].style = "";
      i++;
    } else if (i === p - 1) {
      post[i - 1].style = "left:-600px;z-index:1";
      b[i - 1].style = "";
  
      post[i].style = "left:0;z-index:3";
      b[i].style = "background-color:aquamarine";
  
      i = 0;
  
      post[i].style = "left:600px;z-index:1";
      b[i].style = "";
    }
  }

function ImageSlider(){
    if (process.browser){
    var post = document.getElementsByClassName("post");
    var b = document.querySelectorAll(".box div");
    var p = post.length;}
    function nexts() {
        if (i === 0) {
            document.getElementsByClassName("post")[i + 1].style = "left:600px;z-index:1";
          b[i + 1].style = "";
          
          post[p - 1].style = "left:-600px;z-index:1";
          b[p - 1].style = "";
      
          post[i].style = "left:0;z-index:3";
          b[i].style = "background-color:aquamarine";
          i++;
        } else if (i > 0 && i < p - 1) {
          post[i - 1].style = "left:-600px;z-index:1";
          b[i - 1].style = "";
      
          post[i].style = "left:0;z-index:3";
          b[i].style = "background-color:aquamarine";
      
          post[i + 1].style = "left:600px;z-index:1";
          b[i + 1].style = "";
          i++;
        } else if (i === p - 1) {
          post[i - 1].style = "left:-600px;z-index:1";
          b[i - 1].style = "";
      
          post[i].style = "left:0;z-index:3";
          b[i].style = "background-color:aquamarine";
      
          i = 0;
      
          post[i].style = "left:600px;z-index:1";
          b[i].style = "";
        }
      }
    

setInterval(nexts, 2000);



    return(<>
    <div className={styles.container}>
  <div className={styles.post}>
    <div className={styles.imga}>
      <img className={styles.img} src="https://images.pexels.com/photos/4328962/pexels-photo-4328962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""></img>
    </div>
    <h1>title - 1</h1>
  </div>
  <div className={styles.post}>
    <div className={styles.imga}>
      <img className={styles.img} src="https://images.pexels.com/photos/4354389/pexels-photo-4354389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""></img>
    </div>
    <h1>title - 2</h1>
  </div>
  <div className={styles.post}>
    <div className={styles.imga}>
      <img className={styles.img} src="https://images.pexels.com/photos/318391/pexels-photo-318391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""></img>
    </div>
    <h1>title - 3</h1>
  </div>
  <div className={styles.post}>
    <div className={styles.imga}>
      <img className={styles.img} src="https://images.pexels.com/photos/2857580/pexels-photo-2857580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
    </div>
    <h1>title - 4</h1>
  </div>
</div>

<div className={styles.box}>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
    </>)
}

export default ImageSlider;